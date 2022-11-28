import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tasklists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tasksTasklistsDelete - Deletes the authenticated user's specified task list.
    **/
    tasksTasklistsDelete(req: operations.TasksTasklistsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsDeleteResponse>;
    /**
     * tasksTasklistsGet - Returns the authenticated user's specified task list.
    **/
    tasksTasklistsGet(req: operations.TasksTasklistsGetRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsGetResponse>;
    /**
     * tasksTasklistsInsert - Creates a new task list and adds it to the authenticated user's task lists.
    **/
    tasksTasklistsInsert(req: operations.TasksTasklistsInsertRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsInsertResponse>;
    /**
     * tasksTasklistsList - Returns all the authenticated user's task lists.
    **/
    tasksTasklistsList(req: operations.TasksTasklistsListRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsListResponse>;
    /**
     * tasksTasklistsPatch - Updates the authenticated user's specified task list. This method supports patch semantics.
    **/
    tasksTasklistsPatch(req: operations.TasksTasklistsPatchRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsPatchResponse>;
    /**
     * tasksTasklistsUpdate - Updates the authenticated user's specified task list.
    **/
    tasksTasklistsUpdate(req: operations.TasksTasklistsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsUpdateResponse>;
}
