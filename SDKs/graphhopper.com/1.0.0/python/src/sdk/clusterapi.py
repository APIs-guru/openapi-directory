import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ClusterAPI:
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

    
    def async_clustering_problem(self, request: operations.AsyncClusteringProblemRequest) -> operations.AsyncClusteringProblemResponse:
        r"""Batch Cluster Endpoint
        
        Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
        long running problems only. The work flow is asynchronous:
        
        - send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
        - poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
          towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cluster/calculate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AsyncClusteringProblemResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_cluster_solution(self, request: operations.GetClusterSolutionRequest) -> operations.GetClusterSolutionResponse:
        r"""GET Batch Solution Endpoint
        This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
        You can fetch it with the job_id, you have been sent.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cluster/solution/{jobId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClusterSolutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterResponse])
                res.cluster_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClusterSolution404ApplicationJSON])
                res.get_cluster_solution_404_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def solve_clustering_problem(self, request: operations.SolveClusteringProblemRequest) -> operations.SolveClusteringProblemResponse:
        r"""POST Cluster Endpoint
        
        The Cluster endpoint is used with a POST request towards
        `https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
        Please note that for problems that take longer than 10 seconds a bad request error is returned.
        In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cluster"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SolveClusteringProblemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterResponse])
                res.cluster_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequest])
                res.bad_request = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalErrorMessage])
                res.internal_error_message = out

        return res

    