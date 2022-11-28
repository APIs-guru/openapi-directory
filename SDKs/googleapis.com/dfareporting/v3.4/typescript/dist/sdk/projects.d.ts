import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingProjectsGet - Gets one project by ID.
    **/
    dfareportingProjectsGet(req: operations.DfareportingProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingProjectsGetResponse>;
    /**
     * dfareportingProjectsList - Retrieves a list of projects, possibly filtered. This method supports paging .
    **/
    dfareportingProjectsList(req: operations.DfareportingProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingProjectsListResponse>;
}
