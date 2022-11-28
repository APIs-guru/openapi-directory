import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TypeProviders:
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

    
    def deploymentmanager_type_providers_delete(self, request: operations.DeploymentmanagerTypeProvidersDeleteRequest) -> operations.DeploymentmanagerTypeProvidersDeleteResponse:
        r"""Deletes a type provider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerTypeProvidersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_type_providers_get(self, request: operations.DeploymentmanagerTypeProvidersGetRequest) -> operations.DeploymentmanagerTypeProvidersGetResponse:
        r"""Gets information about a specific type provider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerTypeProvidersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TypeProvider])
                res.type_provider = out

        return res

    
    def deploymentmanager_type_providers_get_type(self, request: operations.DeploymentmanagerTypeProvidersGetTypeRequest) -> operations.DeploymentmanagerTypeProvidersGetTypeResponse:
        r"""Gets a type info for a type provided by a TypeProvider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}/types/{type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerTypeProvidersGetTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TypeInfo])
                res.type_info = out

        return res

    
    def deploymentmanager_type_providers_insert(self, request: operations.DeploymentmanagerTypeProvidersInsertRequest) -> operations.DeploymentmanagerTypeProvidersInsertResponse:
        r"""Creates a type provider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/typeProviders", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerTypeProvidersInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_type_providers_list(self, request: operations.DeploymentmanagerTypeProvidersListRequest) -> operations.DeploymentmanagerTypeProvidersListResponse:
        r"""Lists all resource type providers for Deployment Manager.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/typeProviders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerTypeProvidersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TypeProvidersListResponse])
                res.type_providers_list_response = out

        return res

    
    def deploymentmanager_type_providers_list_types(self, request: operations.DeploymentmanagerTypeProvidersListTypesRequest) -> operations.DeploymentmanagerTypeProvidersListTypesResponse:
        r"""Lists all the type info for a TypeProvider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}/types", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerTypeProvidersListTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TypeProvidersListTypesResponse])
                res.type_providers_list_types_response = out

        return res

    
    def deploymentmanager_type_providers_patch(self, request: operations.DeploymentmanagerTypeProvidersPatchRequest) -> operations.DeploymentmanagerTypeProvidersPatchResponse:
        r"""Patches a type provider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerTypeProvidersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_type_providers_update(self, request: operations.DeploymentmanagerTypeProvidersUpdateRequest) -> operations.DeploymentmanagerTypeProvidersUpdateResponse:
        r"""Updates a type provider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerTypeProvidersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    