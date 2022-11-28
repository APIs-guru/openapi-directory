import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tasks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tasksTasksClear - Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
    **/
    tasksTasksClear(req: operations.TasksTasksClearRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksClearResponse>;
    /**
     * tasksTasksDelete - Deletes the specified task from the task list.
    **/
    tasksTasksDelete(req: operations.TasksTasksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksDeleteResponse>;
    /**
     * tasksTasksGet - Returns the specified task.
    **/
    tasksTasksGet(req: operations.TasksTasksGetRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksGetResponse>;
    /**
     * tasksTasksInsert - Creates a new task on the specified task list.
    **/
    tasksTasksInsert(req: operations.TasksTasksInsertRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksInsertResponse>;
    /**
     * tasksTasksList - Returns all tasks in the specified task list.
    **/
    tasksTasksList(req: operations.TasksTasksListRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksListResponse>;
    /**
     * tasksTasksMove - Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
    **/
    tasksTasksMove(req: operations.TasksTasksMoveRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksMoveResponse>;
    /**
     * tasksTasksPatch - Updates the specified task. This method supports patch semantics.
    **/
    tasksTasksPatch(req: operations.TasksTasksPatchRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksPatchResponse>;
    /**
     * tasksTasksUpdate - Updates the specified task.
    **/
    tasksTasksUpdate(req: operations.TasksTasksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TasksTasksUpdateResponse>;
}
