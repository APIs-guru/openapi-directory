import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LinkAggregations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkSwitchLinkAggregation - Create a link aggregation group
     *
     * Create a link aggregation group
    **/
    createNetworkSwitchLinkAggregation(req: operations.CreateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchLinkAggregationResponse>;
    /**
     * deleteNetworkSwitchLinkAggregation - Split a link aggregation group into separate ports
     *
     * Split a link aggregation group into separate ports
    **/
    deleteNetworkSwitchLinkAggregation(req: operations.DeleteNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchLinkAggregationResponse>;
    /**
     * getNetworkSwitchLinkAggregations - List link aggregation groups
     *
     * List link aggregation groups
    **/
    getNetworkSwitchLinkAggregations(req: operations.GetNetworkSwitchLinkAggregationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchLinkAggregationsResponse>;
    /**
     * updateNetworkSwitchLinkAggregation - Update a link aggregation group
     *
     * Update a link aggregation group
    **/
    updateNetworkSwitchLinkAggregation(req: operations.UpdateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchLinkAggregationResponse>;
}
