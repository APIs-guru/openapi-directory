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

    
    def tagmanager_accounts_containers_create(self, request: operations.TagmanagerAccountsContainersCreateRequest) -> operations.TagmanagerAccountsContainersCreateResponse:
        r"""Creates a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers", request.path_params)
        
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

    
    def tagmanager_accounts_containers_delete(self, request: operations.TagmanagerAccountsContainersDeleteRequest) -> operations.TagmanagerAccountsContainersDeleteResponse:
        r"""Deletes a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_environments_create(self, request: operations.TagmanagerAccountsContainersEnvironmentsCreateRequest) -> operations.TagmanagerAccountsContainersEnvironmentsCreateResponse:
        r"""Creates a GTM Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments", request.path_params)
        
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

    
    def tagmanager_accounts_containers_environments_delete(self, request: operations.TagmanagerAccountsContainersEnvironmentsDeleteRequest) -> operations.TagmanagerAccountsContainersEnvironmentsDeleteResponse:
        r"""Deletes a GTM Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersEnvironmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_environments_get(self, request: operations.TagmanagerAccountsContainersEnvironmentsGetRequest) -> operations.TagmanagerAccountsContainersEnvironmentsGetResponse:
        r"""Gets a GTM Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersEnvironmentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Environment])
                res.environment = out

        return res

    
    def tagmanager_accounts_containers_environments_list(self, request: operations.TagmanagerAccountsContainersEnvironmentsListRequest) -> operations.TagmanagerAccountsContainersEnvironmentsListResponse:
        r"""Lists all GTM Environments of a GTM Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments", request.path_params)
        
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

    
    def tagmanager_accounts_containers_environments_update(self, request: operations.TagmanagerAccountsContainersEnvironmentsUpdateRequest) -> operations.TagmanagerAccountsContainersEnvironmentsUpdateResponse:
        r"""Updates a GTM Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersEnvironmentsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Environment])
                res.environment = out

        return res

    
    def tagmanager_accounts_containers_folders_create(self, request: operations.TagmanagerAccountsContainersFoldersCreateRequest) -> operations.TagmanagerAccountsContainersFoldersCreateResponse:
        r"""Creates a GTM Folder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersFoldersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Folder])
                res.folder = out

        return res

    
    def tagmanager_accounts_containers_folders_delete(self, request: operations.TagmanagerAccountsContainersFoldersDeleteRequest) -> operations.TagmanagerAccountsContainersFoldersDeleteResponse:
        r"""Deletes a GTM Folder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersFoldersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_folders_entities_list(self, request: operations.TagmanagerAccountsContainersFoldersEntitiesListRequest) -> operations.TagmanagerAccountsContainersFoldersEntitiesListResponse:
        r"""List all entities in a GTM Folder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersFoldersEntitiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderEntities])
                res.folder_entities = out

        return res

    
    def tagmanager_accounts_containers_folders_get(self, request: operations.TagmanagerAccountsContainersFoldersGetRequest) -> operations.TagmanagerAccountsContainersFoldersGetResponse:
        r"""Gets a GTM Folder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersFoldersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Folder])
                res.folder = out

        return res

    
    def tagmanager_accounts_containers_folders_list(self, request: operations.TagmanagerAccountsContainersFoldersListRequest) -> operations.TagmanagerAccountsContainersFoldersListResponse:
        r"""Lists all GTM Folders of a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersFoldersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFoldersResponse])
                res.list_folders_response = out

        return res

    
    def tagmanager_accounts_containers_folders_update(self, request: operations.TagmanagerAccountsContainersFoldersUpdateRequest) -> operations.TagmanagerAccountsContainersFoldersUpdateResponse:
        r"""Updates a GTM Folder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersFoldersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Folder])
                res.folder = out

        return res

    
    def tagmanager_accounts_containers_get(self, request: operations.TagmanagerAccountsContainersGetRequest) -> operations.TagmanagerAccountsContainersGetResponse:
        r"""Gets a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Container])
                res.container = out

        return res

    
    def tagmanager_accounts_containers_list(self, request: operations.TagmanagerAccountsContainersListRequest) -> operations.TagmanagerAccountsContainersListResponse:
        r"""Lists all Containers that belongs to a GTM Account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers", request.path_params)
        
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

    
    def tagmanager_accounts_containers_move_folders_update(self, request: operations.TagmanagerAccountsContainersMoveFoldersUpdateRequest) -> operations.TagmanagerAccountsContainersMoveFoldersUpdateResponse:
        r"""Moves entities to a GTM Folder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/move_folders/{folderId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersMoveFoldersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_reauthorize_environments_update(self, request: operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest) -> operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse:
        r"""Re-generates the authorization code for a GTM Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Environment])
                res.environment = out

        return res

    
    def tagmanager_accounts_containers_tags_create(self, request: operations.TagmanagerAccountsContainersTagsCreateRequest) -> operations.TagmanagerAccountsContainersTagsCreateResponse:
        r"""Creates a GTM Tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def tagmanager_accounts_containers_tags_delete(self, request: operations.TagmanagerAccountsContainersTagsDeleteRequest) -> operations.TagmanagerAccountsContainersTagsDeleteResponse:
        r"""Deletes a GTM Tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTagsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_tags_get(self, request: operations.TagmanagerAccountsContainersTagsGetRequest) -> operations.TagmanagerAccountsContainersTagsGetResponse:
        r"""Gets a GTM Tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTagsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def tagmanager_accounts_containers_tags_list(self, request: operations.TagmanagerAccountsContainersTagsListRequest) -> operations.TagmanagerAccountsContainersTagsListResponse:
        r"""Lists all GTM Tags of a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagsResponse])
                res.list_tags_response = out

        return res

    
    def tagmanager_accounts_containers_tags_update(self, request: operations.TagmanagerAccountsContainersTagsUpdateRequest) -> operations.TagmanagerAccountsContainersTagsUpdateResponse:
        r"""Updates a GTM Tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTagsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def tagmanager_accounts_containers_triggers_create(self, request: operations.TagmanagerAccountsContainersTriggersCreateRequest) -> operations.TagmanagerAccountsContainersTriggersCreateResponse:
        r"""Creates a GTM Trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTriggersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Trigger])
                res.trigger = out

        return res

    
    def tagmanager_accounts_containers_triggers_delete(self, request: operations.TagmanagerAccountsContainersTriggersDeleteRequest) -> operations.TagmanagerAccountsContainersTriggersDeleteResponse:
        r"""Deletes a GTM Trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTriggersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_triggers_get(self, request: operations.TagmanagerAccountsContainersTriggersGetRequest) -> operations.TagmanagerAccountsContainersTriggersGetResponse:
        r"""Gets a GTM Trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTriggersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Trigger])
                res.trigger = out

        return res

    
    def tagmanager_accounts_containers_triggers_list(self, request: operations.TagmanagerAccountsContainersTriggersListRequest) -> operations.TagmanagerAccountsContainersTriggersListResponse:
        r"""Lists all GTM Triggers of a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTriggersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTriggersResponse])
                res.list_triggers_response = out

        return res

    
    def tagmanager_accounts_containers_triggers_update(self, request: operations.TagmanagerAccountsContainersTriggersUpdateRequest) -> operations.TagmanagerAccountsContainersTriggersUpdateResponse:
        r"""Updates a GTM Trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersTriggersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Trigger])
                res.trigger = out

        return res

    
    def tagmanager_accounts_containers_update(self, request: operations.TagmanagerAccountsContainersUpdateRequest) -> operations.TagmanagerAccountsContainersUpdateResponse:
        r"""Updates a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Container])
                res.container = out

        return res

    
    def tagmanager_accounts_containers_variables_create(self, request: operations.TagmanagerAccountsContainersVariablesCreateRequest) -> operations.TagmanagerAccountsContainersVariablesCreateResponse:
        r"""Creates a GTM Variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVariablesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variable])
                res.variable = out

        return res

    
    def tagmanager_accounts_containers_variables_delete(self, request: operations.TagmanagerAccountsContainersVariablesDeleteRequest) -> operations.TagmanagerAccountsContainersVariablesDeleteResponse:
        r"""Deletes a GTM Variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVariablesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_variables_get(self, request: operations.TagmanagerAccountsContainersVariablesGetRequest) -> operations.TagmanagerAccountsContainersVariablesGetResponse:
        r"""Gets a GTM Variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVariablesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variable])
                res.variable = out

        return res

    
    def tagmanager_accounts_containers_variables_list(self, request: operations.TagmanagerAccountsContainersVariablesListRequest) -> operations.TagmanagerAccountsContainersVariablesListResponse:
        r"""Lists all GTM Variables of a Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVariablesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVariablesResponse])
                res.list_variables_response = out

        return res

    
    def tagmanager_accounts_containers_variables_update(self, request: operations.TagmanagerAccountsContainersVariablesUpdateRequest) -> operations.TagmanagerAccountsContainersVariablesUpdateResponse:
        r"""Updates a GTM Variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVariablesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variable])
                res.variable = out

        return res

    
    def tagmanager_accounts_containers_versions_create(self, request: operations.TagmanagerAccountsContainersVersionsCreateRequest) -> operations.TagmanagerAccountsContainersVersionsCreateResponse:
        r"""Creates a Container Version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateContainerVersionResponse])
                res.create_container_version_response = out

        return res

    
    def tagmanager_accounts_containers_versions_delete(self, request: operations.TagmanagerAccountsContainersVersionsDeleteRequest) -> operations.TagmanagerAccountsContainersVersionsDeleteResponse:
        r"""Deletes a Container Version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_containers_versions_get(self, request: operations.TagmanagerAccountsContainersVersionsGetRequest) -> operations.TagmanagerAccountsContainersVersionsGetResponse:
        r"""Gets a Container Version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersion])
                res.container_version = out

        return res

    
    def tagmanager_accounts_containers_versions_list(self, request: operations.TagmanagerAccountsContainersVersionsListRequest) -> operations.TagmanagerAccountsContainersVersionsListResponse:
        r"""Lists all Container Versions of a GTM Container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListContainerVersionsResponse])
                res.list_container_versions_response = out

        return res

    
    def tagmanager_accounts_containers_versions_publish(self, request: operations.TagmanagerAccountsContainersVersionsPublishRequest) -> operations.TagmanagerAccountsContainersVersionsPublishResponse:
        r"""Publishes a Container Version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish", request.path_params)
        
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

    
    def tagmanager_accounts_containers_versions_restore(self, request: operations.TagmanagerAccountsContainersVersionsRestoreRequest) -> operations.TagmanagerAccountsContainersVersionsRestoreResponse:
        r"""Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersion])
                res.container_version = out

        return res

    
    def tagmanager_accounts_containers_versions_undelete(self, request: operations.TagmanagerAccountsContainersVersionsUndeleteRequest) -> operations.TagmanagerAccountsContainersVersionsUndeleteResponse:
        r"""Undeletes a Container Version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete", request.path_params)
        
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

    
    def tagmanager_accounts_containers_versions_update(self, request: operations.TagmanagerAccountsContainersVersionsUpdateRequest) -> operations.TagmanagerAccountsContainersVersionsUpdateResponse:
        r"""Updates a Container Version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsContainersVersionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerVersion])
                res.container_version = out

        return res

    
    def tagmanager_accounts_get(self, request: operations.TagmanagerAccountsGetRequest) -> operations.TagmanagerAccountsGetResponse:
        r"""Gets a GTM Account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def tagmanager_accounts_list(self, request: operations.TagmanagerAccountsListRequest) -> operations.TagmanagerAccountsListResponse:
        r"""Lists all GTM Accounts that a user has access to.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tagmanager/v1/accounts"
        
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

    
    def tagmanager_accounts_permissions_create(self, request: operations.TagmanagerAccountsPermissionsCreateRequest) -> operations.TagmanagerAccountsPermissionsCreateResponse:
        r"""Creates a user's Account & Container Permissions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/permissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsPermissionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserAccess])
                res.user_access = out

        return res

    
    def tagmanager_accounts_permissions_delete(self, request: operations.TagmanagerAccountsPermissionsDeleteRequest) -> operations.TagmanagerAccountsPermissionsDeleteResponse:
        r"""Removes a user from the account, revoking access to it and all of its containers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsPermissionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tagmanager_accounts_permissions_get(self, request: operations.TagmanagerAccountsPermissionsGetRequest) -> operations.TagmanagerAccountsPermissionsGetResponse:
        r"""Gets a user's Account & Container Permissions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsPermissionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserAccess])
                res.user_access = out

        return res

    
    def tagmanager_accounts_permissions_list(self, request: operations.TagmanagerAccountsPermissionsListRequest) -> operations.TagmanagerAccountsPermissionsListResponse:
        r"""List all users that have access to the account along with Account and Container Permissions granted to each of them.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsPermissionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccountUsersResponse])
                res.list_account_users_response = out

        return res

    
    def tagmanager_accounts_permissions_update(self, request: operations.TagmanagerAccountsPermissionsUpdateRequest) -> operations.TagmanagerAccountsPermissionsUpdateResponse:
        r"""Updates a user's Account & Container Permissions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsPermissionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserAccess])
                res.user_access = out

        return res

    
    def tagmanager_accounts_update(self, request: operations.TagmanagerAccountsUpdateRequest) -> operations.TagmanagerAccountsUpdateResponse:
        r"""Updates a GTM Account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tagmanager/v1/accounts/{accountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagmanagerAccountsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    