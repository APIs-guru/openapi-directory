import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Connectivity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSmDeviceConnectivity - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
     *
     * Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
    **/
    getNetworkSmDeviceConnectivity(req: operations.GetNetworkSmDeviceConnectivityRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceConnectivityResponse>;
}
