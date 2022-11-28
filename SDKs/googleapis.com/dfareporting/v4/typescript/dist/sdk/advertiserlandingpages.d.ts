import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AdvertiserLandingPages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingAdvertiserLandingPagesGet - Gets one landing page by ID.
    **/
    dfareportingAdvertiserLandingPagesGet(req: operations.DfareportingAdvertiserLandingPagesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesGetResponse>;
    /**
     * dfareportingAdvertiserLandingPagesInsert - Inserts a new landing page.
    **/
    dfareportingAdvertiserLandingPagesInsert(req: operations.DfareportingAdvertiserLandingPagesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesInsertResponse>;
    /**
     * dfareportingAdvertiserLandingPagesList - Retrieves a list of landing pages.
    **/
    dfareportingAdvertiserLandingPagesList(req: operations.DfareportingAdvertiserLandingPagesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesListResponse>;
    /**
     * dfareportingAdvertiserLandingPagesPatch - Updates an existing advertiser landing page. This method supports patch semantics.
    **/
    dfareportingAdvertiserLandingPagesPatch(req: operations.DfareportingAdvertiserLandingPagesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesPatchResponse>;
    /**
     * dfareportingAdvertiserLandingPagesUpdate - Updates an existing landing page.
    **/
    dfareportingAdvertiserLandingPagesUpdate(req: operations.DfareportingAdvertiserLandingPagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesUpdateResponse>;
}
