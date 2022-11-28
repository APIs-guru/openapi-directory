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
     * policyanalyzerProjectsLocationsActivityTypesActivitiesQuery - Queries policy activities on GCP resources.
    **/
    policyanalyzerProjectsLocationsActivityTypesActivitiesQuery(req: operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest, config?: AxiosRequestConfig): Promise<operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse>;
}
