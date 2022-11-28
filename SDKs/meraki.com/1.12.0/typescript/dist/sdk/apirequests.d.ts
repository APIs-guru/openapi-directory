import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationApiRequests - List the API requests made by an organization
     *
     * List the API requests made by an organization
    **/
    getOrganizationApiRequests(req: operations.GetOrganizationApiRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsResponse>;
    /**
     * getOrganizationApiRequestsOverview - Return an aggregated overview of API requests data
     *
     * Return an aggregated overview of API requests data
    **/
    getOrganizationApiRequestsOverview(req: operations.GetOrganizationApiRequestsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponse>;
}
