import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class ValidationAuthorities:
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

    
    def create_client_validator(self, request: operations.CreateClientValidatorRequest) -> operations.CreateClientValidatorResponse:
        r"""Create one validation authorities
        Create one validation authorities
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/client-validators"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateClientValidatorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationAuthority])
                res.validation_authority = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_client_validator(self, request: operations.DeleteClientValidatorRequest) -> operations.DeleteClientValidatorResponse:
        r"""Delete one validation authorities by id
        Delete one validation authorities by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/client-validators/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteClientValidatorResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def find_all_client_validators(self, request: operations.FindAllClientValidatorsRequest) -> operations.FindAllClientValidatorsResponse:
        r"""Get all validation authoritiess
        Get all validation authoritiess
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/client-validators"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindAllClientValidatorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ValidationAuthority]])
                res.validation_authorities = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def find_client_validator_by_id(self, request: operations.FindClientValidatorByIDRequest) -> operations.FindClientValidatorByIDResponse:
        r"""Get one validation authorities by id
        Get one validation authorities by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/client-validators/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindClientValidatorByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationAuthority])
                res.validation_authority = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def patch_client_validator(self, request: operations.PatchClientValidatorRequest) -> operations.PatchClientValidatorResponse:
        r"""Update one validation authorities by id
        Update one validation authorities by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/client-validators/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchClientValidatorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationAuthority])
                res.validation_authority = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_client_validator(self, request: operations.UpdateClientValidatorRequest) -> operations.UpdateClientValidatorResponse:
        r"""Update one validation authorities by id
        Update one validation authorities by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/client-validators/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateClientValidatorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationAuthority])
                res.validation_authority = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    