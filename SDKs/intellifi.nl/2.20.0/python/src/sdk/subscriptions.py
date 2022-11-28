import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Subscriptions:
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

    
    def add_subscription(self, request: operations.AddSubscriptionRequest) -> operations.AddSubscriptionResponse:
        r"""Create subscription
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subscriptions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def delete_subscription(self, request: operations.DeleteSubscriptionRequest) -> operations.DeleteSubscriptionResponse:
        r"""Delete subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def get_events_for_subscription_by_id(self, request: operations.GetEventsForSubscriptionByIDRequest) -> operations.GetEventsForSubscriptionByIDResponse:
        r"""Get subscription events
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{id}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsForSubscriptionByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEventsForSubscriptionByID200ApplicationJSON])
                res.get_events_for_subscription_by_id_200_application_json_object = out

        return res

    
    def get_subscription_by_id(self, request: operations.GetSubscriptionByIDRequest) -> operations.GetSubscriptionByIDResponse:
        r"""Get subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    def get_subscriptions(self, request: operations.GetSubscriptionsRequest) -> operations.GetSubscriptionsResponse:
        r"""Get all subscriptions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSubscriptions200ApplicationJSON])
                res.get_subscriptions_200_application_json_object = out

        return res

    
    def update_subscription(self, request: operations.UpdateSubscriptionRequest) -> operations.UpdateSubscriptionResponse:
        r"""Update existing subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    