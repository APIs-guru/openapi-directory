import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://localservices.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def localservices_account_reports_search(self, request: operations.LocalservicesAccountReportsSearchRequest) -> operations.LocalservicesAccountReportsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/accountReports:search"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LocalservicesAccountReportsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse])
                res.google_ads_homeservices_localservices_v1_search_account_reports_response = out

        return res

    
    def localservices_detailed_lead_reports_search(self, request: operations.LocalservicesDetailedLeadReportsSearchRequest) -> operations.LocalservicesDetailedLeadReportsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/detailedLeadReports:search"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LocalservicesDetailedLeadReportsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse])
                res.google_ads_homeservices_localservices_v1_search_detailed_lead_reports_response = out

        return res

    