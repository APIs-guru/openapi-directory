import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CampaignCreativeAssociations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingCampaignCreativeAssociationsInsert - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
    **/
    dfareportingCampaignCreativeAssociationsInsert(req: operations.DfareportingCampaignCreativeAssociationsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignCreativeAssociationsInsertResponse>;
    /**
     * dfareportingCampaignCreativeAssociationsList - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
    **/
    dfareportingCampaignCreativeAssociationsList(req: operations.DfareportingCampaignCreativeAssociationsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignCreativeAssociationsListResponse>;
}
