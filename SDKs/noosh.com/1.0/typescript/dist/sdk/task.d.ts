import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Task {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * taskPriorityList - Get default task priority list
     *
     * Get default task priority list
    **/
    taskPriorityList(req: operations.TaskPriorityListRequest, config?: AxiosRequestConfig): Promise<operations.TaskPriorityListResponse>;
    /**
     * getCustomTaskTypesOfWg - Get custom task types of workgroup level
     *
     * Get custom task types of workgroup level
    **/
    getCustomTaskTypesOfWg(req: operations.GetCustomTaskTypesOfWgRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomTaskTypesOfWgResponse>;
    /**
     * getDefaultTaskStatusList - Get default task status list
     *
     * Get default task status list
    **/
    getDefaultTaskStatusList(req: operations.GetDefaultTaskStatusListRequest, config?: AxiosRequestConfig): Promise<operations.GetDefaultTaskStatusListResponse>;
    /**
     * getTaskListOfProject - Get task list of project level
     *
     * Get task list of project level
    **/
    getTaskListOfProject(req: operations.GetTaskListOfProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskListOfProjectResponse>;
    /**
     * getTaskListOfWorkgroup - Get task list of workgroup level
     *
     * Get task list of workgroup level
    **/
    getTaskListOfWorkgroup(req: operations.GetTaskListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskListOfWorkgroupResponse>;
    /**
     * getTaskOfProject - Get a sepcific task of project level
     *
     * Get a sepcific task of project level
    **/
    getTaskOfProject(req: operations.GetTaskOfProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskOfProjectResponse>;
    /**
     * getTaskOfWorkgroup - Get a sepcific task of workgroup level
     *
     * Get a sepcific task of workgroup level
    **/
    getTaskOfWorkgroup(req: operations.GetTaskOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskOfWorkgroupResponse>;
    /**
     * getTaskTypesOfWorkgroup - Get task types of workgroup level
     *
     * Get task types of workgroup level
    **/
    getTaskTypesOfWorkgroup(req: operations.GetTaskTypesOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskTypesOfWorkgroupResponse>;
    /**
     * getWgTaskStatusListOfWorkgroup - Get custom task status of workgroup level
     *
     * Get custom task status of workgroup level
    **/
    getWgTaskStatusListOfWorkgroup(req: operations.GetWgTaskStatusListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetWgTaskStatusListOfWorkgroupResponse>;
    /**
     * postTaskForProject - Create a new task
     *
     * Create a new task
    **/
    postTaskForProject(req: operations.PostTaskForProjectRequest, config?: AxiosRequestConfig): Promise<operations.PostTaskForProjectResponse>;
}
