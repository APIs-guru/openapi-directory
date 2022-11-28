import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class JwtVerifiers:
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

    
    def create_global_jwt_verifier(self, request: operations.CreateGlobalJwtVerifierRequest) -> operations.CreateGlobalJwtVerifierResponse:
        r"""Create one global JWT verifiers
        Create one global JWT verifiers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/verifiers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGlobalJwtVerifierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalJwtVerifier])
                res.global_jwt_verifier = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_global_jwt_verifier(self, request: operations.DeleteGlobalJwtVerifierRequest) -> operations.DeleteGlobalJwtVerifierResponse:
        r"""Delete one global JWT verifiers
        Delete one global JWT verifiers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/verifiers/{verifierId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGlobalJwtVerifierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Deleted])
                res.deleted = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def find_all_global_jwt_verifiers(self, request: operations.FindAllGlobalJwtVerifiersRequest) -> operations.FindAllGlobalJwtVerifiersResponse:
        r"""Get all global JWT verifiers
        Get all global JWT verifiers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/verifiers"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindAllGlobalJwtVerifiersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GlobalJwtVerifier]])
                res.global_jwt_verifiers = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def find_global_jwt_verifiers_by_id(self, request: operations.FindGlobalJwtVerifiersByIDRequest) -> operations.FindGlobalJwtVerifiersByIDResponse:
        r"""Get one global JWT verifiers
        Get one global JWT verifiers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/verifiers/{verifierId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindGlobalJwtVerifiersByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalJwtVerifier])
                res.global_jwt_verifier = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def patch_global_jwt_verifier(self, request: operations.PatchGlobalJwtVerifierRequest) -> operations.PatchGlobalJwtVerifierResponse:
        r"""Update one global JWT verifiers
        Update one global JWT verifiers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/verifiers/{verifierId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchGlobalJwtVerifierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalJwtVerifier])
                res.global_jwt_verifier = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_global_jwt_verifier(self, request: operations.UpdateGlobalJwtVerifierRequest) -> operations.UpdateGlobalJwtVerifierResponse:
        r"""Update one global JWT verifiers
        Update one global JWT verifiers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/verifiers/{verifierId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGlobalJwtVerifierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalJwtVerifier])
                res.global_jwt_verifier = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    