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
    WorkflowsProjectsLocationsList(req: operations.WorkflowsProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsListResponse>;
    WorkflowsProjectsLocationsOperationsList(req: operations.WorkflowsProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsOperationsListResponse>;
    WorkflowsProjectsLocationsWorkflowsCreate(req: operations.WorkflowsProjectsLocationsWorkflowsCreateRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsCreateResponse>;
    WorkflowsProjectsLocationsWorkflowsDelete(req: operations.WorkflowsProjectsLocationsWorkflowsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsDeleteResponse>;
    WorkflowsProjectsLocationsWorkflowsGet(req: operations.WorkflowsProjectsLocationsWorkflowsGetRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsGetResponse>;
    WorkflowsProjectsLocationsWorkflowsList(req: operations.WorkflowsProjectsLocationsWorkflowsListRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsListResponse>;
    WorkflowsProjectsLocationsWorkflowsPatch(req: operations.WorkflowsProjectsLocationsWorkflowsPatchRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsPatchResponse>;
}
export {};
