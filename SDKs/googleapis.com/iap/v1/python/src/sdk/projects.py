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

    
    def iap_projects_brands_create(self, request: operations.IapProjectsBrandsCreateRequest) -> operations.IapProjectsBrandsCreateResponse:
        r"""Constructs a new OAuth brand for the project if one does not exist. The created brand is \"internal only\", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The \"internal only\" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/brands", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsBrandsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Brand])
                res.brand = out

        return res

    
    def iap_projects_brands_identity_aware_proxy_clients_create(self, request: operations.IapProjectsBrandsIdentityAwareProxyClientsCreateRequest) -> operations.IapProjectsBrandsIdentityAwareProxyClientsCreateResponse:
        r"""Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/identityAwareProxyClients", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsBrandsIdentityAwareProxyClientsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentityAwareProxyClient])
                res.identity_aware_proxy_client = out

        return res

    
    def iap_projects_brands_identity_aware_proxy_clients_list(self, request: operations.IapProjectsBrandsIdentityAwareProxyClientsListRequest) -> operations.IapProjectsBrandsIdentityAwareProxyClientsListResponse:
        r"""Lists the existing clients for the brand.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/identityAwareProxyClients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsBrandsIdentityAwareProxyClientsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListIdentityAwareProxyClientsResponse])
                res.list_identity_aware_proxy_clients_response = out

        return res

    
    def iap_projects_brands_identity_aware_proxy_clients_reset_secret(self, request: operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest) -> operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse:
        r"""Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:resetSecret", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentityAwareProxyClient])
                res.identity_aware_proxy_client = out

        return res

    
    def iap_projects_brands_list(self, request: operations.IapProjectsBrandsListRequest) -> operations.IapProjectsBrandsListResponse:
        r"""Lists the existing brands for the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/brands", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsBrandsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBrandsResponse])
                res.list_brands_response = out

        return res

    
    def iap_projects_iap_tunnel_locations_dest_groups_create(self, request: operations.IapProjectsIapTunnelLocationsDestGroupsCreateRequest) -> operations.IapProjectsIapTunnelLocationsDestGroupsCreateResponse:
        r"""Creates a new TunnelDestGroup.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/destGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsIapTunnelLocationsDestGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TunnelDestGroup])
                res.tunnel_dest_group = out

        return res

    
    def iap_projects_iap_tunnel_locations_dest_groups_delete(self, request: operations.IapProjectsIapTunnelLocationsDestGroupsDeleteRequest) -> operations.IapProjectsIapTunnelLocationsDestGroupsDeleteResponse:
        r"""Deletes a TunnelDestGroup.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsIapTunnelLocationsDestGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def iap_projects_iap_tunnel_locations_dest_groups_get(self, request: operations.IapProjectsIapTunnelLocationsDestGroupsGetRequest) -> operations.IapProjectsIapTunnelLocationsDestGroupsGetResponse:
        r"""Retrieves an existing TunnelDestGroup.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsIapTunnelLocationsDestGroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TunnelDestGroup])
                res.tunnel_dest_group = out

        return res

    
    def iap_projects_iap_tunnel_locations_dest_groups_list(self, request: operations.IapProjectsIapTunnelLocationsDestGroupsListRequest) -> operations.IapProjectsIapTunnelLocationsDestGroupsListResponse:
        r"""Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/destGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsIapTunnelLocationsDestGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTunnelDestGroupsResponse])
                res.list_tunnel_dest_groups_response = out

        return res

    
    def iap_projects_iap_tunnel_locations_dest_groups_patch(self, request: operations.IapProjectsIapTunnelLocationsDestGroupsPatchRequest) -> operations.IapProjectsIapTunnelLocationsDestGroupsPatchResponse:
        r"""Updates a TunnelDestGroup.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IapProjectsIapTunnelLocationsDestGroupsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TunnelDestGroup])
                res.tunnel_dest_group = out

        return res

    