import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Camera {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkCameraQualityRetentionProfile - Creates new quality retention profile for this network.
     *
     * Creates new quality retention profile for this network.
    **/
    createNetworkCameraQualityRetentionProfile(req: operations.CreateNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkCameraQualityRetentionProfileResponse>;
    /**
     * createNetworkCameraWirelessProfile - Creates a new camera wireless profile for this network.
     *
     * Creates a new camera wireless profile for this network.
    **/
    createNetworkCameraWirelessProfile(req: operations.CreateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkCameraWirelessProfileResponse>;
    /**
     * deleteNetworkCameraQualityRetentionProfile - Delete an existing quality retention profile for this network.
     *
     * Delete an existing quality retention profile for this network.
    **/
    deleteNetworkCameraQualityRetentionProfile(req: operations.DeleteNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraQualityRetentionProfileResponse>;
    /**
     * deleteNetworkCameraWirelessProfile - Delete an existing camera wireless profile for this network.
     *
     * Delete an existing camera wireless profile for this network.
    **/
    deleteNetworkCameraWirelessProfile(req: operations.DeleteNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraWirelessProfileResponse>;
    /**
     * generateDeviceCameraSnapshot - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     *
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
    **/
    generateDeviceCameraSnapshot(req: operations.GenerateDeviceCameraSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GenerateDeviceCameraSnapshotResponse>;
    /**
     * getDeviceCameraAnalyticsLive - Returns live state from camera of analytics zones
     *
     * Returns live state from camera of analytics zones
    **/
    getDeviceCameraAnalyticsLive(req: operations.GetDeviceCameraAnalyticsLiveRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsLiveResponse>;
    /**
     * getDeviceCameraAnalyticsOverview - Returns an overview of aggregate analytics data for a timespan
     *
     * Returns an overview of aggregate analytics data for a timespan
    **/
    getDeviceCameraAnalyticsOverview(req: operations.GetDeviceCameraAnalyticsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsOverviewResponse>;
    /**
     * getDeviceCameraAnalyticsRecent - Returns most recent record for analytics zones
     *
     * Returns most recent record for analytics zones
    **/
    getDeviceCameraAnalyticsRecent(req: operations.GetDeviceCameraAnalyticsRecentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsRecentResponse>;
    /**
     * getDeviceCameraAnalyticsZoneHistory - Return historical records for analytic zones
     *
     * Return historical records for analytic zones
    **/
    getDeviceCameraAnalyticsZoneHistory(req: operations.GetDeviceCameraAnalyticsZoneHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZoneHistoryResponse>;
    /**
     * getDeviceCameraAnalyticsZones - Returns all configured analytic zones for this camera
     *
     * Returns all configured analytic zones for this camera
    **/
    getDeviceCameraAnalyticsZones(req: operations.GetDeviceCameraAnalyticsZonesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZonesResponse>;
    /**
     * getDeviceCameraQualityAndRetention - Returns quality and retention settings for the given camera
     *
     * Returns quality and retention settings for the given camera
    **/
    getDeviceCameraQualityAndRetention(req: operations.GetDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraQualityAndRetentionResponse>;
    /**
     * getDeviceCameraSense - Returns sense settings for a given camera
     *
     * Returns sense settings for a given camera
    **/
    getDeviceCameraSense(req: operations.GetDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseResponse>;
    /**
     * getDeviceCameraSenseObjectDetectionModels - Returns the MV Sense object detection model list for the given camera
     *
     * Returns the MV Sense object detection model list for the given camera
    **/
    getDeviceCameraSenseObjectDetectionModels(req: operations.GetDeviceCameraSenseObjectDetectionModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseObjectDetectionModelsResponse>;
    /**
     * getDeviceCameraVideoLink - Returns video link to the specified camera
     *
     * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
    **/
    getDeviceCameraVideoLink(req: operations.GetDeviceCameraVideoLinkRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoLinkResponse>;
    /**
     * getDeviceCameraVideoSettings - Returns video settings for the given camera
     *
     * Returns video settings for the given camera
    **/
    getDeviceCameraVideoSettings(req: operations.GetDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoSettingsResponse>;
    /**
     * getDeviceCameraWirelessProfiles - Returns wireless profile assigned to the given camera
     *
     * Returns wireless profile assigned to the given camera
    **/
    getDeviceCameraWirelessProfiles(req: operations.GetDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraWirelessProfilesResponse>;
    /**
     * getNetworkCameraQualityRetentionProfile - Retrieve a single quality retention profile
     *
     * Retrieve a single quality retention profile
    **/
    getNetworkCameraQualityRetentionProfile(req: operations.GetNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraQualityRetentionProfileResponse>;
    /**
     * getNetworkCameraQualityRetentionProfiles - List the quality retention profiles for this network
     *
     * List the quality retention profiles for this network
    **/
    getNetworkCameraQualityRetentionProfiles(req: operations.GetNetworkCameraQualityRetentionProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraQualityRetentionProfilesResponse>;
    /**
     * getNetworkCameraSchedules - Returns a list of all camera recording schedules.
     *
     * Returns a list of all camera recording schedules.
    **/
    getNetworkCameraSchedules(req: operations.GetNetworkCameraSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraSchedulesResponse>;
    /**
     * getNetworkCameraWirelessProfile - Retrieve a single camera wireless profile.
     *
     * Retrieve a single camera wireless profile.
    **/
    getNetworkCameraWirelessProfile(req: operations.GetNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraWirelessProfileResponse>;
    /**
     * getNetworkCameraWirelessProfiles - List the camera wireless profiles for this network.
     *
     * List the camera wireless profiles for this network.
    **/
    getNetworkCameraWirelessProfiles(req: operations.GetNetworkCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraWirelessProfilesResponse>;
    /**
     * getOrganizationCameraOnboardingStatuses - Fetch onboarding status of cameras
     *
     * Fetch onboarding status of cameras
    **/
    getOrganizationCameraOnboardingStatuses(req: operations.GetOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraOnboardingStatusesResponse>;
    /**
     * updateDeviceCameraQualityAndRetention - Update quality and retention settings for the given camera
     *
     * Update quality and retention settings for the given camera
    **/
    updateDeviceCameraQualityAndRetention(req: operations.UpdateDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraQualityAndRetentionResponse>;
    /**
     * updateDeviceCameraSense - Update sense settings for the given camera
     *
     * Update sense settings for the given camera
    **/
    updateDeviceCameraSense(req: operations.UpdateDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraSenseResponse>;
    /**
     * updateDeviceCameraVideoSettings - Update video settings for the given camera
     *
     * Update video settings for the given camera
    **/
    updateDeviceCameraVideoSettings(req: operations.UpdateDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraVideoSettingsResponse>;
    /**
     * updateDeviceCameraWirelessProfiles - Assign wireless profiles to the given camera
     *
     * Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
    **/
    updateDeviceCameraWirelessProfiles(req: operations.UpdateDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraWirelessProfilesResponse>;
    /**
     * updateNetworkCameraQualityRetentionProfile - Update an existing quality retention profile for this network.
     *
     * Update an existing quality retention profile for this network.
    **/
    updateNetworkCameraQualityRetentionProfile(req: operations.UpdateNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraQualityRetentionProfileResponse>;
    /**
     * updateNetworkCameraWirelessProfile - Update an existing camera wireless profile in this network.
     *
     * Update an existing camera wireless profile in this network.
    **/
    updateNetworkCameraWirelessProfile(req: operations.UpdateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraWirelessProfileResponse>;
    /**
     * updateOrganizationCameraOnboardingStatuses - Notify that credential handoff to camera has completed
     *
     * Notify that credential handoff to camera has completed
    **/
    updateOrganizationCameraOnboardingStatuses(req: operations.UpdateOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationCameraOnboardingStatusesResponse>;
}
