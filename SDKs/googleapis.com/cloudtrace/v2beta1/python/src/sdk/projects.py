import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def cloudtrace_projects_trace_sinks_create(self, request: operations.CloudtraceProjectsTraceSinksCreateRequest) -> operations.CloudtraceProjectsTraceSinksCreateResponse:
        r"""Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/traceSinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudtraceProjectsTraceSinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TraceSink])
                res.trace_sink = out

        return res

    
    def cloudtrace_projects_trace_sinks_delete(self, request: operations.CloudtraceProjectsTraceSinksDeleteRequest) -> operations.CloudtraceProjectsTraceSinksDeleteResponse:
        r"""Deletes a sink.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudtraceProjectsTraceSinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def cloudtrace_projects_trace_sinks_get(self, request: operations.CloudtraceProjectsTraceSinksGetRequest) -> operations.CloudtraceProjectsTraceSinksGetResponse:
        r"""Get a trace sink by name under the parent resource (GCP project).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudtraceProjectsTraceSinksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TraceSink])
                res.trace_sink = out

        return res

    
    def cloudtrace_projects_trace_sinks_list(self, request: operations.CloudtraceProjectsTraceSinksListRequest) -> operations.CloudtraceProjectsTraceSinksListResponse:
        r"""List all sinks for the parent resource (GCP project).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/traceSinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudtraceProjectsTraceSinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTraceSinksResponse])
                res.list_trace_sinks_response = out

        return res

    
    def cloudtrace_projects_trace_sinks_patch(self, request: operations.CloudtraceProjectsTraceSinksPatchRequest) -> operations.CloudtraceProjectsTraceSinksPatchResponse:
        r"""Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudtraceProjectsTraceSinksPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TraceSink])
                res.trace_sink = out

        return res

    