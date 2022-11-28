import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UplinksLossAndLatency {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationDevicesUplinksLossAndLatency - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     *
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
    **/
    getOrganizationDevicesUplinksLossAndLatency(req: operations.GetOrganizationDevicesUplinksLossAndLatencyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesUplinksLossAndLatencyResponse>;
}
