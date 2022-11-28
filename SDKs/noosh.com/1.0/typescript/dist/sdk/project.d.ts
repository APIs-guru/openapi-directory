import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Project {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * attachProject - Attach children projects to specific Project
     *
     * Attach children projects to specific Project
    **/
    attachProject(req: operations.AttachProjectRequest, config?: AxiosRequestConfig): Promise<operations.AttachProjectResponse>;
    /**
     * deleteProject - Archieve a specific Project
     *
     * Archieve a specific Project
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * getProject - Get a specific Project
     *
     * Get a specific Project
    **/
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * getProjectList - List the projects
     *
     * List the projects
    **/
    getProjectList(req: operations.GetProjectListRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectListResponse>;
    /**
     * patchProject - Patch a specific Project
     *
     * Patch a specific Project
    **/
    patchProject(req: operations.PatchProjectRequest, config?: AxiosRequestConfig): Promise<operations.PatchProjectResponse>;
    /**
     * postProject - Create a Project
     *
     * Create a Project
    **/
    postProject(req: operations.PostProjectRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectResponse>;
    /**
     * putProject - Update a specific Project
     *
     * Update a specific Project
    **/
    putProject(req: operations.PutProjectRequest, config?: AxiosRequestConfig): Promise<operations.PutProjectResponse>;
}
