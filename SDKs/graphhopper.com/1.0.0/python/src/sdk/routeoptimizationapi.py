import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class RouteOptimizationAPI:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def async_vrp(self, request: operations.AsyncVrpRequest) -> operations.AsyncVrpResponse:
        r"""POST route optimization problem (batch mode)
        
        To solve a vehicle routing problem, perform the following steps:
        
        1.) Make a HTTP POST to this URL
        
        ```
        https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
        ```
        
        It returns a job id (job_id).
        
        2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:
        
        ```
        https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
        ```
        
        We recommend to query the solution every 500ms until it returns 'status=finished'.
        
        **Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
        the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vrp/optimize"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AsyncVrpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobID])
                res.job_id = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalErrorMessage])
                res.internal_error_message = out

        return res

    
    def get_solution(self, request: operations.GetSolutionRequest) -> operations.GetSolutionResponse:
        r"""GET the solution (batch mode)
        
        Take the job id and fetch the solution for the vehicle routing problem from this URL:
        
        ```
        https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
        ```
        
        You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vrp/solution/{jobId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSolutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response])
                res.response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSolution404ApplicationJSON])
                res.get_solution_404_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def solve_vrp(self, request: operations.SolveVrpRequest) -> operations.SolveVrpResponse:
        r"""POST route optimization problem
        
        To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).
        
        To solve a new vehicle routing problem, make a HTTP POST to this URL
        
        ```
        https://graphhopper.com/api/1/vrp?key=<your_key>
        ```
        
        It returns the solution to this problem in the JSON response.
        
        Please note that this URL is very well suited to solve minor problems.
        Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
        To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vrp"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SolveVrpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response])
                res.response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalErrorMessage])
                res.internal_error_message = out

        return res

    