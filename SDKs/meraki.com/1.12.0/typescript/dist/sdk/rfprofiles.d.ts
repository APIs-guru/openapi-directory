import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RfProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkWirelessRfProfile - Creates new RF profile for this network
     *
     * Creates new RF profile for this network
    **/
    createNetworkWirelessRfProfile(req: operations.CreateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessRfProfileResponse>;
    /**
     * deleteNetworkWirelessRfProfile - Delete a RF Profile
     *
     * Delete a RF Profile
    **/
    deleteNetworkWirelessRfProfile(req: operations.DeleteNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessRfProfileResponse>;
    /**
     * getNetworkWirelessRfProfile - Return a RF profile
     *
     * Return a RF profile
    **/
    getNetworkWirelessRfProfile(req: operations.GetNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfileResponse>;
    /**
     * getNetworkWirelessRfProfiles - List the non-basic RF profiles for this network
     *
     * List the non-basic RF profiles for this network
    **/
    getNetworkWirelessRfProfiles(req: operations.GetNetworkWirelessRfProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfilesResponse>;
    /**
     * updateNetworkWirelessRfProfile - Updates specified RF profile for this network
     *
     * Updates specified RF profile for this network
    **/
    updateNetworkWirelessRfProfile(req: operations.UpdateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessRfProfileResponse>;
}
