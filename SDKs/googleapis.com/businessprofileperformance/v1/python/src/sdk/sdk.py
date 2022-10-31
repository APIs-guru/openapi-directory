import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://businessprofileperformance.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def businessprofileperformance_locations_get_daily_metrics_time_series(self, request: operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest) -> operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:getDailyMetricsTimeSeries", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDailyMetricsTimeSeriesResponse])
                res.get_daily_metrics_time_series_response = out

        return res

    
    def businessprofileperformance_locations_searchkeywords_impressions_monthly_list(self, request: operations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest) -> operations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/searchkeywords/impressions/monthly", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSearchKeywordImpressionsMonthlyResponse])
                res.list_search_keyword_impressions_monthly_response = out

        return res

    