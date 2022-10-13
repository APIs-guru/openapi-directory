import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://identitytoolkit.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def identitytoolkit_accounts_mfa_enrollment_finalize(self, request: operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest) -> operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/accounts/mfaEnrollment:finalize"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse])
                res.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response = out

        return res

    
    
    def identitytoolkit_accounts_mfa_enrollment_start(self, request: operations.IdentitytoolkitAccountsMfaEnrollmentStartRequest) -> operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/accounts/mfaEnrollment:start"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse])
                res.google_cloud_identitytoolkit_v2_start_mfa_enrollment_response = out

        return res

    
    
    def identitytoolkit_accounts_mfa_enrollment_withdraw(self, request: operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest) -> operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/accounts/mfaEnrollment:withdraw"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse])
                res.google_cloud_identitytoolkit_v2_withdraw_mfa_response = out

        return res

    
    
    def identitytoolkit_accounts_mfa_sign_in_finalize(self, request: operations.IdentitytoolkitAccountsMfaSignInFinalizeRequest) -> operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/accounts/mfaSignIn:finalize"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse])
                res.google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_response = out

        return res

    
    
    def identitytoolkit_accounts_mfa_sign_in_start(self, request: operations.IdentitytoolkitAccountsMfaSignInStartRequest) -> operations.IdentitytoolkitAccountsMfaSignInStartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/accounts/mfaSignIn:start"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaSignInStartResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse])
                res.google_cloud_identitytoolkit_v2_start_mfa_sign_in_response = out

        return res

    
    
    def identitytoolkit_default_supported_idps_list(self, request: operations.IdentitytoolkitDefaultSupportedIdpsListRequest) -> operations.IdentitytoolkitDefaultSupportedIdpsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/defaultSupportedIdps"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitDefaultSupportedIdpsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse])
                res.google_cloud_identitytoolkit_admin_v2_list_default_supported_idps_response = out

        return res

    
    
    def identitytoolkit_projects_identity_platform_initialize_auth(self, request: operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest) -> operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{project}/identityPlatform:initializeAuth", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_identitytoolkit_admin_v2_initialize_identity_platform_response = out

        return res

    
    
    def identitytoolkit_projects_tenants_create(self, request: operations.IdentitytoolkitProjectsTenantsCreateRequest) -> operations.IdentitytoolkitProjectsTenantsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/tenants", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2Tenant])
                res.google_cloud_identitytoolkit_admin_v2_tenant = out

        return res

    
    
    def identitytoolkit_projects_tenants_default_supported_idp_configs_create(self, request: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest) -> operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/defaultSupportedIdpConfigs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig])
                res.google_cloud_identitytoolkit_admin_v2_default_supported_idp_config = out

        return res

    
    
    def identitytoolkit_projects_tenants_default_supported_idp_configs_list(self, request: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest) -> operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/defaultSupportedIdpConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse])
                res.google_cloud_identitytoolkit_admin_v2_list_default_supported_idp_configs_response = out

        return res

    
    
    def identitytoolkit_projects_tenants_get_iam_policy(self, request: operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest) -> operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{resource}:getIamPolicy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    
    def identitytoolkit_projects_tenants_inbound_saml_configs_create(self, request: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest) -> operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/inboundSamlConfigs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig])
                res.google_cloud_identitytoolkit_admin_v2_inbound_saml_config = out

        return res

    
    
    def identitytoolkit_projects_tenants_inbound_saml_configs_list(self, request: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest) -> operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/inboundSamlConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse])
                res.google_cloud_identitytoolkit_admin_v2_list_inbound_saml_configs_response = out

        return res

    
    
    def identitytoolkit_projects_tenants_list(self, request: operations.IdentitytoolkitProjectsTenantsListRequest) -> operations.IdentitytoolkitProjectsTenantsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/tenants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse])
                res.google_cloud_identitytoolkit_admin_v2_list_tenants_response = out

        return res

    
    
    def identitytoolkit_projects_tenants_oauth_idp_configs_create(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/oauthIdpConfigs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig])
                res.google_cloud_identitytoolkit_admin_v2_o_auth_idp_config = out

        return res

    
    
    def identitytoolkit_projects_tenants_oauth_idp_configs_delete(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def identitytoolkit_projects_tenants_oauth_idp_configs_get(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig])
                res.google_cloud_identitytoolkit_admin_v2_o_auth_idp_config = out

        return res

    
    
    def identitytoolkit_projects_tenants_oauth_idp_configs_list(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/oauthIdpConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse])
                res.google_cloud_identitytoolkit_admin_v2_list_o_auth_idp_configs_response = out

        return res

    
    
    def identitytoolkit_projects_tenants_oauth_idp_configs_patch(self, request: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest) -> operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig])
                res.google_cloud_identitytoolkit_admin_v2_o_auth_idp_config = out

        return res

    
    
    def identitytoolkit_projects_tenants_set_iam_policy(self, request: operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest) -> operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{resource}:setIamPolicy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    
    def identitytoolkit_projects_tenants_test_iam_permissions(self, request: operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest) -> operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{resource}:testIamPermissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1TestIamPermissionsResponse])
                res.google_iam_v1_test_iam_permissions_response = out

        return res

    