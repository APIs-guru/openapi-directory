import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Advertisers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingAdvertisersGet - Gets one advertiser by ID.
    **/
    dfareportingAdvertisersGet(req: operations.DfareportingAdvertisersGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersGetResponse>;
    /**
     * dfareportingAdvertisersInsert - Inserts a new advertiser.
    **/
    dfareportingAdvertisersInsert(req: operations.DfareportingAdvertisersInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersInsertResponse>;
    /**
     * dfareportingAdvertisersList - Retrieves a list of advertisers, possibly filtered. This method supports paging.
    **/
    dfareportingAdvertisersList(req: operations.DfareportingAdvertisersListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersListResponse>;
    /**
     * dfareportingAdvertisersPatch - Updates an existing advertiser. This method supports patch semantics.
    **/
    dfareportingAdvertisersPatch(req: operations.DfareportingAdvertisersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersPatchResponse>;
    /**
     * dfareportingAdvertisersUpdate - Updates an existing advertiser.
    **/
    dfareportingAdvertisersUpdate(req: operations.DfareportingAdvertisersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersUpdateResponse>;
}
