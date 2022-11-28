import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DirectorySites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingDirectorySitesGet - Gets one directory site by ID.
    **/
    dfareportingDirectorySitesGet(req: operations.DfareportingDirectorySitesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingDirectorySitesGetResponse>;
    /**
     * dfareportingDirectorySitesInsert - Inserts a new directory site.
    **/
    dfareportingDirectorySitesInsert(req: operations.DfareportingDirectorySitesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingDirectorySitesInsertResponse>;
    /**
     * dfareportingDirectorySitesList - Retrieves a list of directory sites, possibly filtered. This method supports paging.
    **/
    dfareportingDirectorySitesList(req: operations.DfareportingDirectorySitesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingDirectorySitesListResponse>;
}
