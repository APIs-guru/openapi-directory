import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApplicationUsage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkClientsApplicationUsage - Return the application usage data for clients
     *
     * Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientsApplicationUsage(req: operations.GetNetworkClientsApplicationUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsApplicationUsageResponse>;
}
