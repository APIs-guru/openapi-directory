import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Configuration:
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

    
    def change_account_settings(self, request: operations.ChangeAccountSettingsRequest) -> operations.ChangeAccountSettingsResponse:
        r"""Change Account Settings
        Update the default webhook URLs associated with your account:
          * Callback URL for incoming SMS messages
          * Callback URL for delivery receipts
        
        Note that the URLs you provide must be valid and active. Vonage will check that they return a 200 OK response before the setting is saved.
        """
        
        base_url = operations.CHANGE_ACCOUNT_SETTINGS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/account/settings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeAccountSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountSettings])
                res.account_settings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def register_sender(self, request: operations.RegisterSenderRequest) -> operations.RegisterSenderResponse:
        r"""Register an email sender
        Register an email sender with an API Key for using email with Verify V2.
        """
        
        base_url = operations.REGISTER_SENDER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/account/register-sender"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegisterSenderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegisterEmailResponse])
                res.register_email_response = out

        return res

    