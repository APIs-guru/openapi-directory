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
     * jobsProjectsClientEventsCreate - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
    **/
    jobsProjectsClientEventsCreate(req: operations.JobsProjectsClientEventsCreateRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsClientEventsCreateResponse>;
    /**
     * jobsProjectsCompaniesCreate - Creates a new company entity.
    **/
    jobsProjectsCompaniesCreate(req: operations.JobsProjectsCompaniesCreateRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsCompaniesCreateResponse>;
    /**
     * jobsProjectsCompaniesList - Lists all companies associated with the service account.
    **/
    jobsProjectsCompaniesList(req: operations.JobsProjectsCompaniesListRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsCompaniesListResponse>;
    /**
     * jobsProjectsComplete - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
    **/
    jobsProjectsComplete(req: operations.JobsProjectsCompleteRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsCompleteResponse>;
    /**
     * jobsProjectsJobsBatchDelete - Deletes a list of Jobs by filter.
    **/
    jobsProjectsJobsBatchDelete(req: operations.JobsProjectsJobsBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsBatchDeleteResponse>;
    /**
     * jobsProjectsJobsCreate - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
    **/
    jobsProjectsJobsCreate(req: operations.JobsProjectsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsCreateResponse>;
    /**
     * jobsProjectsJobsDelete - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
    **/
    jobsProjectsJobsDelete(req: operations.JobsProjectsJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsDeleteResponse>;
    /**
     * jobsProjectsJobsList - Lists jobs by filter.
    **/
    jobsProjectsJobsList(req: operations.JobsProjectsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsListResponse>;
    /**
     * jobsProjectsJobsPatch - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
    **/
    jobsProjectsJobsPatch(req: operations.JobsProjectsJobsPatchRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsPatchResponse>;
    /**
     * jobsProjectsJobsSearch - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
    **/
    jobsProjectsJobsSearch(req: operations.JobsProjectsJobsSearchRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsSearchResponse>;
    /**
     * jobsProjectsJobsSearchForAlert - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
    **/
    jobsProjectsJobsSearchForAlert(req: operations.JobsProjectsJobsSearchForAlertRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsSearchForAlertResponse>;
    /**
     * jobsProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    jobsProjectsOperationsGet(req: operations.JobsProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsOperationsGetResponse>;
}
