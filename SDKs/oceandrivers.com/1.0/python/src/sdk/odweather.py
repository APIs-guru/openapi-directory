import requests
from sdk.models import operations
from . import utils

class OdWeather:
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

    
    def compare_station(self, request: operations.CompareStationRequest) -> operations.CompareStationResponse:
        r"""Get forecast and realtime information for known points<br/>None
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.0/compareStation/{stationName}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompareStationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_aemet_station(self, request: operations.GetAemetStationRequest) -> operations.GetAemetStationResponse:
        r"""Get data from the aemet stations<br/>None
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.0/getAemetStation/{stationName}/{period}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAemetStationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_easywind(self, request: operations.GetEasywindRequest) -> operations.GetEasywindResponse:
        r"""Get data from the easywind weather stations<br/>None
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.0/getEasyWind/{easywindId}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEasywindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_event_stations(self, request: operations.GetEventStationsRequest) -> operations.GetEventStationsResponse:
        r"""Get stations in an event<br/>None
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.0/getEventStations/{eventId}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventStationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_forecast_points(self, request: operations.GetForecastPointsRequest) -> operations.GetForecastPointsResponse:
        r"""Get forecast points of a yatchclub<br/>None
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.0/getForecastPoints/{yatchclubid}/language/{language}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetForecastPointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_forecast_time_series(self, request: operations.GetForecastTimeSeriesRequest) -> operations.GetForecastTimeSeriesResponse:
        r"""Get timeseries forecast information<br/>None
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.0/getForecastTimeSeries/{latitude}/{longitude}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetForecastTimeSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_forecast_time_series_wrf(self, request: operations.GetForecastTimeSeriesWrfRequest) -> operations.GetForecastTimeSeriesWrfResponse:
        r"""Get timeseries forecast information<br/>None
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.0/getForecastTimeSeriesWrf/{latitude}/{longitude}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetForecastTimeSeriesWrfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_socib_weather_station(self, request: operations.GetSocibWeatherStationRequest) -> operations.GetSocibWeatherStationResponse:
        r"""Get data from the socib bahia de palma buoy<br/>None
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.0/getSocibWeatherStation/{stationName}/{period}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSocibWeatherStationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_weather_display(self, request: operations.GetWeatherDisplayRequest) -> operations.GetWeatherDisplayResponse:
        r"""Get data from the weather display software<br/>None
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.0/getWeatherDisplay/{stationName}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWeatherDisplayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_web_cams(self) -> operations.GetWebCamsResponse:
        r"""Get forecast and realtime information for known points<br/>None
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1.0/getWebCams/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebCamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    