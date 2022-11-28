import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MatrixAPI:
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

    
    def calculate_matrix(self, request: operations.CalculateMatrixRequest) -> operations.CalculateMatrixResponse:
        r"""Batch Matrix Endpoint
        Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.
        
        The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):
         * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ \"job_id\": \"7ac65787-fb99-4e02-a832-2c3010c70097\" }`
         * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`
        
        Here are some full examples via curl:
        ```bash
        $ curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]\" -d '{\"points\":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}'
        {\"job_id\":\"7ac65787-fb99-4e02-a832-2c3010c70097\"}
        ```
        
        Pick the returned `job_id` and use it in the next GET requests:
        ```bash
        $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\"
        {\"status\":\"waiting\"}
        ```
        
        When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`:
        ```bash
        $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\"
        {\"solution\":{\"weights\":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],\"info\":{\"copyrights\":[\"GraphHopper\",\"OpenStreetMap contributors\"]}},\"status\":\"finished\"}
        ```
        
        Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.:
        ```json
        {\"message\":\"Cannot find from_points: 1\"}
        ```
        And the optional `hints` array.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/matrix/calculate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalculateMatrixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobID])
                res.job_id = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out

        return res

    
    def get_matrix(self, request: operations.GetMatrixRequest) -> operations.GetMatrixResponse:
        r"""GET Matrix Endpoint
        With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient
        as it works out-of-the-box in the browser. If possible you should
        prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations
        and can also gzip the **request**. (Note, that all endpoints return gzipped responses).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/matrix"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMatrixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MatrixResponse])
                res.matrix_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out

        return res

    
    def get_matrix_solution(self, request: operations.GetMatrixSolutionRequest) -> operations.GetMatrixSolutionResponse:
        r"""GET Batch Matrix Endpoint
        This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/matrix/solution/{jobId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMatrixSolutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MatrixResponse])
                res.matrix_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out

        return res

    
    def post_matrix(self, request: operations.PostMatrixRequest) -> operations.PostMatrixResponse:
        r"""POST Matrix Endpoint
        
        The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request.
        In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key.
        Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request.
        The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters
        please refer to the [guide of the GET endpoint](#operation/getMatrix).
        
        **Please note that in contrast to GET endpoint the points have to be specified as `[longitude, latitude]` array (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.
        
        For example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON:
        ```json
        { \"points\": [[11,10], [22,20]], \"vehicle\": \"car\" }
        ```
        
        A complete curl Example:
        ```bash
        curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]\" -d '{\"elevation\":false,\"out_arrays\":[\"weights\", \"times\"],\"from_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"to_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"vehicle\":\"car\"}'
        ```
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/matrix"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMatrixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MatrixResponse])
                res.matrix_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out

        return res

    