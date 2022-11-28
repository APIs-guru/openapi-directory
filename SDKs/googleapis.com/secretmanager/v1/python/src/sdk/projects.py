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

    
    def secretmanager_projects_locations_list(self, request: operations.SecretmanagerProjectsLocationsListRequest) -> operations.SecretmanagerProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def secretmanager_projects_secrets_add_version(self, request: operations.SecretmanagerProjectsSecretsAddVersionRequest) -> operations.SecretmanagerProjectsSecretsAddVersionResponse:
        r"""Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:addVersion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsAddVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretVersion])
                res.secret_version = out

        return res

    
    def secretmanager_projects_secrets_create(self, request: operations.SecretmanagerProjectsSecretsCreateRequest) -> operations.SecretmanagerProjectsSecretsCreateResponse:
        r"""Creates a new Secret containing no SecretVersions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/secrets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    def secretmanager_projects_secrets_delete(self, request: operations.SecretmanagerProjectsSecretsDeleteRequest) -> operations.SecretmanagerProjectsSecretsDeleteResponse:
        r"""Deletes a Secret.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def secretmanager_projects_secrets_get_iam_policy(self, request: operations.SecretmanagerProjectsSecretsGetIamPolicyRequest) -> operations.SecretmanagerProjectsSecretsGetIamPolicyResponse:
        r"""Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def secretmanager_projects_secrets_list(self, request: operations.SecretmanagerProjectsSecretsListRequest) -> operations.SecretmanagerProjectsSecretsListResponse:
        r"""Lists Secrets.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/secrets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSecretsResponse])
                res.list_secrets_response = out

        return res

    
    def secretmanager_projects_secrets_patch(self, request: operations.SecretmanagerProjectsSecretsPatchRequest) -> operations.SecretmanagerProjectsSecretsPatchResponse:
        r"""Updates metadata of an existing Secret.
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

        res = operations.SecretmanagerProjectsSecretsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    def secretmanager_projects_secrets_set_iam_policy(self, request: operations.SecretmanagerProjectsSecretsSetIamPolicyRequest) -> operations.SecretmanagerProjectsSecretsSetIamPolicyResponse:
        r"""Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def secretmanager_projects_secrets_test_iam_permissions(self, request: operations.SecretmanagerProjectsSecretsTestIamPermissionsRequest) -> operations.SecretmanagerProjectsSecretsTestIamPermissionsResponse:
        r"""Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def secretmanager_projects_secrets_versions_access(self, request: operations.SecretmanagerProjectsSecretsVersionsAccessRequest) -> operations.SecretmanagerProjectsSecretsVersionsAccessResponse:
        r"""Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:access", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsVersionsAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccessSecretVersionResponse])
                res.access_secret_version_response = out

        return res

    
    def secretmanager_projects_secrets_versions_destroy(self, request: operations.SecretmanagerProjectsSecretsVersionsDestroyRequest) -> operations.SecretmanagerProjectsSecretsVersionsDestroyResponse:
        r"""Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:destroy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsVersionsDestroyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretVersion])
                res.secret_version = out

        return res

    
    def secretmanager_projects_secrets_versions_disable(self, request: operations.SecretmanagerProjectsSecretsVersionsDisableRequest) -> operations.SecretmanagerProjectsSecretsVersionsDisableResponse:
        r"""Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:disable", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsVersionsDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretVersion])
                res.secret_version = out

        return res

    
    def secretmanager_projects_secrets_versions_enable(self, request: operations.SecretmanagerProjectsSecretsVersionsEnableRequest) -> operations.SecretmanagerProjectsSecretsVersionsEnableResponse:
        r"""Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:enable", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsVersionsEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretVersion])
                res.secret_version = out

        return res

    
    def secretmanager_projects_secrets_versions_get(self, request: operations.SecretmanagerProjectsSecretsVersionsGetRequest) -> operations.SecretmanagerProjectsSecretsVersionsGetResponse:
        r"""Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsVersionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretVersion])
                res.secret_version = out

        return res

    
    def secretmanager_projects_secrets_versions_list(self, request: operations.SecretmanagerProjectsSecretsVersionsListRequest) -> operations.SecretmanagerProjectsSecretsVersionsListResponse:
        r"""Lists SecretVersions. This call does not return secret data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretmanagerProjectsSecretsVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSecretVersionsResponse])
                res.list_secret_versions_response = out

        return res

    