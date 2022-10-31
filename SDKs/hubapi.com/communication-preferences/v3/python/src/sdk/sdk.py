import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.hubapi.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def get_communication_preferences_v3_definitions_get_page(self, request: operations.GetCommunicationPreferencesV3DefinitionsGetPageRequest) -> operations.GetCommunicationPreferencesV3DefinitionsGetPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/communication-preferences/v3/definitions"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationPreferencesV3DefinitionsGetPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionDefinitionsResponse])
                res.subscription_definitions_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_communication_preferences_v3_status_email_email_address_get_email_status(self, request: operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest) -> operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/communication-preferences/v3/status/email/{emailAddress}", request.path_params)

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/communication-preferences/v3/subscribe"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/communication-preferences/v3/unsubscribe"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

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

    