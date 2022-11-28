

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.nfusionsolutions.biz",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def get_api_v_version_currencies_history(self, request: operations.GetAPIVVersionCurrenciesHistoryRequest) -> operations.GetAPIVVersionCurrenciesHistoryResponse:
        r"""Get historical prices for requested currency pairs
        Historical OHLC data for the specified period and interval size
        
        The combination of the interval parameter and start and end dates can result in results
        being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IntervalCollectionResponse]])
                res.interval_collection_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_history_supported(self, request: operations.GetAPIVVersionCurrenciesHistorySupportedRequest) -> operations.GetAPIVVersionCurrenciesHistorySupportedResponse:
        r"""Get list of currency pairs supported by the history endpoint
        Only the currency pairs in the direction noted can be used with the history endpoint.
        For example: USD/CAD is not the same as CAD/USD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/history/supported", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesHistorySupportedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_api_v_version_currencies_history_supported_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_rate(self, request: operations.GetAPIVVersionCurrenciesRateRequest) -> operations.GetAPIVVersionCurrenciesRateResponse:
        r"""Get latest mid rate for requested currency pairs
        Current Mid Rate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/rate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RateResponse]])
                res.rate_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_rate_supported(self, request: operations.GetAPIVVersionCurrenciesRateSupportedRequest) -> operations.GetAPIVVersionCurrenciesRateSupportedResponse:
        r"""Get list of currencies supported by the rate endpoint
        Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
        For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/rate/supported", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesRateSupportedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_api_v_version_currencies_rate_supported_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_summary(self, request: operations.GetAPIVVersionCurrenciesSummaryRequest) -> operations.GetAPIVVersionCurrenciesSummaryResponse:
        r"""Get latest Summary for requested currency pairs
        Current and daily summary information combined into a single quote
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SummaryResponse]])
                res.summary_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_currencies_summary_supported(self, request: operations.GetAPIVVersionCurrenciesSummarySupportedRequest) -> operations.GetAPIVVersionCurrenciesSummarySupportedResponse:
        r"""Get list of currency pairs supported by the Summary endpoint
        Only the currency pairs in the direction noted can be used with the Summary endpoint.
        For example: USD/CAD is not the same as CAD/USD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Currencies/summary/supported", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionCurrenciesSummarySupportedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_api_v_version_currencies_summary_supported_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_benchmark_history(self, request: operations.GetAPIVVersionMetalsBenchmarkHistoryRequest) -> operations.GetAPIVVersionMetalsBenchmarkHistoryResponse:
        r"""Get historical benchmark prices for requested metals
        Historical OHLC data for the specified period and interval size
        
        The combination of the interval parameter and start and end dates can result in results
        being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
        
        The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/benchmark/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsBenchmarkHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IntervalCollectionResponse]])
                res.interval_collection_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_benchmark_summary(self, request: operations.GetAPIVVersionMetalsBenchmarkSummaryRequest) -> operations.GetAPIVVersionMetalsBenchmarkSummaryResponse:
        r"""Get latest Benchmark prices for requested metals
        Benchmark price information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/benchmark/summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsBenchmarkSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SummaryResponse]])
                res.summary_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_benchmark_supported(self, request: operations.GetAPIVVersionMetalsBenchmarkSupportedRequest) -> operations.GetAPIVVersionMetalsBenchmarkSupportedResponse:
        r"""Get list of symbols supported by the benchmark endpoints
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/benchmark/supported", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsBenchmarkSupportedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_api_v_version_metals_benchmark_supported_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_spot_history(self, request: operations.GetAPIVVersionMetalsSpotHistoryRequest) -> operations.GetAPIVVersionMetalsSpotHistoryResponse:
        r"""Get historical Spot prices for requested metals
        Historical OHLC data for the specified period and interval size
        
        The combination of the interval parameter and start and end dates can result in results
        being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
        
        The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/spot/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsSpotHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IntervalCollectionResponse]])
                res.interval_collection_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_spot_performance(self, request: operations.GetAPIVVersionMetalsSpotPerformanceRequest) -> operations.GetAPIVVersionMetalsSpotPerformanceResponse:
        r"""Get Historical Performance for requested metals
        Historical Performance information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/spot/performance", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsSpotPerformanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IntervalCollectionResponse]])
                res.interval_collection_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_spot_performance_annual(self, request: operations.GetAPIVVersionMetalsSpotPerformanceAnnualRequest) -> operations.GetAPIVVersionMetalsSpotPerformanceAnnualResponse:
        r"""Get Historical Annual Performance for requested metals
        Annual Historical Performance information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/spot/performance/annual", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsSpotPerformanceAnnualResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IntervalCollectionResponse]])
                res.interval_collection_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_spot_ratio_history(self, request: operations.GetAPIVVersionMetalsSpotRatioHistoryRequest) -> operations.GetAPIVVersionMetalsSpotRatioHistoryResponse:
        r"""Get historical Spot Ratio prices for requested metals
        Historical data for the specified period and interval size
        
        The combination of the interval parameter and start and end dates can result in results
        being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/spot/ratio/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsSpotRatioHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IntervalCollectionResponse]])
                res.interval_collection_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_spot_ratio_summary(self, request: operations.GetAPIVVersionMetalsSpotRatioSummaryRequest) -> operations.GetAPIVVersionMetalsSpotRatioSummaryResponse:
        r"""Get latest Spot Summary for requested metal ratios
        Ratios between prices of two metals
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/spot/ratio/summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsSpotRatioSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SummaryResponse]])
                res.summary_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_spot_summary(self, request: operations.GetAPIVVersionMetalsSpotSummaryRequest) -> operations.GetAPIVVersionMetalsSpotSummaryResponse:
        r"""Get latest Spot Summary for requested metals
        Current and daily summary information combined into a single quote
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/spot/summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsSpotSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SummaryResponse]])
                res.summary_responses = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_spot_supported(self, request: operations.GetAPIVVersionMetalsSpotSupportedRequest) -> operations.GetAPIVVersionMetalsSpotSupportedResponse:
        r"""Get list of symbols supported by the spot endpoints
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/spot/supported", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsSpotSupportedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_api_v_version_metals_spot_supported_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v_version_metals_supported_currency(self, request: operations.GetAPIVVersionMetalsSupportedCurrencyRequest) -> operations.GetAPIVVersionMetalsSupportedCurrencyResponse:
        r"""Get list of currencies supported by metals endpoints for currency conversion
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v{version}/Metals/supported/currency", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVVersionMetalsSupportedCurrencyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_api_v_version_metals_supported_currency_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    