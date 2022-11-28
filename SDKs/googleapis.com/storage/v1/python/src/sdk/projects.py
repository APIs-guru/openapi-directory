import requests
from typing import Optional
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

    
    def storage_projects_hmac_keys_create(self, request: operations.StorageProjectsHmacKeysCreateRequest) -> operations.StorageProjectsHmacKeysCreateResponse:
        r"""Creates a new HMAC key for the specified service account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/hmacKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageProjectsHmacKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HmacKey])
                res.hmac_key = out

        return res

    
    def storage_projects_hmac_keys_delete(self, request: operations.StorageProjectsHmacKeysDeleteRequest) -> operations.StorageProjectsHmacKeysDeleteResponse:
        r"""Deletes an HMAC key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/hmacKeys/{accessId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageProjectsHmacKeysDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def storage_projects_hmac_keys_get(self, request: operations.StorageProjectsHmacKeysGetRequest) -> operations.StorageProjectsHmacKeysGetResponse:
        r"""Retrieves an HMAC key's metadata
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/hmacKeys/{accessId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageProjectsHmacKeysGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HmacKeyMetadata])
                res.hmac_key_metadata = out

        return res

    
    def storage_projects_hmac_keys_list(self, request: operations.StorageProjectsHmacKeysListRequest) -> operations.StorageProjectsHmacKeysListResponse:
        r"""Retrieves a list of HMAC keys matching the criteria.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/hmacKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageProjectsHmacKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HmacKeysMetadata])
                res.hmac_keys_metadata = out

        return res

    
    def storage_projects_hmac_keys_update(self, request: operations.StorageProjectsHmacKeysUpdateRequest) -> operations.StorageProjectsHmacKeysUpdateResponse:
        r"""Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/hmacKeys/{accessId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageProjectsHmacKeysUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HmacKeyMetadata])
                res.hmac_key_metadata = out

        return res

    
    def storage_projects_service_account_get(self, request: operations.StorageProjectsServiceAccountGetRequest) -> operations.StorageProjectsServiceAccountGetResponse:
        r"""Get the email address of this project's Google Cloud Storage service account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/serviceAccount", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageProjectsServiceAccountGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAccount])
                res.service_account = out

        return res

    