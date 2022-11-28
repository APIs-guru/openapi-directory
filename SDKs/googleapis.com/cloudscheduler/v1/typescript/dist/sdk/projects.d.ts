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
     * cloudschedulerProjectsLocationsJobsCreate - Creates a job.
    **/
    cloudschedulerProjectsLocationsJobsCreate(req: operations.CloudschedulerProjectsLocationsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsCreateResponse>;
    /**
     * cloudschedulerProjectsLocationsJobsDelete - Deletes a job.
    **/
    cloudschedulerProjectsLocationsJobsDelete(req: operations.CloudschedulerProjectsLocationsJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsDeleteResponse>;
    /**
     * cloudschedulerProjectsLocationsJobsGet - Gets a job.
    **/
    cloudschedulerProjectsLocationsJobsGet(req: operations.CloudschedulerProjectsLocationsJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsGetResponse>;
    /**
     * cloudschedulerProjectsLocationsJobsList - Lists jobs.
    **/
    cloudschedulerProjectsLocationsJobsList(req: operations.CloudschedulerProjectsLocationsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsListResponse>;
    /**
     * cloudschedulerProjectsLocationsJobsPatch - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
    **/
    cloudschedulerProjectsLocationsJobsPatch(req: operations.CloudschedulerProjectsLocationsJobsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsPatchResponse>;
    /**
     * cloudschedulerProjectsLocationsJobsPause - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
    **/
    cloudschedulerProjectsLocationsJobsPause(req: operations.CloudschedulerProjectsLocationsJobsPauseRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsPauseResponse>;
    /**
     * cloudschedulerProjectsLocationsJobsResume - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
    **/
    cloudschedulerProjectsLocationsJobsResume(req: operations.CloudschedulerProjectsLocationsJobsResumeRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsResumeResponse>;
    /**
     * cloudschedulerProjectsLocationsJobsRun - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
    **/
    cloudschedulerProjectsLocationsJobsRun(req: operations.CloudschedulerProjectsLocationsJobsRunRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsRunResponse>;
    /**
     * cloudschedulerProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    cloudschedulerProjectsLocationsList(req: operations.CloudschedulerProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsListResponse>;
}
