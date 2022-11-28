import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Campaigns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getResourcesCampaignsIdJson - Get Campaign by ID
     *
     * Information about a specific campaign
    **/
    getResourcesCampaignsIdJson(req: operations.GetResourcesCampaignsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsIdJsonResponse>;
    /**
     * getResourcesCampaignsIdMediaJson - Get MediaItems by Campaign ID
     *
     * Campaign Listings
    **/
    getResourcesCampaignsIdMediaJson(req: operations.GetResourcesCampaignsIdMediaJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsIdMediaJsonResponse>;
    /**
     * getResourcesCampaignsIdSyndicateFormat - Get MediaItems for Campaign
     *
     * MediaItem
    **/
    getResourcesCampaignsIdSyndicateFormat(req: operations.GetResourcesCampaignsIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsIdSyndicateFormatResponse>;
    /**
     * getResourcesCampaignsJson - Get Campaigns
     *
     * Media Listings for a specific campaign
    **/
    getResourcesCampaignsJson(req: operations.GetResourcesCampaignsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesCampaignsJsonResponse>;
}
