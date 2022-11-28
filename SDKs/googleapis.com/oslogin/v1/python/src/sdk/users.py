import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def oslogin_users_get_login_profile(self, request: operations.OsloginUsersGetLoginProfileRequest) -> operations.OsloginUsersGetLoginProfileResponse:
        r"""Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/loginProfile", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsloginUsersGetLoginProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoginProfile])
                res.login_profile = out

        return res

    
    def oslogin_users_import_ssh_public_key(self, request: operations.OsloginUsersImportSSHPublicKeyRequest) -> operations.OsloginUsersImportSSHPublicKeyResponse:
        r"""Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:importSshPublicKey", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsloginUsersImportSSHPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportSSHPublicKeyResponse])
                res.import_ssh_public_key_response = out

        return res

    
    def oslogin_users_ssh_public_keys_create(self, request: operations.OsloginUsersSSHPublicKeysCreateRequest) -> operations.OsloginUsersSSHPublicKeysCreateResponse:
        r"""Create an SSH public key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/sshPublicKeys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsloginUsersSSHPublicKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHPublicKey])
                res.ssh_public_key = out

        return res

    
    def oslogin_users_ssh_public_keys_delete(self, request: operations.OsloginUsersSSHPublicKeysDeleteRequest) -> operations.OsloginUsersSSHPublicKeysDeleteResponse:
        r"""Deletes an SSH public key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsloginUsersSSHPublicKeysDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def oslogin_users_ssh_public_keys_get(self, request: operations.OsloginUsersSSHPublicKeysGetRequest) -> operations.OsloginUsersSSHPublicKeysGetResponse:
        r"""Retrieves an SSH public key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsloginUsersSSHPublicKeysGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHPublicKey])
                res.ssh_public_key = out

        return res

    
    def oslogin_users_ssh_public_keys_patch(self, request: operations.OsloginUsersSSHPublicKeysPatchRequest) -> operations.OsloginUsersSSHPublicKeysPatchResponse:
        r"""Updates an SSH public key and returns the profile information. This method supports patch semantics.
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

        res = operations.OsloginUsersSSHPublicKeysPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHPublicKey])
                res.ssh_public_key = out

        return res

    