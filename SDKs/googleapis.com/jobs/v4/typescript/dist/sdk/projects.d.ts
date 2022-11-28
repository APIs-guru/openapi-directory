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
     * jobsProjectsTenantsClientEventsCreate - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
    **/
    jobsProjectsTenantsClientEventsCreate(req: operations.JobsProjectsTenantsClientEventsCreateRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsClientEventsCreateResponse>;
    /**
     * jobsProjectsTenantsCompaniesCreate - Creates a new company entity.
    **/
    jobsProjectsTenantsCompaniesCreate(req: operations.JobsProjectsTenantsCompaniesCreateRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsCompaniesCreateResponse>;
    /**
     * jobsProjectsTenantsCompaniesList - Lists all companies associated with the project.
    **/
    jobsProjectsTenantsCompaniesList(req: operations.JobsProjectsTenantsCompaniesListRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsCompaniesListResponse>;
    /**
     * jobsProjectsTenantsCompleteQuery - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
    **/
    jobsProjectsTenantsCompleteQuery(req: operations.JobsProjectsTenantsCompleteQueryRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsCompleteQueryResponse>;
    /**
     * jobsProjectsTenantsCreate - Creates a new tenant entity.
    **/
    jobsProjectsTenantsCreate(req: operations.JobsProjectsTenantsCreateRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsCreateResponse>;
    /**
     * jobsProjectsTenantsJobsBatchCreate - Begins executing a batch create jobs operation.
    **/
    jobsProjectsTenantsJobsBatchCreate(req: operations.JobsProjectsTenantsJobsBatchCreateRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsBatchCreateResponse>;
    /**
     * jobsProjectsTenantsJobsBatchDelete - Begins executing a batch delete jobs operation.
    **/
    jobsProjectsTenantsJobsBatchDelete(req: operations.JobsProjectsTenantsJobsBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsBatchDeleteResponse>;
    /**
     * jobsProjectsTenantsJobsBatchUpdate - Begins executing a batch update jobs operation.
    **/
    jobsProjectsTenantsJobsBatchUpdate(req: operations.JobsProjectsTenantsJobsBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsBatchUpdateResponse>;
    /**
     * jobsProjectsTenantsJobsCreate - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
    **/
    jobsProjectsTenantsJobsCreate(req: operations.JobsProjectsTenantsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsCreateResponse>;
    /**
     * jobsProjectsTenantsJobsDelete - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
    **/
    jobsProjectsTenantsJobsDelete(req: operations.JobsProjectsTenantsJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsDeleteResponse>;
    /**
     * jobsProjectsTenantsJobsGet - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
    **/
    jobsProjectsTenantsJobsGet(req: operations.JobsProjectsTenantsJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsGetResponse>;
    /**
     * jobsProjectsTenantsJobsList - Lists jobs by filter.
    **/
    jobsProjectsTenantsJobsList(req: operations.JobsProjectsTenantsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsListResponse>;
    /**
     * jobsProjectsTenantsJobsPatch - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
    **/
    jobsProjectsTenantsJobsPatch(req: operations.JobsProjectsTenantsJobsPatchRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsPatchResponse>;
    /**
     * jobsProjectsTenantsJobsSearch - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
    **/
    jobsProjectsTenantsJobsSearch(req: operations.JobsProjectsTenantsJobsSearchRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsSearchResponse>;
    /**
     * jobsProjectsTenantsJobsSearchForAlert - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
    **/
    jobsProjectsTenantsJobsSearchForAlert(req: operations.JobsProjectsTenantsJobsSearchForAlertRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsSearchForAlertResponse>;
    /**
     * jobsProjectsTenantsList - Lists all tenants associated with the project.
    **/
    jobsProjectsTenantsList(req: operations.JobsProjectsTenantsListRequest, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsListResponse>;
}
