import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Processes:
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

    
    def script_processes_list(self, request: operations.ScriptProcessesListRequest) -> operations.ScriptProcessesListResponse:
        r"""List information about processes made by or on behalf of a user, such as process type and current status.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/processes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ScriptProcessesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUserProcessesResponse])
                res.list_user_processes_response = out

        return res

    
    def script_processes_list_script_processes(self, request: operations.ScriptProcessesListScriptProcessesRequest) -> operations.ScriptProcessesListScriptProcessesResponse:
        r"""List information about a script's executed processes, such as process type and current status.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/processes:listScriptProcesses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ScriptProcessesListScriptProcessesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListScriptProcessesResponse])
                res.list_script_processes_response = out

        return res

    