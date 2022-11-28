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

    
    def cloudkms_projects_locations_ekm_connections_create(self, request: operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest) -> operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse:
        r"""Creates a new EkmConnection in a given Project and Location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/ekmConnections", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EkmConnection])
                res.ekm_connection = out

        return res

    
    def cloudkms_projects_locations_ekm_connections_list(self, request: operations.CloudkmsProjectsLocationsEkmConnectionsListRequest) -> operations.CloudkmsProjectsLocationsEkmConnectionsListResponse:
        r"""Lists EkmConnections.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/ekmConnections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsEkmConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEkmConnectionsResponse])
                res.list_ekm_connections_response = out

        return res

    
    def cloudkms_projects_locations_generate_random_bytes(self, request: operations.CloudkmsProjectsLocationsGenerateRandomBytesRequest) -> operations.CloudkmsProjectsLocationsGenerateRandomBytesResponse:
        r"""Generate random bytes using the Cloud KMS randomness source in the provided location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{location}:generateRandomBytes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsGenerateRandomBytesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenerateRandomBytesResponse])
                res.generate_random_bytes_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_create(self, request: operations.CloudkmsProjectsLocationsKeyRingsCreateRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCreateResponse:
        r"""Create a new KeyRing in a given Project and Location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/keyRings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyRing])
                res.key_ring = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_create(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse:
        r"""Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/cryptoKeys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CryptoKey])
                res.crypto_key = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_asymmetric_decrypt(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse:
        r"""Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:asymmetricDecrypt", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsymmetricDecryptResponse])
                res.asymmetric_decrypt_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_asymmetric_sign(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse:
        r"""Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:asymmetricSign", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsymmetricSignResponse])
                res.asymmetric_sign_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_create(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse:
        r"""Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/cryptoKeyVersions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CryptoKeyVersion])
                res.crypto_key_version = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_destroy(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse:
        r"""Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
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

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CryptoKeyVersion])
                res.crypto_key_version = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_get_public_key(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyResponse:
        r"""Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/publicKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicKey])
                res.public_key = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_import(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse:
        r"""Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/cryptoKeyVersions:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CryptoKeyVersion])
                res.crypto_key_version = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_list(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse:
        r"""Lists CryptoKeyVersions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/cryptoKeyVersions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCryptoKeyVersionsResponse])
                res.list_crypto_key_versions_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_mac_sign(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignResponse:
        r"""Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:macSign", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MacSignResponse])
                res.mac_sign_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_mac_verify(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse:
        r"""Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:macVerify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MacVerifyResponse])
                res.mac_verify_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_patch(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse:
        r"""Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
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

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CryptoKeyVersion])
                res.crypto_key_version = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_restore(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse:
        r"""Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:restore", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CryptoKeyVersion])
                res.crypto_key_version = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_decrypt(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse:
        r"""Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:decrypt", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DecryptResponse])
                res.decrypt_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_encrypt(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse:
        r"""Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:encrypt", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EncryptResponse])
                res.encrypt_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_list(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse:
        r"""Lists CryptoKeys.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/cryptoKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCryptoKeysResponse])
                res.list_crypto_keys_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_crypto_keys_update_primary_version(self, request: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest) -> operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse:
        r"""Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:updatePrimaryVersion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CryptoKey])
                res.crypto_key = out

        return res

    
    def cloudkms_projects_locations_key_rings_import_jobs_create(self, request: operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest) -> operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse:
        r"""Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/importJobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportJob])
                res.import_job = out

        return res

    
    def cloudkms_projects_locations_key_rings_import_jobs_get(self, request: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest) -> operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse:
        r"""Returns metadata for a given ImportJob.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportJob])
                res.import_job = out

        return res

    
    def cloudkms_projects_locations_key_rings_import_jobs_get_iam_policy(self, request: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest) -> operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def cloudkms_projects_locations_key_rings_import_jobs_list(self, request: operations.CloudkmsProjectsLocationsKeyRingsImportJobsListRequest) -> operations.CloudkmsProjectsLocationsKeyRingsImportJobsListResponse:
        r"""Lists ImportJobs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/importJobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsImportJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListImportJobsResponse])
                res.list_import_jobs_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_import_jobs_set_iam_policy(self, request: operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest) -> operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse:
        r"""Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
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

        res = operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def cloudkms_projects_locations_key_rings_import_jobs_test_iam_permissions(self, request: operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest) -> operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.
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

        res = operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def cloudkms_projects_locations_key_rings_list(self, request: operations.CloudkmsProjectsLocationsKeyRingsListRequest) -> operations.CloudkmsProjectsLocationsKeyRingsListResponse:
        r"""Lists KeyRings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/keyRings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsKeyRingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListKeyRingsResponse])
                res.list_key_rings_response = out

        return res

    
    def cloudkms_projects_locations_list(self, request: operations.CloudkmsProjectsLocationsListRequest) -> operations.CloudkmsProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudkmsProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    