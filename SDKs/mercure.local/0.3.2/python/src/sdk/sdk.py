import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://mercure.local",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def get_well_known_mercure(self, request: operations.GetWellKnownMercureRequest) -> operations.GetWellKnownMercureResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/.well-known/mercure"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/.well-known/mercure/subscriptions"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/.well-known/mercure/subscriptions/{topic}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/.well-known/mercure/subscriptions/{topic}/{subscriber}", request.path_params)
        
        client = self.client

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

    