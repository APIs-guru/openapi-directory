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
     * dfareportingCampaignsGet - Gets one campaign by ID.
    **/
    dfareportingCampaignsGet(req: operations.DfareportingCampaignsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsGetResponse>;
    /**
     * dfareportingCampaignsInsert - Inserts a new campaign.
    **/
    dfareportingCampaignsInsert(req: operations.DfareportingCampaignsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsInsertResponse>;
    /**
     * dfareportingCampaignsList - Retrieves a list of campaigns, possibly filtered. This method supports paging.
    **/
    dfareportingCampaignsList(req: operations.DfareportingCampaignsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsListResponse>;
    /**
     * dfareportingCampaignsPatch - Updates an existing campaign. This method supports patch semantics.
    **/
    dfareportingCampaignsPatch(req: operations.DfareportingCampaignsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsPatchResponse>;
    /**
     * dfareportingCampaignsUpdate - Updates an existing campaign.
    **/
    dfareportingCampaignsUpdate(req: operations.DfareportingCampaignsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignsUpdateResponse>;
}
