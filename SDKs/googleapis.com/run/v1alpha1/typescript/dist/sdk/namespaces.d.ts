import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Namespaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * runNamespacesJobsCreate - Create a job.
    **/
    runNamespacesJobsCreate(req: operations.RunNamespacesJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsCreateResponse>;
    /**
     * runNamespacesJobsDelete - Delete a job.
    **/
    runNamespacesJobsDelete(req: operations.RunNamespacesJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsDeleteResponse>;
    /**
     * runNamespacesJobsGet - Get information about a job.
    **/
    runNamespacesJobsGet(req: operations.RunNamespacesJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsGetResponse>;
    /**
     * runNamespacesJobsList - List jobs.
    **/
    runNamespacesJobsList(req: operations.RunNamespacesJobsListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsListResponse>;
}
