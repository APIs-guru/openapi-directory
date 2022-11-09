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
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse>;
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreate(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse>;
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGet(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse>;
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsList(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse>;
}
export {};
