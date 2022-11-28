import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Camera:
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

    
    def create_network_camera_quality_retention_profile(self, request: operations.CreateNetworkCameraQualityRetentionProfileRequest) -> operations.CreateNetworkCameraQualityRetentionProfileResponse:
        r"""Creates new quality retention profile for this network.
        Creates new quality retention profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_camera_quality_retention_profile_200_application_json_object = out

        return res

    
    def create_network_camera_wireless_profile(self, request: operations.CreateNetworkCameraWirelessProfileRequest) -> operations.CreateNetworkCameraWirelessProfileResponse:
        r"""Creates a new camera wireless profile for this network.
        Creates a new camera wireless profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    def delete_network_camera_quality_retention_profile(self, request: operations.DeleteNetworkCameraQualityRetentionProfileRequest) -> operations.DeleteNetworkCameraQualityRetentionProfileResponse:
        r"""Delete an existing quality retention profile for this network.
        Delete an existing quality retention profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_camera_wireless_profile(self, request: operations.DeleteNetworkCameraWirelessProfileRequest) -> operations.DeleteNetworkCameraWirelessProfileResponse:
        r"""Delete an existing camera wireless profile for this network.
        Delete an existing camera wireless profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def generate_device_camera_snapshot(self, request: operations.GenerateDeviceCameraSnapshotRequest) -> operations.GenerateDeviceCameraSnapshotResponse:
        r"""Generate a snapshot of what the camera sees at the specified time and return a link to that image.
        Generate a snapshot of what the camera sees at the specified time and return a link to that image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/generateSnapshot", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenerateDeviceCameraSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.generate_device_camera_snapshot_202_application_json_object = out

        return res

    
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

    
    def get_device_camera_quality_and_retention(self, request: operations.GetDeviceCameraQualityAndRetentionRequest) -> operations.GetDeviceCameraQualityAndRetentionResponse:
        r"""Returns quality and retention settings for the given camera
        Returns quality and retention settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/qualityAndRetention", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraQualityAndRetentionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_quality_and_retention_200_application_json_object = out

        return res

    
    def get_device_camera_sense(self, request: operations.GetDeviceCameraSenseRequest) -> operations.GetDeviceCameraSenseResponse:
        r"""Returns sense settings for a given camera
        Returns sense settings for a given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraSenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_sense_200_application_json_object = out

        return res

    
    def get_device_camera_sense_object_detection_models(self, request: operations.GetDeviceCameraSenseObjectDetectionModelsRequest) -> operations.GetDeviceCameraSenseObjectDetectionModelsResponse:
        r"""Returns the MV Sense object detection model list for the given camera
        Returns the MV Sense object detection model list for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense/objectDetectionModels", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraSenseObjectDetectionModelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_sense_object_detection_models_200_application_json_object = out

        return res

    
    def get_device_camera_video_link(self, request: operations.GetDeviceCameraVideoLinkRequest) -> operations.GetDeviceCameraVideoLinkResponse:
        r"""Returns video link to the specified camera
        Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/videoLink", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraVideoLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_video_link_200_application_json_object = out

        return res

    
    def get_device_camera_video_settings(self, request: operations.GetDeviceCameraVideoSettingsRequest) -> operations.GetDeviceCameraVideoSettingsResponse:
        r"""Returns video settings for the given camera
        Returns video settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/video/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraVideoSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_video_settings_200_application_json_object = out

        return res

    
    def get_device_camera_wireless_profiles(self, request: operations.GetDeviceCameraWirelessProfilesRequest) -> operations.GetDeviceCameraWirelessProfilesResponse:
        r"""Returns wireless profile assigned to the given camera
        Returns wireless profile assigned to the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/wirelessProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_wireless_profiles_200_application_json_object = out

        return res

    
    def get_network_camera_quality_retention_profile(self, request: operations.GetNetworkCameraQualityRetentionProfileRequest) -> operations.GetNetworkCameraQualityRetentionProfileResponse:
        r"""Retrieve a single quality retention profile
        Retrieve a single quality retention profile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_quality_retention_profile_200_application_json_object = out

        return res

    
    def get_network_camera_quality_retention_profiles(self, request: operations.GetNetworkCameraQualityRetentionProfilesRequest) -> operations.GetNetworkCameraQualityRetentionProfilesResponse:
        r"""List the quality retention profiles for this network
        List the quality retention profiles for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraQualityRetentionProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_quality_retention_profiles_200_application_json_object = out

        return res

    
    def get_network_camera_schedules(self, request: operations.GetNetworkCameraSchedulesRequest) -> operations.GetNetworkCameraSchedulesResponse:
        r"""Returns a list of all camera recording schedules.
        Returns a list of all camera recording schedules.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/schedules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_schedules_200_application_json_object = out

        return res

    
    def get_network_camera_wireless_profile(self, request: operations.GetNetworkCameraWirelessProfileRequest) -> operations.GetNetworkCameraWirelessProfileResponse:
        r"""Retrieve a single camera wireless profile.
        Retrieve a single camera wireless profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    def get_network_camera_wireless_profiles(self, request: operations.GetNetworkCameraWirelessProfilesRequest) -> operations.GetNetworkCameraWirelessProfilesResponse:
        r"""List the camera wireless profiles for this network.
        List the camera wireless profiles for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_wireless_profiles_200_application_json_object = out

        return res

    
    def get_organization_camera_onboarding_statuses(self, request: operations.GetOrganizationCameraOnboardingStatusesRequest) -> operations.GetOrganizationCameraOnboardingStatusesResponse:
        r"""Fetch onboarding status of cameras
        Fetch onboarding status of cameras
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/camera/onboarding/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationCameraOnboardingStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_camera_onboarding_statuses_200_application_json_object = out

        return res

    
    def update_device_camera_quality_and_retention(self, request: operations.UpdateDeviceCameraQualityAndRetentionRequest) -> operations.UpdateDeviceCameraQualityAndRetentionResponse:
        r"""Update quality and retention settings for the given camera
        Update quality and retention settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/qualityAndRetention", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraQualityAndRetentionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_quality_and_retention_200_application_json_object = out

        return res

    
    def update_device_camera_sense(self, request: operations.UpdateDeviceCameraSenseRequest) -> operations.UpdateDeviceCameraSenseResponse:
        r"""Update sense settings for the given camera
        Update sense settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraSenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_sense_200_application_json_object = out

        return res

    
    def update_device_camera_video_settings(self, request: operations.UpdateDeviceCameraVideoSettingsRequest) -> operations.UpdateDeviceCameraVideoSettingsResponse:
        r"""Update video settings for the given camera
        Update video settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/video/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraVideoSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_video_settings_200_application_json_object = out

        return res

    
    def update_device_camera_wireless_profiles(self, request: operations.UpdateDeviceCameraWirelessProfilesRequest) -> operations.UpdateDeviceCameraWirelessProfilesResponse:
        r"""Assign wireless profiles to the given camera
        Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/wirelessProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_wireless_profiles_200_application_json_object = out

        return res

    
    def update_network_camera_quality_retention_profile(self, request: operations.UpdateNetworkCameraQualityRetentionProfileRequest) -> operations.UpdateNetworkCameraQualityRetentionProfileResponse:
        r"""Update an existing quality retention profile for this network.
        Update an existing quality retention profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCameraQualityRetentionProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_camera_quality_retention_profile_200_application_json_object = out

        return res

    
    def update_network_camera_wireless_profile(self, request: operations.UpdateNetworkCameraWirelessProfileRequest) -> operations.UpdateNetworkCameraWirelessProfileResponse:
        r"""Update an existing camera wireless profile in this network.
        Update an existing camera wireless profile in this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    def update_organization_camera_onboarding_statuses(self, request: operations.UpdateOrganizationCameraOnboardingStatusesRequest) -> operations.UpdateOrganizationCameraOnboardingStatusesResponse:
        r"""Notify that credential handoff to camera has completed
        Notify that credential handoff to camera has completed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/camera/onboarding/statuses", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationCameraOnboardingStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_camera_onboarding_statuses_200_application_json_object = out

        return res

    