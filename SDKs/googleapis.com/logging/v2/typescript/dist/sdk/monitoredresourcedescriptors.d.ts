import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MonitoredResourceDescriptors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * loggingMonitoredResourceDescriptorsList - Lists the descriptors for monitored resource types used by Logging.
    **/
    loggingMonitoredResourceDescriptorsList(req: operations.LoggingMonitoredResourceDescriptorsListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingMonitoredResourceDescriptorsListResponse>;
}
