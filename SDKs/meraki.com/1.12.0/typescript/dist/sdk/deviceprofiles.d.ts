import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DeviceProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSmDeviceDeviceProfiles - Get the profiles associated with a device
     *
     * Get the profiles associated with a device
    **/
    getNetworkSmDeviceDeviceProfiles(req: operations.GetNetworkSmDeviceDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceDeviceProfilesResponse>;
    /**
     * getNetworkSmUserDeviceProfiles - Get the profiles associated with a user
     *
     * Get the profiles associated with a user
    **/
    getNetworkSmUserDeviceProfiles(req: operations.GetNetworkSmUserDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserDeviceProfilesResponse>;
}
