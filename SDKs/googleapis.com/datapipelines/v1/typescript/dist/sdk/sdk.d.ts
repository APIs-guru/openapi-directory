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
    DatapipelinesProjectsLocationsListPipelines(req: operations.DatapipelinesProjectsLocationsListPipelinesRequest, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsListPipelinesResponse>;
    DatapipelinesProjectsLocationsPipelinesCreate(req: operations.DatapipelinesProjectsLocationsPipelinesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesCreateResponse>;
    DatapipelinesProjectsLocationsPipelinesDelete(req: operations.DatapipelinesProjectsLocationsPipelinesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesDeleteResponse>;
    DatapipelinesProjectsLocationsPipelinesGet(req: operations.DatapipelinesProjectsLocationsPipelinesGetRequest, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesGetResponse>;
    DatapipelinesProjectsLocationsPipelinesJobsList(req: operations.DatapipelinesProjectsLocationsPipelinesJobsListRequest, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesJobsListResponse>;
    DatapipelinesProjectsLocationsPipelinesPatch(req: operations.DatapipelinesProjectsLocationsPipelinesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesPatchResponse>;
    DatapipelinesProjectsLocationsPipelinesRun(req: operations.DatapipelinesProjectsLocationsPipelinesRunRequest, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesRunResponse>;
    DatapipelinesProjectsLocationsPipelinesStop(req: operations.DatapipelinesProjectsLocationsPipelinesStopRequest, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesStopResponse>;
}
export {};
