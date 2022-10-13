import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://tagmanager.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def tagmanager_accounts_containers_create(self, request: operations.TagmanagerAccountsContainersCreateRequest) -> operations.TagmanagerAccountsContainersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/containers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Container])
                res.container = out

        return res

    
    
    def tagmanager_accounts_containers_environments_create(self, request: operations.TagmanagerAccountsContainersEnvironmentsCreateRequest) -> operations.TagmanagerAccountsContainersEnvironmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/environments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersEnvironmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Environment])
                res.environment = out

        return res

    
    
    def tagmanager_accounts_containers_environments_list(self, request: operations.TagmanagerAccountsContainersEnvironmentsListRequest) -> operations.TagmanagerAccountsContainersEnvironmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/environments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersEnvironmentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEnvironmentsResponse])
                res.list_environments_response = out

        return res

    
    
    def tagmanager_accounts_containers_environments_reauthorize(self, request: operations.TagmanagerAccountsContainersEnvironmentsReauthorizeRequest) -> operations.TagmanagerAccountsContainersEnvironmentsReauthorizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:reauthorize", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersEnvironmentsReauthorizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Environment])
                res.environment = out

        return res

    
    
    def tagmanager_accounts_containers_list(self, request: operations.TagmanagerAccountsContainersListRequest) -> operations.TagmanagerAccountsContainersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/containers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListContainersResponse])
                res.list_containers_response = out

        return res

    
    
    def tagmanager_accounts_containers_version_headers_latest(self, request: operations.TagmanagerAccountsContainersVersionHeadersLatestRequest) -> operations.TagmanagerAccountsContainersVersionHeadersLatestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/version_headers:latest", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionHeadersLatestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersionHeader])
                res.container_version_header = out

        return res

    
    
    def tagmanager_accounts_containers_version_headers_list(self, request: operations.TagmanagerAccountsContainersVersionHeadersListRequest) -> operations.TagmanagerAccountsContainersVersionHeadersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/version_headers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionHeadersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListContainerVersionsResponse])
                res.list_container_versions_response = out

        return res

    
    
    def tagmanager_accounts_containers_versions_live(self, request: operations.TagmanagerAccountsContainersVersionsLiveRequest) -> operations.TagmanagerAccountsContainersVersionsLiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/versions:live", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsLiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersion])
                res.container_version = out

        return res

    
    
    def tagmanager_accounts_containers_versions_publish(self, request: operations.TagmanagerAccountsContainersVersionsPublishRequest) -> operations.TagmanagerAccountsContainersVersionsPublishResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:publish", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsPublishResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublishContainerVersionResponse])
                res.publish_container_version_response = out

        return res

    
    
    def tagmanager_accounts_containers_versions_set_latest(self, request: operations.TagmanagerAccountsContainersVersionsSetLatestRequest) -> operations.TagmanagerAccountsContainersVersionsSetLatestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:set_latest", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsSetLatestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersion])
                res.container_version = out

        return res

    
    
    def tagmanager_accounts_containers_versions_undelete(self, request: operations.TagmanagerAccountsContainersVersionsUndeleteRequest) -> operations.TagmanagerAccountsContainersVersionsUndeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:undelete", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsUndeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersion])
                res.container_version = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_built_in_variables_create(self, request: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/built_in_variables", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateBuiltInVariableResponse])
                res.create_built_in_variable_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_built_in_variables_list(self, request: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/built_in_variables", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEnabledBuiltInVariablesResponse])
                res.list_enabled_built_in_variables_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_built_in_variables_revert(self, request: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest) -> operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}/built_in_variables:revert", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RevertBuiltInVariableResponse])
                res.revert_built_in_variable_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_clients_create(self, request: operations.TagmanagerAccountsContainersWorkspacesClientsCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesClientsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/clients", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesClientsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_clients_list(self, request: operations.TagmanagerAccountsContainersWorkspacesClientsListRequest) -> operations.TagmanagerAccountsContainersWorkspacesClientsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesClientsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientsResponse])
                res.list_clients_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_create(self, request: operations.TagmanagerAccountsContainersWorkspacesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/workspaces", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Workspace])
                res.workspace = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_create_version(self, request: operations.TagmanagerAccountsContainersWorkspacesCreateVersionRequest) -> operations.TagmanagerAccountsContainersWorkspacesCreateVersionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:create_version", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesCreateVersionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateContainerVersionResponse])
                res.create_container_version_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_folders_create(self, request: operations.TagmanagerAccountsContainersWorkspacesFoldersCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesFoldersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/folders", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesFoldersCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Folder])
                res.folder = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_folders_entities(self, request: operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest) -> operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:entities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderEntities])
                res.folder_entities = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_folders_list(self, request: operations.TagmanagerAccountsContainersWorkspacesFoldersListRequest) -> operations.TagmanagerAccountsContainersWorkspacesFoldersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/folders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesFoldersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFoldersResponse])
                res.list_folders_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_folders_move_entities_to_folder(self, request: operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest) -> operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:move_entities_to_folder", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def tagmanager_accounts_containers_workspaces_get_status(self, request: operations.TagmanagerAccountsContainersWorkspacesGetStatusRequest) -> operations.TagmanagerAccountsContainersWorkspacesGetStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}/status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesGetStatusResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetWorkspaceStatusResponse])
                res.get_workspace_status_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_list(self, request: operations.TagmanagerAccountsContainersWorkspacesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/workspaces", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListWorkspacesResponse])
                res.list_workspaces_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_quick_preview(self, request: operations.TagmanagerAccountsContainersWorkspacesQuickPreviewRequest) -> operations.TagmanagerAccountsContainersWorkspacesQuickPreviewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:quick_preview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesQuickPreviewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickPreviewResponse])
                res.quick_preview_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_resolve_conflict(self, request: operations.TagmanagerAccountsContainersWorkspacesResolveConflictRequest) -> operations.TagmanagerAccountsContainersWorkspacesResolveConflictResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:resolve_conflict", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesResolveConflictResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def tagmanager_accounts_containers_workspaces_sync(self, request: operations.TagmanagerAccountsContainersWorkspacesSyncRequest) -> operations.TagmanagerAccountsContainersWorkspacesSyncResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:sync", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesSyncResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncWorkspaceResponse])
                res.sync_workspace_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_tags_create(self, request: operations.TagmanagerAccountsContainersWorkspacesTagsCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesTagsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/tags", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_tags_list(self, request: operations.TagmanagerAccountsContainersWorkspacesTagsListRequest) -> operations.TagmanagerAccountsContainersWorkspacesTagsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTagsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagsResponse])
                res.list_tags_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_templates_create(self, request: operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/templates", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomTemplate])
                res.custom_template = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_templates_list(self, request: operations.TagmanagerAccountsContainersWorkspacesTemplatesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/templates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTemplatesResponse])
                res.list_templates_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_triggers_create(self, request: operations.TagmanagerAccountsContainersWorkspacesTriggersCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesTriggersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/triggers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTriggersCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Trigger])
                res.trigger = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_triggers_list(self, request: operations.TagmanagerAccountsContainersWorkspacesTriggersListRequest) -> operations.TagmanagerAccountsContainersWorkspacesTriggersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/triggers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTriggersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTriggersResponse])
                res.list_triggers_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_variables_create(self, request: operations.TagmanagerAccountsContainersWorkspacesVariablesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesVariablesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/variables", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesVariablesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variable])
                res.variable = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_variables_list(self, request: operations.TagmanagerAccountsContainersWorkspacesVariablesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesVariablesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/variables", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesVariablesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVariablesResponse])
                res.list_variables_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_zones_create(self, request: operations.TagmanagerAccountsContainersWorkspacesZonesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesZonesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/zones", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesZonesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Zone])
                res.zone = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_zones_list(self, request: operations.TagmanagerAccountsContainersWorkspacesZonesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesZonesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/zones", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesZonesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListZonesResponse])
                res.list_zones_response = out

        return res

    
    
    def tagmanager_accounts_containers_workspaces_zones_revert(self, request: operations.TagmanagerAccountsContainersWorkspacesZonesRevertRequest) -> operations.TagmanagerAccountsContainersWorkspacesZonesRevertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:revert", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesZonesRevertResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RevertZoneResponse])
                res.revert_zone_response = out

        return res

    
    
    def tagmanager_accounts_list(self, request: operations.TagmanagerAccountsListRequest) -> operations.TagmanagerAccountsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tagmanager/v2/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccountsResponse])
                res.list_accounts_response = out

        return res

    
    
    def tagmanager_accounts_user_permissions_create(self, request: operations.TagmanagerAccountsUserPermissionsCreateRequest) -> operations.TagmanagerAccountsUserPermissionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/user_permissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserPermission])
                res.user_permission = out

        return res

    
    
    def tagmanager_accounts_user_permissions_delete(self, request: operations.TagmanagerAccountsUserPermissionsDeleteRequest) -> operations.TagmanagerAccountsUserPermissionsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def tagmanager_accounts_user_permissions_get(self, request: operations.TagmanagerAccountsUserPermissionsGetRequest) -> operations.TagmanagerAccountsUserPermissionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserPermission])
                res.user_permission = out

        return res

    
    
    def tagmanager_accounts_user_permissions_list(self, request: operations.TagmanagerAccountsUserPermissionsListRequest) -> operations.TagmanagerAccountsUserPermissionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/user_permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUserPermissionsResponse])
                res.list_user_permissions_response = out

        return res

    
    
    def tagmanager_accounts_user_permissions_update(self, request: operations.TagmanagerAccountsUserPermissionsUpdateRequest) -> operations.TagmanagerAccountsUserPermissionsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserPermission])
                res.user_permission = out

        return res

    