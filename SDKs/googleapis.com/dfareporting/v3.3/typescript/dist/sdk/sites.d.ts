import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingSitesGet - Gets one site by ID.
    **/
    dfareportingSitesGet(req: operations.DfareportingSitesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesGetResponse>;
    /**
     * dfareportingSitesInsert - Inserts a new site.
    **/
    dfareportingSitesInsert(req: operations.DfareportingSitesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesInsertResponse>;
    /**
     * dfareportingSitesList - Retrieves a list of sites, possibly filtered. This method supports paging.
    **/
    dfareportingSitesList(req: operations.DfareportingSitesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesListResponse>;
    /**
     * dfareportingSitesPatch - Updates an existing site. This method supports patch semantics.
    **/
    dfareportingSitesPatch(req: operations.DfareportingSitesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesPatchResponse>;
    /**
     * dfareportingSitesUpdate - Updates an existing site.
    **/
    dfareportingSitesUpdate(req: operations.DfareportingSitesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesUpdateResponse>;
}
