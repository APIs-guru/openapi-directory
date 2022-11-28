import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingAdsGet - Gets one ad by ID.
    **/
    dfareportingAdsGet(req: operations.DfareportingAdsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsGetResponse>;
    /**
     * dfareportingAdsInsert - Inserts a new ad.
    **/
    dfareportingAdsInsert(req: operations.DfareportingAdsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsInsertResponse>;
    /**
     * dfareportingAdsList - Retrieves a list of ads, possibly filtered. This method supports paging.
    **/
    dfareportingAdsList(req: operations.DfareportingAdsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsListResponse>;
    /**
     * dfareportingAdsPatch - Updates an existing ad. This method supports patch semantics.
    **/
    dfareportingAdsPatch(req: operations.DfareportingAdsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsPatchResponse>;
    /**
     * dfareportingAdsUpdate - Updates an existing ad.
    **/
    dfareportingAdsUpdate(req: operations.DfareportingAdsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsUpdateResponse>;
}
