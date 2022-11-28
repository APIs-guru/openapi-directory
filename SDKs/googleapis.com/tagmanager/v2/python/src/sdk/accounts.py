import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def tagmanager_accounts_containers_combine(self, request: operations.TagmanagerAccountsContainersCombineRequest) -> operations.TagmanagerAccountsContainersCombineResponse:
        r"""Combines Containers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:combine", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersCombineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Container])
                res.container = out

        return res

    
    def tagmanager_accounts_containers_create(self, request: operations.TagmanagerAccountsContainersCreateRequest) -> operations.TagmanagerAccountsContainersCreateResponse:
        r"""Creates a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/containers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Container])
                res.container = out

        return res

    
    def tagmanager_accounts_containers_destinations_link(self, request: operations.TagmanagerAccountsContainersDestinationsLinkRequest) -> operations.TagmanagerAccountsContainersDestinationsLinkResponse:
        r"""Adds a Destination to this Container and removes it from the Container to which it is currently linked.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/destinations:link", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersDestinationsLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Destination])
                res.destination = out

        return res

    
    def tagmanager_accounts_containers_destinations_list(self, request: operations.TagmanagerAccountsContainersDestinationsListRequest) -> operations.TagmanagerAccountsContainersDestinationsListResponse:
        r"""Lists all Destinations linked to a GTM Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/destinations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersDestinationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDestinationsResponse])
                res.list_destinations_response = out

        return res

    
    def tagmanager_accounts_containers_environments_create(self, request: operations.TagmanagerAccountsContainersEnvironmentsCreateRequest) -> operations.TagmanagerAccountsContainersEnvironmentsCreateResponse:
        r"""Creates a GTM Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/environments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersEnvironmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Environment])
                res.environment = out

        return res

    
    def tagmanager_accounts_containers_environments_list(self, request: operations.TagmanagerAccountsContainersEnvironmentsListRequest) -> operations.TagmanagerAccountsContainersEnvironmentsListResponse:
        r"""Lists all GTM Environments of a GTM Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/environments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersEnvironmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEnvironmentsResponse])
                res.list_environments_response = out

        return res

    
    def tagmanager_accounts_containers_environments_reauthorize(self, request: operations.TagmanagerAccountsContainersEnvironmentsReauthorizeRequest) -> operations.TagmanagerAccountsContainersEnvironmentsReauthorizeResponse:
        r"""Re-generates the authorization code for a GTM Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:reauthorize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersEnvironmentsReauthorizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Environment])
                res.environment = out

        return res

    
    def tagmanager_accounts_containers_list(self, request: operations.TagmanagerAccountsContainersListRequest) -> operations.TagmanagerAccountsContainersListResponse:
        r"""Lists all Containers that belongs to a GTM Account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/containers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListContainersResponse])
                res.list_containers_response = out

        return res

    
    def tagmanager_accounts_containers_lookup(self, request: operations.TagmanagerAccountsContainersLookupRequest) -> operations.TagmanagerAccountsContainersLookupResponse:
        r"""Looks up a Container by destination ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tagmanager/v2/accounts/containers:lookup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Container])
                res.container = out

        return res

    
    def tagmanager_accounts_containers_move_tag_id(self, request: operations.TagmanagerAccountsContainersMoveTagIDRequest) -> operations.TagmanagerAccountsContainersMoveTagIDResponse:
        r"""Move Tag ID out of a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:move_tag_id", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersMoveTagIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Container])
                res.container = out

        return res

    
    def tagmanager_accounts_containers_snippet(self, request: operations.TagmanagerAccountsContainersSnippetRequest) -> operations.TagmanagerAccountsContainersSnippetResponse:
        r"""Gets the tagging snippet for a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:snippet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersSnippetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetContainerSnippetResponse])
                res.get_container_snippet_response = out

        return res

    
    def tagmanager_accounts_containers_version_headers_latest(self, request: operations.TagmanagerAccountsContainersVersionHeadersLatestRequest) -> operations.TagmanagerAccountsContainersVersionHeadersLatestResponse:
        r"""Gets the latest container version header
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/version_headers:latest", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionHeadersLatestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersionHeader])
                res.container_version_header = out

        return res

    
    def tagmanager_accounts_containers_version_headers_list(self, request: operations.TagmanagerAccountsContainersVersionHeadersListRequest) -> operations.TagmanagerAccountsContainersVersionHeadersListResponse:
        r"""Lists all Container Versions of a GTM Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/version_headers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionHeadersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListContainerVersionsResponse])
                res.list_container_versions_response = out

        return res

    
    def tagmanager_accounts_containers_versions_live(self, request: operations.TagmanagerAccountsContainersVersionsLiveRequest) -> operations.TagmanagerAccountsContainersVersionsLiveResponse:
        r"""Gets the live (i.e. published) container version
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/versions:live", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsLiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersion])
                res.container_version = out

        return res

    
    def tagmanager_accounts_containers_versions_publish(self, request: operations.TagmanagerAccountsContainersVersionsPublishRequest) -> operations.TagmanagerAccountsContainersVersionsPublishResponse:
        r"""Publishes a Container Version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:publish", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublishContainerVersionResponse])
                res.publish_container_version_response = out

        return res

    
    def tagmanager_accounts_containers_versions_set_latest(self, request: operations.TagmanagerAccountsContainersVersionsSetLatestRequest) -> operations.TagmanagerAccountsContainersVersionsSetLatestResponse:
        r"""Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:set_latest", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsSetLatestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersion])
                res.container_version = out

        return res

    
    def tagmanager_accounts_containers_versions_undelete(self, request: operations.TagmanagerAccountsContainersVersionsUndeleteRequest) -> operations.TagmanagerAccountsContainersVersionsUndeleteResponse:
        r"""Undeletes a Container Version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:undelete", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsUndeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersion])
                res.container_version = out

        return res

    
    def tagmanager_accounts_containers_workspaces_built_in_variables_create(self, request: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse:
        r"""Creates one or more GTM Built-In Variables.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/built_in_variables", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateBuiltInVariableResponse])
                res.create_built_in_variable_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_built_in_variables_list(self, request: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse:
        r"""Lists all the enabled Built-In Variables of a GTM Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/built_in_variables", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEnabledBuiltInVariablesResponse])
                res.list_enabled_built_in_variables_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_built_in_variables_revert(self, request: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest) -> operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse:
        r"""Reverts changes to a GTM Built-In Variables in a GTM Workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}/built_in_variables:revert", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RevertBuiltInVariableResponse])
                res.revert_built_in_variable_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_clients_create(self, request: operations.TagmanagerAccountsContainersWorkspacesClientsCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesClientsCreateResponse:
        r"""Creates a GTM Client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/clients", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesClientsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    def tagmanager_accounts_containers_workspaces_clients_list(self, request: operations.TagmanagerAccountsContainersWorkspacesClientsListRequest) -> operations.TagmanagerAccountsContainersWorkspacesClientsListResponse:
        r"""Lists all GTM Clients of a GTM container workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesClientsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientsResponse])
                res.list_clients_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_create(self, request: operations.TagmanagerAccountsContainersWorkspacesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesCreateResponse:
        r"""Creates a Workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/workspaces", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Workspace])
                res.workspace = out

        return res

    
    def tagmanager_accounts_containers_workspaces_create_version(self, request: operations.TagmanagerAccountsContainersWorkspacesCreateVersionRequest) -> operations.TagmanagerAccountsContainersWorkspacesCreateVersionResponse:
        r"""Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:create_version", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesCreateVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateContainerVersionResponse])
                res.create_container_version_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_folders_create(self, request: operations.TagmanagerAccountsContainersWorkspacesFoldersCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesFoldersCreateResponse:
        r"""Creates a GTM Folder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/folders", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesFoldersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Folder])
                res.folder = out

        return res

    
    def tagmanager_accounts_containers_workspaces_folders_entities(self, request: operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest) -> operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse:
        r"""List all entities in a GTM Folder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:entities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderEntities])
                res.folder_entities = out

        return res

    
    def tagmanager_accounts_containers_workspaces_folders_list(self, request: operations.TagmanagerAccountsContainersWorkspacesFoldersListRequest) -> operations.TagmanagerAccountsContainersWorkspacesFoldersListResponse:
        r"""Lists all GTM Folders of a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/folders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesFoldersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFoldersResponse])
                res.list_folders_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_folders_move_entities_to_folder(self, request: operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest) -> operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse:
        r"""Moves entities to a GTM Folder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:move_entities_to_folder", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_workspaces_get_status(self, request: operations.TagmanagerAccountsContainersWorkspacesGetStatusRequest) -> operations.TagmanagerAccountsContainersWorkspacesGetStatusResponse:
        r"""Finds conflicting and modified entities in the workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}/status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesGetStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetWorkspaceStatusResponse])
                res.get_workspace_status_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_gtag_config_create(self, request: operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse:
        r"""Creates a Google tag config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/gtag_config", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GtagConfig])
                res.gtag_config = out

        return res

    
    def tagmanager_accounts_containers_workspaces_gtag_config_list(self, request: operations.TagmanagerAccountsContainersWorkspacesGtagConfigListRequest) -> operations.TagmanagerAccountsContainersWorkspacesGtagConfigListResponse:
        r"""Lists all Google tag configs in a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/gtag_config", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesGtagConfigListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGtagConfigResponse])
                res.list_gtag_config_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_list(self, request: operations.TagmanagerAccountsContainersWorkspacesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesListResponse:
        r"""Lists all Workspaces that belong to a GTM Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/workspaces", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListWorkspacesResponse])
                res.list_workspaces_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_quick_preview(self, request: operations.TagmanagerAccountsContainersWorkspacesQuickPreviewRequest) -> operations.TagmanagerAccountsContainersWorkspacesQuickPreviewResponse:
        r"""Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:quick_preview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesQuickPreviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickPreviewResponse])
                res.quick_preview_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_resolve_conflict(self, request: operations.TagmanagerAccountsContainersWorkspacesResolveConflictRequest) -> operations.TagmanagerAccountsContainersWorkspacesResolveConflictResponse:
        r"""Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:resolve_conflict", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesResolveConflictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_workspaces_sync(self, request: operations.TagmanagerAccountsContainersWorkspacesSyncRequest) -> operations.TagmanagerAccountsContainersWorkspacesSyncResponse:
        r"""Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:sync", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesSyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncWorkspaceResponse])
                res.sync_workspace_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_tags_create(self, request: operations.TagmanagerAccountsContainersWorkspacesTagsCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesTagsCreateResponse:
        r"""Creates a GTM Tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def tagmanager_accounts_containers_workspaces_tags_list(self, request: operations.TagmanagerAccountsContainersWorkspacesTagsListRequest) -> operations.TagmanagerAccountsContainersWorkspacesTagsListResponse:
        r"""Lists all GTM Tags of a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagsResponse])
                res.list_tags_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_templates_create(self, request: operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse:
        r"""Creates a GTM Custom Template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/templates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomTemplate])
                res.custom_template = out

        return res

    
    def tagmanager_accounts_containers_workspaces_templates_list(self, request: operations.TagmanagerAccountsContainersWorkspacesTemplatesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesTemplatesListResponse:
        r"""Lists all GTM Templates of a GTM container workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/templates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTemplatesResponse])
                res.list_templates_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_triggers_create(self, request: operations.TagmanagerAccountsContainersWorkspacesTriggersCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesTriggersCreateResponse:
        r"""Creates a GTM Trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/triggers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTriggersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Trigger])
                res.trigger = out

        return res

    
    def tagmanager_accounts_containers_workspaces_triggers_list(self, request: operations.TagmanagerAccountsContainersWorkspacesTriggersListRequest) -> operations.TagmanagerAccountsContainersWorkspacesTriggersListResponse:
        r"""Lists all GTM Triggers of a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/triggers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesTriggersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTriggersResponse])
                res.list_triggers_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_variables_create(self, request: operations.TagmanagerAccountsContainersWorkspacesVariablesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesVariablesCreateResponse:
        r"""Creates a GTM Variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/variables", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesVariablesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variable])
                res.variable = out

        return res

    
    def tagmanager_accounts_containers_workspaces_variables_list(self, request: operations.TagmanagerAccountsContainersWorkspacesVariablesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesVariablesListResponse:
        r"""Lists all GTM Variables of a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/variables", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesVariablesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVariablesResponse])
                res.list_variables_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_zones_create(self, request: operations.TagmanagerAccountsContainersWorkspacesZonesCreateRequest) -> operations.TagmanagerAccountsContainersWorkspacesZonesCreateResponse:
        r"""Creates a GTM Zone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/zones", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesZonesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Zone])
                res.zone = out

        return res

    
    def tagmanager_accounts_containers_workspaces_zones_list(self, request: operations.TagmanagerAccountsContainersWorkspacesZonesListRequest) -> operations.TagmanagerAccountsContainersWorkspacesZonesListResponse:
        r"""Lists all GTM Zones of a GTM container workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/zones", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesZonesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListZonesResponse])
                res.list_zones_response = out

        return res

    
    def tagmanager_accounts_containers_workspaces_zones_revert(self, request: operations.TagmanagerAccountsContainersWorkspacesZonesRevertRequest) -> operations.TagmanagerAccountsContainersWorkspacesZonesRevertResponse:
        r"""Reverts changes to a GTM Zone in a GTM Workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}:revert", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersWorkspacesZonesRevertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RevertZoneResponse])
                res.revert_zone_response = out

        return res

    
    def tagmanager_accounts_list(self, request: operations.TagmanagerAccountsListRequest) -> operations.TagmanagerAccountsListResponse:
        r"""Lists all GTM Accounts that a user has access to.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tagmanager/v2/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccountsResponse])
                res.list_accounts_response = out

        return res

    
    def tagmanager_accounts_user_permissions_create(self, request: operations.TagmanagerAccountsUserPermissionsCreateRequest) -> operations.TagmanagerAccountsUserPermissionsCreateResponse:
        r"""Creates a user's Account & Container access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/user_permissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserPermission])
                res.user_permission = out

        return res

    
    def tagmanager_accounts_user_permissions_delete(self, request: operations.TagmanagerAccountsUserPermissionsDeleteRequest) -> operations.TagmanagerAccountsUserPermissionsDeleteResponse:
        r"""Removes a user from the account, revoking access to it and all of its containers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_user_permissions_get(self, request: operations.TagmanagerAccountsUserPermissionsGetRequest) -> operations.TagmanagerAccountsUserPermissionsGetResponse:
        r"""Gets a user's Account & Container access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserPermission])
                res.user_permission = out

        return res

    
    def tagmanager_accounts_user_permissions_list(self, request: operations.TagmanagerAccountsUserPermissionsListRequest) -> operations.TagmanagerAccountsUserPermissionsListResponse:
        r"""List all users that have access to the account along with Account and Container user access granted to each of them.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{parent}/user_permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUserPermissionsResponse])
                res.list_user_permissions_response = out

        return res

    
    def tagmanager_accounts_user_permissions_update(self, request: operations.TagmanagerAccountsUserPermissionsUpdateRequest) -> operations.TagmanagerAccountsUserPermissionsUpdateResponse:
        r"""Updates a user's Account & Container access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v2/{path}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUserPermissionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserPermission])
                res.user_permission = out

        return res

    