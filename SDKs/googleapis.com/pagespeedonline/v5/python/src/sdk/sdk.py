import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://pagespeedonline.googleapis.com/",
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
        url = base_url.removesuffix("/") + "/pagespeedonline/v5/runPagespeed"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PagespeedonlinePagespeedapiRunpagespeedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PagespeedAPIPagespeedResponseV5])
                res.pagespeed_api_pagespeed_response_v5 = out

        return res

    