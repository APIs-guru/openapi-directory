import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * allServiceGroups - Get all service groups
     *
     * Get all service groups
    **/
    allServiceGroups(req: operations.AllServiceGroupsRequest, config?: AxiosRequestConfig): Promise<operations.AllServiceGroupsResponse>;
    /**
     * createGroup - Create a new service group
     *
     * Create a new service group
    **/
    createGroup(req: operations.CreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * deleteGroup - Delete a service group
     *
     * Delete a service group
    **/
    deleteGroup(req: operations.DeleteGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * patchGroup - Update a service group with a diff
     *
     * Update a service group with a diff
    **/
    patchGroup(req: operations.PatchGroupRequest, config?: AxiosRequestConfig): Promise<operations.PatchGroupResponse>;
    /**
     * serviceGroup - Get a service group
     *
     * Get a service group
    **/
    serviceGroup(req: operations.ServiceGroupRequest, config?: AxiosRequestConfig): Promise<operations.ServiceGroupResponse>;
    /**
     * updateGroup - Update a service group
     *
     * Update a service group
    **/
    updateGroup(req: operations.UpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupResponse>;
}
