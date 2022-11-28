import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkInsightApplicationHealthByTime - Get application health by time
     *
     * Get application health by time
    **/
    getNetworkInsightApplicationHealthByTime(req: operations.GetNetworkInsightApplicationHealthByTimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkInsightApplicationHealthByTimeResponse>;
    /**
     * getOrganizationInsightApplications - List all Insight tracked applications
     *
     * List all Insight tracked applications
    **/
    getOrganizationInsightApplications(req: operations.GetOrganizationInsightApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightApplicationsResponse>;
}
