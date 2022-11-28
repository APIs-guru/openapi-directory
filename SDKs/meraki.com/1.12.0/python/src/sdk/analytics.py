import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Analytics:
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

    
    def get_device_camera_analytics_live(self, request: operations.GetDeviceCameraAnalyticsLiveRequest) -> operations.GetDeviceCameraAnalyticsLiveResponse:
        r"""Returns live state from camera of analytics zones
        Returns live state from camera of analytics zones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/live", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsLiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_live_200_application_json_object = out

        return res

    
    def get_device_camera_analytics_overview(self, request: operations.GetDeviceCameraAnalyticsOverviewRequest) -> operations.GetDeviceCameraAnalyticsOverviewResponse:
        r"""Returns an overview of aggregate analytics data for a timespan
        Returns an overview of aggregate analytics data for a timespan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_overview_200_application_json_object = out

        return res

    
    def get_device_camera_analytics_recent(self, request: operations.GetDeviceCameraAnalyticsRecentRequest) -> operations.GetDeviceCameraAnalyticsRecentResponse:
        r"""Returns most recent record for analytics zones
        Returns most recent record for analytics zones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/recent", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsRecentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_recent_200_application_json_object = out

        return res

    
    def get_device_camera_analytics_zone_history(self, request: operations.GetDeviceCameraAnalyticsZoneHistoryRequest) -> operations.GetDeviceCameraAnalyticsZoneHistoryResponse:
        r"""Return historical records for analytic zones
        Return historical records for analytic zones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/zones/{zoneId}/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsZoneHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_zone_history_200_application_json_object = out

        return res

    
    def get_device_camera_analytics_zones(self, request: operations.GetDeviceCameraAnalyticsZonesRequest) -> operations.GetDeviceCameraAnalyticsZonesResponse:
        r"""Returns all configured analytic zones for this camera
        Returns all configured analytic zones for this camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/zones", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsZonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_zones_200_application_json_object = out

        return res

    