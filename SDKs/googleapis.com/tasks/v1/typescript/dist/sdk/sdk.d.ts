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
    TasksTasklistsDelete(req: operations.TasksTasklistsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsDeleteResponse>;
    TasksTasklistsGet(req: operations.TasksTasklistsGetRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsGetResponse>;
    TasksTasklistsInsert(req: operations.TasksTasklistsInsertRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsInsertResponse>;
    TasksTasklistsList(req: operations.TasksTasklistsListRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsListResponse>;
    TasksTasklistsPatch(req: operations.TasksTasklistsPatchRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsPatchResponse>;
    TasksTasklistsUpdate(req: operations.TasksTasklistsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsUpdateResponse>;
    TasksTasksClear(req: operations.TasksTasksClearRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksClearResponse>;
    TasksTasksDelete(req: operations.TasksTasksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksDeleteResponse>;
    TasksTasksGet(req: operations.TasksTasksGetRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksGetResponse>;
    TasksTasksInsert(req: operations.TasksTasksInsertRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksInsertResponse>;
    TasksTasksList(req: operations.TasksTasksListRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksListResponse>;
    TasksTasksMove(req: operations.TasksTasksMoveRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksMoveResponse>;
    TasksTasksPatch(req: operations.TasksTasksPatchRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksPatchResponse>;
    TasksTasksUpdate(req: operations.TasksTasksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksUpdateResponse>;
}
export {};
