import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Apikeys:
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

    
    def all_api_keys(self, request: operations.AllAPIKeysRequest) -> operations.AllAPIKeysResponse:
        r"""Get all api keys
        Get all api keys
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/apikeys"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AllAPIKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.APIKey]])
                res.api_keys = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def api_key(self, request: operations.APIKeyRequest) -> operations.APIKeyResponse:
        r"""Get an api key
        Get an api key for a specified service descriptor
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/services/{serviceId}/apikeys/{clientId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def api_key_from_group(self, request: operations.APIKeyFromGroupRequest) -> operations.APIKeyFromGroupResponse:
        r"""Get an api key
        Get an api key for a specified service group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/groups/{groupId}/apikeys/{clientId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIKeyFromGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def api_key_from_group_quotas(self, request: operations.APIKeyFromGroupQuotasRequest) -> operations.APIKeyFromGroupQuotasResponse:
        r"""Get the quota state of an api key
        Get the quota state of an api key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/groups/{groupId}/apikeys/{clientId}/quotas", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIKeyFromGroupQuotasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Quotas])
                res.quotas = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def api_key_group(self, request: operations.APIKeyGroupRequest) -> operations.APIKeyGroupResponse:
        r"""Get the group of an api key
        Get the group of an api key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/services/{serviceId}/apikeys/{clientId}/group", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIKeyGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Group])
                res.group = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def api_key_quotas(self, request: operations.APIKeyQuotasRequest) -> operations.APIKeyQuotasResponse:
        r"""Get the quota state of an api key
        Get the quota state of an api key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/services/{serviceId}/apikeys/{clientId}/quotas", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIKeyQuotasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Quotas])
                res.quotas = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def api_keys(self, request: operations.APIKeysRequest) -> operations.APIKeysResponse:
        r"""Get all api keys for the group of a service
        Get all api keys for the group of a service
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/services/{serviceId}/apikeys", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.APIKey]])
                res.api_keys = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def api_keys_from_group(self, request: operations.APIKeysFromGroupRequest) -> operations.APIKeysFromGroupResponse:
        r"""Get all api keys for the group of a service
        Get all api keys for the group of a service
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/groups/{groupId}/apikeys", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIKeysFromGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.APIKey]])
                res.api_keys = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_api_key(self, request: operations.CreateAPIKeyRequest) -> operations.CreateAPIKeyResponse:
        r"""Create a new api key for a service
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/services/{serviceId}/apikeys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAPIKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_api_key_from_group(self, request: operations.CreateAPIKeyFromGroupRequest) -> operations.CreateAPIKeyFromGroupResponse:
        r"""Create a new api key for a group
        Create a new api key for a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/groups/{groupId}/apikeys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAPIKeyFromGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_api_key(self, request: operations.DeleteAPIKeyRequest) -> operations.DeleteAPIKeyResponse:
        r"""Delete an api key
        Delete an api key for a specified service descriptor
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/services/{serviceId}/apikeys/{clientId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIKeyResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_api_key_from_group(self, request: operations.DeleteAPIKeyFromGroupRequest) -> operations.DeleteAPIKeyFromGroupResponse:
        r"""Delete an api key
        Delete an api key for a specified service group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/groups/{groupId}/apikeys/{clientId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPIKeyFromGroupResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def patch_api_key(self, request: operations.PatchAPIKeyRequest) -> operations.PatchAPIKeyResponse:
        r"""Update an api key with a diff
        Update an api key for a specified service descriptor with a diff
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/services/{serviceId}/apikeys/{clientId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAPIKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def patch_api_key_from_group(self, request: operations.PatchAPIKeyFromGroupRequest) -> operations.PatchAPIKeyFromGroupResponse:
        r"""Update an api key with a diff
        Update an api key for a specified service descriptor with a diff
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/groups/{groupId}/apikeys/{clientId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAPIKeyFromGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def reset_api_key_from_group_quotas(self, request: operations.ResetAPIKeyFromGroupQuotasRequest) -> operations.ResetAPIKeyFromGroupQuotasResponse:
        r"""Reset the quota state of an api key
        Reset the quota state of an api key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/groups/{groupId}/apikeys/{clientId}/quotas", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetAPIKeyFromGroupQuotasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Quotas])
                res.quotas = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def reset_api_key_quotas(self, request: operations.ResetAPIKeyQuotasRequest) -> operations.ResetAPIKeyQuotasResponse:
        r"""Reset the quota state of an api key
        Reset the quota state of an api key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/services/{serviceId}/apikeys/{clientId}/quotas", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetAPIKeyQuotasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Quotas])
                res.quotas = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_api_key(self, request: operations.UpdateAPIKeyRequest) -> operations.UpdateAPIKeyResponse:
        r"""Update an api key
        Update an api key for a specified service descriptor
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/services/{serviceId}/apikeys/{clientId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAPIKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_api_key_from_group(self, request: operations.UpdateAPIKeyFromGroupRequest) -> operations.UpdateAPIKeyFromGroupResponse:
        r"""Update an api key
        Update an api key for a specified service group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/groups/{groupId}/apikeys/{clientId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAPIKeyFromGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    