import requests
from sdk.models import operations
from . import utils

class LifecycleOperations:
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

    
    def activate_user(self, request: operations.ActivateUserRequest) -> operations.ActivateUserResponse:
        r"""Activate User
        Activate User
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/lifecycle/activate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def deactivate_user(self, request: operations.DeactivateUserRequest) -> operations.DeactivateUserResponse:
        r"""Deactivate User
        Deactivate User
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/lifecycle/deactivate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeactivateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def reset_password(self, request: operations.ResetPasswordRequest) -> operations.ResetPasswordResponse:
        r"""Reset Password
        Reset Password
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/lifecycle/reset_password", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def set_temp_password(self, request: operations.SetTempPasswordRequest) -> operations.SetTempPasswordResponse:
        r"""Set Temp Password
        Set Temp Password
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/lifecycle/expire_password", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetTempPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def suspend_user(self, request: operations.SuspendUserRequest) -> operations.SuspendUserResponse:
        r"""Suspend User
        Suspend User
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/lifecycle/suspend", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SuspendUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def unlock_user(self, request: operations.UnlockUserRequest) -> operations.UnlockUserResponse:
        r"""Unlock User
        Unlock User
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/lifecycle/unlock", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnlockUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def unsuspend_user(self, request: operations.UnsuspendUserRequest) -> operations.UnsuspendUserResponse:
        r"""Unsuspend User
        Unsuspend User
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/lifecycle/unsuspend", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsuspendUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    