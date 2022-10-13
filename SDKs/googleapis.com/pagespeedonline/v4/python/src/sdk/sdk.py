import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://www.googleapis.com/pagespeedonline/v4",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def pagespeedonline_pagespeedapi_runpagespeed(self, request: operations.PagespeedonlinePagespeedapiRunpagespeedRequest) -> operations.PagespeedonlinePagespeedapiRunpagespeedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/runPagespeed"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PagespeedonlinePagespeedapiRunpagespeedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    