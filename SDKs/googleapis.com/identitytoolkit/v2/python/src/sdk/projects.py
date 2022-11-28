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

    
    def identitytoolkit_projects_identity_platform_initialize_auth(self, request: operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest) -> operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse:
        r"""Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{project}/identityPlatform:initializeAuth", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_identitytoolkit_admin_v2_initialize_identity_platform_response = out

        return res

    
    def identitytoolkit_projects_tenants_create(self, request: operations.IdentitytoolkitProjectsTenantsCreateRequest) -> operations.IdentitytoolkitProjectsTenantsCreateResponse:
        r"""Create a tenant. Requires write permission on the Agent project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/tenants", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2Tenant])
                res.google_cloud_identitytoolkit_admin_v2_tenant = out

        return res

    
    def identitytoolkit_projects_tenants_default_supported_idp_configs_create(self, request: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest) -> operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse:
        r"""Create a default supported Idp configuration for an Identity Toolkit project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/defaultSupportedIdpConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig])
                res.google_cloud_identitytoolkit_admin_v2_default_supported_idp_config = out

        return res

    
    def identitytoolkit_projects_tenants_default_supported_idp_configs_list(self, request: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest) -> operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse:
        r"""List all default supported Idp configurations for an Identity Toolkit project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/defaultSupportedIdpConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse])
                res.google_cloud_identitytoolkit_admin_v2_list_default_supported_idp_configs_response = out

        return res

    
    def identitytoolkit_projects_tenants_get_iam_policy(self, request: operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest) -> operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{resource}:getIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def identitytoolkit_projects_tenants_inbound_saml_configs_create(self, request: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest) -> operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse:
        r"""Create an inbound SAML configuration for an Identity Toolkit project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/inboundSamlConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig])
                res.google_cloud_identitytoolkit_admin_v2_inbound_saml_config = out

        return res

    
    def identitytoolkit_projects_tenants_inbound_saml_configs_list(self, request: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest) -> operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse:
        r"""List all inbound SAML configurations for an Identity Toolkit project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/inboundSamlConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse])
                res.google_cloud_identitytoolkit_admin_v2_list_inbound_saml_configs_response = out

        return res

    
    def identitytoolkit_projects_tenants_list(self, request: operations.IdentitytoolkitProjectsTenantsListRequest) -> operations.IdentitytoolkitProjectsTenantsListResponse:
        r"""List tenants under the given agent project. Requires read permission on the Agent project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/tenants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse])
                res.google_cloud_identitytoolkit_admin_v2_list_tenants_response = out

        return res

    
    def identitytoolkit_projects_tenants_oauth_idp_configs_create(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse:
        r"""Create an Oidc Idp configuration for an Identity Toolkit project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/oauthIdpConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig])
                res.google_cloud_identitytoolkit_admin_v2_o_auth_idp_config = out

        return res

    
    def identitytoolkit_projects_tenants_oauth_idp_configs_delete(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse:
        r"""Delete an Oidc Idp configuration for an Identity Toolkit project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def identitytoolkit_projects_tenants_oauth_idp_configs_get(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse:
        r"""Retrieve an Oidc Idp configuration for an Identity Toolkit project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig])
                res.google_cloud_identitytoolkit_admin_v2_o_auth_idp_config = out

        return res

    
    def identitytoolkit_projects_tenants_oauth_idp_configs_list(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse:
        r"""List all Oidc Idp configurations for an Identity Toolkit project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/oauthIdpConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse])
                res.google_cloud_identitytoolkit_admin_v2_list_o_auth_idp_configs_response = out

        return res

    
    def identitytoolkit_projects_tenants_oauth_idp_configs_patch(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse:
        r"""Update an Oidc Idp configuration for an Identity Toolkit project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig])
                res.google_cloud_identitytoolkit_admin_v2_o_auth_idp_config = out

        return res

    
    def identitytoolkit_projects_tenants_set_iam_policy(self, request: operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest) -> operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse:
        r"""Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def identitytoolkit_projects_tenants_test_iam_permissions(self, request: operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest) -> operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse:
        r"""Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1TestIamPermissionsResponse])
                res.google_iam_v1_test_iam_permissions_response = out

        return res

    