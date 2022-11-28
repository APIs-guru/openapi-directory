import requests
from sdk.models import operations
from . import utils

class Workspaces:
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

    
    def get_workspaces(self, request: operations.GetWorkspacesRequest) -> operations.GetWorkspacesResponse:
        r"""Get all workspaces for the current user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/workspaces"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_workspaces_workspace_id_(self, request: operations.GetWorkspacesWorkspaceIDRequest) -> operations.GetWorkspacesWorkspaceIDResponse:
        r"""Get a workspace
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspacesWorkspaceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    