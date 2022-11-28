import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Debugger:
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

    
    def clouddebugger_debugger_debuggees_breakpoints_delete(self, request: operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest) -> operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse:
        r"""Deletes the breakpoint from the debuggee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def clouddebugger_debugger_debuggees_breakpoints_get(self, request: operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest) -> operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse:
        r"""Gets breakpoint information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBreakpointResponse])
                res.get_breakpoint_response = out

        return res

    
    def clouddebugger_debugger_debuggees_breakpoints_list(self, request: operations.ClouddebuggerDebuggerDebuggeesBreakpointsListRequest) -> operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse:
        r"""Lists all breakpoints for the debuggee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/debugger/debuggees/{debuggeeId}/breakpoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBreakpointsResponse])
                res.list_breakpoints_response = out

        return res

    
    def clouddebugger_debugger_debuggees_breakpoints_set(self, request: operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest) -> operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse:
        r"""Sets the breakpoint to the debuggee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/set", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetBreakpointResponse])
                res.set_breakpoint_response = out

        return res

    
    def clouddebugger_debugger_debuggees_list(self, request: operations.ClouddebuggerDebuggerDebuggeesListRequest) -> operations.ClouddebuggerDebuggerDebuggeesListResponse:
        r"""Lists all the debuggees that the user has access to.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/debugger/debuggees"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDebuggeesResponse])
                res.list_debuggees_response = out

        return res

    