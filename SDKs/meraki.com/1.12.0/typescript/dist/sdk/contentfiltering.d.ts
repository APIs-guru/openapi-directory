import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ContentFiltering {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceContentFiltering - Return the content filtering settings for an MX network
     *
     * Return the content filtering settings for an MX network
    **/
    getNetworkApplianceContentFiltering(req: operations.GetNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringResponse>;
    /**
     * getNetworkApplianceContentFilteringCategories - List all available content filtering categories for an MX network
     *
     * List all available content filtering categories for an MX network
    **/
    getNetworkApplianceContentFilteringCategories(req: operations.GetNetworkApplianceContentFilteringCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringCategoriesResponse>;
    /**
     * updateNetworkApplianceContentFiltering - Update the content filtering settings for an MX network
     *
     * Update the content filtering settings for an MX network
    **/
    updateNetworkApplianceContentFiltering(req: operations.UpdateNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceContentFilteringResponse>;
}
