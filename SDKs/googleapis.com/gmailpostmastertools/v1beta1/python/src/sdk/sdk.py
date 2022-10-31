import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://gmailpostmastertools.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def gmailpostmastertools_domains_list(self, request: operations.GmailpostmastertoolsDomainsListRequest) -> operations.GmailpostmastertoolsDomainsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1beta1/domains"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailpostmastertoolsDomainsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDomainsResponse])
                res.list_domains_response = out

        return res

    
    def gmailpostmastertools_domains_traffic_stats_get(self, request: operations.GmailpostmastertoolsDomainsTrafficStatsGetRequest) -> operations.GmailpostmastertoolsDomainsTrafficStatsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailpostmastertoolsDomainsTrafficStatsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrafficStats])
                res.traffic_stats = out

        return res

    
    def gmailpostmastertools_domains_traffic_stats_list(self, request: operations.GmailpostmastertoolsDomainsTrafficStatsListRequest) -> operations.GmailpostmastertoolsDomainsTrafficStatsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/trafficStats", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailpostmastertoolsDomainsTrafficStatsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTrafficStatsResponse])
                res.list_traffic_stats_response = out

        return res

    