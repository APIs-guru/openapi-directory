import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WirelessProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkCameraWirelessProfile - Creates a new camera wireless profile for this network.
     *
     * Creates a new camera wireless profile for this network.
    **/
    createNetworkCameraWirelessProfile(req: operations.CreateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkCameraWirelessProfileResponse>;
    /**
     * deleteNetworkCameraWirelessProfile - Delete an existing camera wireless profile for this network.
     *
     * Delete an existing camera wireless profile for this network.
    **/
    deleteNetworkCameraWirelessProfile(req: operations.DeleteNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraWirelessProfileResponse>;
    /**
     * getDeviceCameraWirelessProfiles - Returns wireless profile assigned to the given camera
     *
     * Returns wireless profile assigned to the given camera
    **/
    getDeviceCameraWirelessProfiles(req: operations.GetDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraWirelessProfilesResponse>;
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
     * updateDeviceCameraWirelessProfiles - Assign wireless profiles to the given camera
     *
     * Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
    **/
    updateDeviceCameraWirelessProfiles(req: operations.UpdateDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraWirelessProfilesResponse>;
    /**
     * updateNetworkCameraWirelessProfile - Update an existing camera wireless profile in this network.
     *
     * Update an existing camera wireless profile in this network.
    **/
    updateNetworkCameraWirelessProfile(req: operations.UpdateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraWirelessProfileResponse>;
}
