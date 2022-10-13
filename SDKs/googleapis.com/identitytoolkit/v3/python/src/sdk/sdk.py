import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://www.googleapis.com/identitytoolkit/v3/relyingparty",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def identitytoolkit_relyingparty_create_auth_uri(self, request: operations.IdentitytoolkitRelyingpartyCreateAuthURIRequest) -> operations.IdentitytoolkitRelyingpartyCreateAuthURIResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createAuthUri"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyCreateAuthURIResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateAuthURIResponse])
                res.create_auth_uri_response = out

        return res

    
    
    def identitytoolkit_relyingparty_delete_account(self, request: operations.IdentitytoolkitRelyingpartyDeleteAccountRequest) -> operations.IdentitytoolkitRelyingpartyDeleteAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/deleteAccount"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyDeleteAccountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteAccountResponse])
                res.delete_account_response = out

        return res

    
    
    def identitytoolkit_relyingparty_download_account(self, request: operations.IdentitytoolkitRelyingpartyDownloadAccountRequest) -> operations.IdentitytoolkitRelyingpartyDownloadAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/downloadAccount"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyDownloadAccountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DownloadAccountResponse])
                res.download_account_response = out

        return res

    
    
    def identitytoolkit_relyingparty_email_link_signin(self, request: operations.IdentitytoolkitRelyingpartyEmailLinkSigninRequest) -> operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/emailLinkSignin"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmailLinkSigninResponse])
                res.email_link_signin_response = out

        return res

    
    
    def identitytoolkit_relyingparty_get_account_info(self, request: operations.IdentitytoolkitRelyingpartyGetAccountInfoRequest) -> operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getAccountInfo"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAccountInfoResponse])
                res.get_account_info_response = out

        return res

    
    
    def identitytoolkit_relyingparty_get_oob_confirmation_code(self, request: operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest) -> operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getOobConfirmationCode"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOobConfirmationCodeResponse])
                res.get_oob_confirmation_code_response = out

        return res

    
    
    def identitytoolkit_relyingparty_get_project_config(self, request: operations.IdentitytoolkitRelyingpartyGetProjectConfigRequest) -> operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getProjectConfig"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartyGetProjectConfigResponse])
                res.identitytoolkit_relyingparty_get_project_config_response = out

        return res

    
    
    def identitytoolkit_relyingparty_get_public_keys(self, request: operations.IdentitytoolkitRelyingpartyGetPublicKeysRequest) -> operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/publicKeys"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, str]])
                res.identitytoolkit_relyingparty_get_public_keys_response = out

        return res

    
    
    def identitytoolkit_relyingparty_get_recaptcha_param(self, request: operations.IdentitytoolkitRelyingpartyGetRecaptchaParamRequest) -> operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getRecaptchaParam"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRecaptchaParamResponse])
                res.get_recaptcha_param_response = out

        return res

    
    
    def identitytoolkit_relyingparty_reset_password(self, request: operations.IdentitytoolkitRelyingpartyResetPasswordRequest) -> operations.IdentitytoolkitRelyingpartyResetPasswordResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/resetPassword"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyResetPasswordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResetPasswordResponse])
                res.reset_password_response = out

        return res

    
    
    def identitytoolkit_relyingparty_send_verification_code(self, request: operations.IdentitytoolkitRelyingpartySendVerificationCodeRequest) -> operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/sendVerificationCode"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartySendVerificationCodeResponse])
                res.identitytoolkit_relyingparty_send_verification_code_response = out

        return res

    
    
    def identitytoolkit_relyingparty_set_account_info(self, request: operations.IdentitytoolkitRelyingpartySetAccountInfoRequest) -> operations.IdentitytoolkitRelyingpartySetAccountInfoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setAccountInfo"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySetAccountInfoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetAccountInfoResponse])
                res.set_account_info_response = out

        return res

    
    
    def identitytoolkit_relyingparty_set_project_config(self, request: operations.IdentitytoolkitRelyingpartySetProjectConfigRequest) -> operations.IdentitytoolkitRelyingpartySetProjectConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setProjectConfig"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySetProjectConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartySetProjectConfigResponse])
                res.identitytoolkit_relyingparty_set_project_config_response = out

        return res

    
    
    def identitytoolkit_relyingparty_sign_out_user(self, request: operations.IdentitytoolkitRelyingpartySignOutUserRequest) -> operations.IdentitytoolkitRelyingpartySignOutUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/signOutUser"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySignOutUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartySignOutUserResponse])
                res.identitytoolkit_relyingparty_sign_out_user_response = out

        return res

    
    
    def identitytoolkit_relyingparty_signup_new_user(self, request: operations.IdentitytoolkitRelyingpartySignupNewUserRequest) -> operations.IdentitytoolkitRelyingpartySignupNewUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/signupNewUser"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySignupNewUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SignupNewUserResponse])
                res.signup_new_user_response = out

        return res

    
    
    def identitytoolkit_relyingparty_upload_account(self, request: operations.IdentitytoolkitRelyingpartyUploadAccountRequest) -> operations.IdentitytoolkitRelyingpartyUploadAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/uploadAccount"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyUploadAccountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadAccountResponse])
                res.upload_account_response = out

        return res

    
    
    def identitytoolkit_relyingparty_verify_assertion(self, request: operations.IdentitytoolkitRelyingpartyVerifyAssertionRequest) -> operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/verifyAssertion"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyAssertionResponse])
                res.verify_assertion_response = out

        return res

    
    
    def identitytoolkit_relyingparty_verify_custom_token(self, request: operations.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest) -> operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/verifyCustomToken"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyCustomTokenResponse])
                res.verify_custom_token_response = out

        return res

    
    
    def identitytoolkit_relyingparty_verify_password(self, request: operations.IdentitytoolkitRelyingpartyVerifyPasswordRequest) -> operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/verifyPassword"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyPasswordResponse])
                res.verify_password_response = out

        return res

    
    
    def identitytoolkit_relyingparty_verify_phone_number(self, request: operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest) -> operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/verifyPhoneNumber"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse])
                res.identitytoolkit_relyingparty_verify_phone_number_response = out

        return res

    