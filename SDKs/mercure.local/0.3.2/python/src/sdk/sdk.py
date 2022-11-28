
__doc__ = """ SDK Documentation: https://mercure.rocks/spec - The Mercure protocol specification"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://mercure.local",
]


class SDK:
    r"""SDK Documentation: https://mercure.rocks/spec - The Mercure protocol specification"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_well_known_mercure(self, request: operations.GetWellKnownMercureRequest) -> operations.GetWellKnownMercureResponse:
        r"""Subscribe to updates
        https://mercure.rocks/spec#subscription - Subscription specification
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/.well-known/mercure"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWellKnownMercureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_well_known_mercure_subscriptions(self) -> operations.GetWellKnownMercureSubscriptionsResponse:
        r"""Active subscriptions
        https://mercure.rocks/spec#subscription-api - Subscription API
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/.well-known/mercure/subscriptions"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWellKnownMercureSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/ld+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscriptions])
                res.subscriptions = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_well_known_mercure_subscriptions_topic_(self, request: operations.GetWellKnownMercureSubscriptionsTopicRequest) -> operations.GetWellKnownMercureSubscriptionsTopicResponse:
        r"""Active subscriptions for the given topic
        https://mercure.rocks/spec#subscription-api - Subscription API
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/.well-known/mercure/subscriptions/{topic}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWellKnownMercureSubscriptionsTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/ld+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscriptions])
                res.subscriptions = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_well_known_mercure_subscriptions_topic_subscriber_(self, request: operations.GetWellKnownMercureSubscriptionsTopicSubscriberRequest) -> operations.GetWellKnownMercureSubscriptionsTopicSubscriberResponse:
        r"""Active subscription for the given topic and subscriber
        https://mercure.rocks/spec#active-subscriptions - Subscription API
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/.well-known/mercure/subscriptions/{topic}/{subscriber}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWellKnownMercureSubscriptionsTopicSubscriberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/ld+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscriptions])
                res.subscriptions = out
        elif r.status_code == 401:
            pass

        return res

    
    def post_well_known_mercure(self, request: operations.PostWellKnownMercureRequest) -> operations.PostWellKnownMercureResponse:
        r"""Publish an update
        https://mercure.rocks/spec#publication - Publishing specification
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/.well-known/mercure"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWellKnownMercureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    