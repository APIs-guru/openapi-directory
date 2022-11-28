import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Status:
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

    
    def get_communication_preferences_v3_status_email_email_address_get_email_status(self, request: operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest) -> operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse:
        r"""Get subscription statuses for a contact
        Returns a list of subscriptions and their status for a given contact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/communication-preferences/v3/status/email/{emailAddress}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicSubscriptionStatusesResponse])
                res.public_subscription_statuses_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_communication_preferences_v3_subscribe_subscribe(self, request: operations.PostCommunicationPreferencesV3SubscribeSubscribeRequest) -> operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse:
        r"""Subscribe a contact
        Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/communication-preferences/v3/subscribe"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicSubscriptionStatus])
                res.public_subscription_status = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_communication_preferences_v3_unsubscribe_unsubscribe(self, request: operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest) -> operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse:
        r"""Unsubscribe a contact
        Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/communication-preferences/v3/unsubscribe"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicSubscriptionStatus])
                res.public_subscription_status = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    