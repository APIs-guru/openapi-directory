import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TargetGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkSmTargetGroup - Add a target group
     *
     * Add a target group
    **/
    createNetworkSmTargetGroup(req: operations.CreateNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSmTargetGroupResponse>;
    /**
     * deleteNetworkSmTargetGroup - Delete a target group from a network
     *
     * Delete a target group from a network
    **/
    deleteNetworkSmTargetGroup(req: operations.DeleteNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSmTargetGroupResponse>;
    /**
     * getNetworkSmTargetGroup - Return a target group
     *
     * Return a target group
    **/
    getNetworkSmTargetGroup(req: operations.GetNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTargetGroupResponse>;
    /**
     * getNetworkSmTargetGroups - List the target groups in this network
     *
     * List the target groups in this network
    **/
    getNetworkSmTargetGroups(req: operations.GetNetworkSmTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTargetGroupsResponse>;
    /**
     * updateNetworkSmTargetGroup - Update a target group
     *
     * Update a target group
    **/
    updateNetworkSmTargetGroup(req: operations.UpdateNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSmTargetGroupResponse>;
}
