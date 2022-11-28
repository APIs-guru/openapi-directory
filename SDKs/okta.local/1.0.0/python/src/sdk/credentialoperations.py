import requests
from sdk.models import operations
from . import utils

class CredentialOperations:
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

    
    def change_password(self, request: operations.ChangePasswordRequest) -> operations.ChangePasswordResponse:
        r"""Change Password
        Change Password
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/credentials/change_password", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangePasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def change_recovery_question(self, request: operations.ChangeRecoveryQuestionRequest) -> operations.ChangeRecoveryQuestionResponse:
        r"""Change Recovery Question
        Change Recovery Question
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/credentials/change_recovery_question", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeRecoveryQuestionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def forgot_password_one_time_code_(self, request: operations.ForgotPasswordOneTimeCodeRequest) -> operations.ForgotPasswordOneTimeCodeResponse:
        r"""Forgot Password (One Time Code)
        Forgot Password (One Time Code)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/credentials/forgot_password", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ForgotPasswordOneTimeCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def set_recovery_credential(self, request: operations.SetRecoveryCredentialRequest) -> operations.SetRecoveryCredentialResponse:
        r"""Set Recovery Credential
        Set Recovery Credential
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetRecoveryCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    