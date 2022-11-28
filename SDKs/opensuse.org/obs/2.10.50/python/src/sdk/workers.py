import requests
from sdk.models import operations
from . import utils

class Workers:
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

    
    def get_worker_architecture_name_worker_id_(self, request: operations.GetWorkerArchitectureNameWorkerIDRequest) -> operations.GetWorkerArchitectureNameWorkerIDResponse:
        r"""Lists capabilites of a worker.
        Lists capabilites of a worker.
        
        This can be useful when checking for constraints.
        
        This operation is the same as `GET /worker/capability/{architecture_name}:{worker_id}`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/worker/{architecture_name}:{worker_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkerArchitectureNameWorkerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_worker_status(self, request: operations.GetWorkerStatusRequest) -> operations.GetWorkerStatusResponse:
        r"""Lists status of workers, jobs, backend services and general statistics.
        Lists status of workers, running jobs, waiting jobs, status of the backend services and general statistics.
        
        Other ways to obtain the same information as with this endpoint are:
          * `GET /worker/_status`
          * `GET /status/workerstatus`
          * `GET /build/_workerstatus`
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/worker/status"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkerStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def post_worker_cmd_equal_checkconstraints(self, request: operations.PostWorkerCmdEqualCheckconstraintsRequest) -> operations.PostWorkerCmdEqualCheckconstraintsResponse:
        r"""Lists workers which match a constraints filter.
        Given a project, package, repository and architecture, list workers which can build with that restrictions, and also match a constraints filter.
        
        This endpoint doesn't create or modify any data.
        
        More information about constraints can be found in the
        [user guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.build_job_constraints.html).
        
        This operation is the same as `POST /worker/command/run?cmd=checkconstraints`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/worker?cmd=checkconstraints"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkerCmdEqualCheckconstraintsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    