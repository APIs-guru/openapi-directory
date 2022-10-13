import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://clouddebugger.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def clouddebugger_controller_debuggees_breakpoints_list(self, request: operations.ClouddebuggerControllerDebuggeesBreakpointsListRequest) -> operations.ClouddebuggerControllerDebuggeesBreakpointsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/controller/debuggees/{debuggeeId}/breakpoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerControllerDebuggeesBreakpointsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListActiveBreakpointsResponse])
                res.list_active_breakpoints_response = out

        return res

    
    
    def clouddebugger_controller_debuggees_breakpoints_update(self, request: operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest) -> operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/controller/debuggees/{debuggeeId}/breakpoints/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_active_breakpoint_response = out

        return res

    
    
    def clouddebugger_controller_debuggees_register(self, request: operations.ClouddebuggerControllerDebuggeesRegisterRequest) -> operations.ClouddebuggerControllerDebuggeesRegisterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/controller/debuggees/register"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerControllerDebuggeesRegisterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegisterDebuggeeResponse])
                res.register_debuggee_response = out

        return res

    
    
    def clouddebugger_debugger_debuggees_breakpoints_delete(self, request: operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest) -> operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def clouddebugger_debugger_debuggees_breakpoints_get(self, request: operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest) -> operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBreakpointResponse])
                res.get_breakpoint_response = out

        return res

    
    
    def clouddebugger_debugger_debuggees_breakpoints_list(self, request: operations.ClouddebuggerDebuggerDebuggeesBreakpointsListRequest) -> operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/debugger/debuggees/{debuggeeId}/breakpoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBreakpointsResponse])
                res.list_breakpoints_response = out

        return res

    
    
    def clouddebugger_debugger_debuggees_breakpoints_set(self, request: operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest) -> operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/set", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetBreakpointResponse])
                res.set_breakpoint_response = out

        return res

    
    
    def clouddebugger_debugger_debuggees_list(self, request: operations.ClouddebuggerDebuggerDebuggeesListRequest) -> operations.ClouddebuggerDebuggerDebuggeesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/debugger/debuggees"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouddebuggerDebuggerDebuggeesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDebuggeesResponse])
                res.list_debuggees_response = out

        return res

    