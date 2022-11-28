import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class AuthConfig:
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

    
    def create_global_auth_module(self, request: operations.CreateGlobalAuthModuleRequest) -> operations.CreateGlobalAuthModuleResponse:
        r"""Create one global auth. module config
        Create one global auth. module config
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/auths"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGlobalAuthModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.create_global_auth_module_200_application_json_one_of = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_global_auth_module(self, request: operations.DeleteGlobalAuthModuleRequest) -> operations.DeleteGlobalAuthModuleResponse:
        r"""Delete one global auth. module config
        Delete one global auth. module config
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/auths/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGlobalAuthModuleResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def find_all_global_auth_modules(self, request: operations.FindAllGlobalAuthModulesRequest) -> operations.FindAllGlobalAuthModulesResponse:
        r"""Get all global auth. module configs
        Get all global auth. module configs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/auths"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindAllGlobalAuthModulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.find_all_global_auth_modules_200_application_json_oneoves = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def find_global_auth_module_by_id(self, request: operations.FindGlobalAuthModuleByIDRequest) -> operations.FindGlobalAuthModuleByIDResponse:
        r"""Get one global auth. module configs
        Get one global auth. module configs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/auths/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindGlobalAuthModuleByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.find_global_auth_module_by_id_200_application_json_one_of = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def patch_global_auth_module(self, request: operations.PatchGlobalAuthModuleRequest) -> operations.PatchGlobalAuthModuleResponse:
        r"""Update one global auth. module config
        Update one global auth. module config
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/auths/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchGlobalAuthModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.patch_global_auth_module_200_application_json_one_of = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_global_auth_module(self, request: operations.UpdateGlobalAuthModuleRequest) -> operations.UpdateGlobalAuthModuleResponse:
        r"""Update one global auth. module config
        Update one global auth. module config
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/auths/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGlobalAuthModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_global_auth_module_200_application_json_one_of = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    