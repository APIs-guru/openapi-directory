import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PerformanceHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSmDevicePerformanceHistory - Return historical records of various Systems Manager client metrics for desktop devices.
     *
     * Return historical records of various Systems Manager client metrics for desktop devices.
    **/
    getNetworkSmDevicePerformanceHistory(req: operations.GetNetworkSmDevicePerformanceHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicePerformanceHistoryResponse>;
}
