import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubereportingJobsCreate - Creates a job and returns it.
    **/
    youtubereportingJobsCreate(req: operations.YoutubereportingJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsCreateResponse>;
    /**
     * youtubereportingJobsDelete - Deletes a job.
    **/
    youtubereportingJobsDelete(req: operations.YoutubereportingJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsDeleteResponse>;
    /**
     * youtubereportingJobsGet - Gets a job.
    **/
    youtubereportingJobsGet(req: operations.YoutubereportingJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsGetResponse>;
    /**
     * youtubereportingJobsList - Lists jobs.
    **/
    youtubereportingJobsList(req: operations.YoutubereportingJobsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsListResponse>;
    /**
     * youtubereportingJobsReportsGet - Gets the metadata of a specific report.
    **/
    youtubereportingJobsReportsGet(req: operations.YoutubereportingJobsReportsGetRequest, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsReportsGetResponse>;
    /**
     * youtubereportingJobsReportsList - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.
    **/
    youtubereportingJobsReportsList(req: operations.YoutubereportingJobsReportsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsReportsListResponse>;
}
