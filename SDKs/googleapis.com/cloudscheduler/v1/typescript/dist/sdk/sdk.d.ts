import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CloudschedulerProjectsLocationsJobsCreate(req: operations.CloudschedulerProjectsLocationsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsCreateResponse>;
    CloudschedulerProjectsLocationsJobsDelete(req: operations.CloudschedulerProjectsLocationsJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsDeleteResponse>;
    CloudschedulerProjectsLocationsJobsGet(req: operations.CloudschedulerProjectsLocationsJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsGetResponse>;
    CloudschedulerProjectsLocationsJobsList(req: operations.CloudschedulerProjectsLocationsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsListResponse>;
    CloudschedulerProjectsLocationsJobsPatch(req: operations.CloudschedulerProjectsLocationsJobsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsPatchResponse>;
    CloudschedulerProjectsLocationsJobsPause(req: operations.CloudschedulerProjectsLocationsJobsPauseRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsPauseResponse>;
    CloudschedulerProjectsLocationsJobsResume(req: operations.CloudschedulerProjectsLocationsJobsResumeRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsResumeResponse>;
    CloudschedulerProjectsLocationsJobsRun(req: operations.CloudschedulerProjectsLocationsJobsRunRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsJobsRunResponse>;
    CloudschedulerProjectsLocationsList(req: operations.CloudschedulerProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudschedulerProjectsLocationsListResponse>;
}
export {};
