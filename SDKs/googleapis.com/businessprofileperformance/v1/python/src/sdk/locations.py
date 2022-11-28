import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Locations:
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

    
    def businessprofileperformance_locations_get_daily_metrics_time_series(self, request: operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest) -> operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse:
        r""" Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:getDailyMetricsTimeSeries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDailyMetricsTimeSeriesResponse])
                res.get_daily_metrics_time_series_response = out

        return res

    
    def businessprofileperformance_locations_searchkeywords_impressions_monthly_list(self, request: operations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest) -> operations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse:
        r"""Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/searchkeywords/impressions/monthly", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSearchKeywordImpressionsMonthlyResponse])
                res.list_search_keyword_impressions_monthly_response = out

        return res

    