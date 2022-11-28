import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Creatives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingCreativesGet - Gets one creative by ID.
    **/
    dfareportingCreativesGet(req: operations.DfareportingCreativesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesGetResponse>;
    /**
     * dfareportingCreativesInsert - Inserts a new creative.
    **/
    dfareportingCreativesInsert(req: operations.DfareportingCreativesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesInsertResponse>;
    /**
     * dfareportingCreativesList - Retrieves a list of creatives, possibly filtered. This method supports paging.
    **/
    dfareportingCreativesList(req: operations.DfareportingCreativesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesListResponse>;
    /**
     * dfareportingCreativesPatch - Updates an existing creative. This method supports patch semantics.
    **/
    dfareportingCreativesPatch(req: operations.DfareportingCreativesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesPatchResponse>;
    /**
     * dfareportingCreativesUpdate - Updates an existing creative.
    **/
    dfareportingCreativesUpdate(req: operations.DfareportingCreativesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesUpdateResponse>;
}
