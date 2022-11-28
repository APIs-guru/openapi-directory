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
     * deleteGroupGroupTitle - Delete a group.
     *
     * Delete a group.
    **/
    deleteGroupGroupTitle(req: operations.DeleteGroupGroupTitleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupGroupTitleResponse>;
    /**
     * getGroup - List available groups.
     *
     * List available groups.
    **/
    getGroup(req: operations.GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * getGroupGroupTitle - Read group data.
     *
     * Read group data.
    **/
    getGroupGroupTitle(req: operations.GetGroupGroupTitleRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupGroupTitleResponse>;
    /**
     * postGroupGroupTitle - Modify group data.
     *
     * Modify group data.
    **/
    postGroupGroupTitle(req: operations.PostGroupGroupTitleRequest, config?: AxiosRequestConfig): Promise<operations.PostGroupGroupTitleResponse>;
    /**
     * putGroupGroupTitle - Write group data.
     *
     * Write group data.
    **/
    putGroupGroupTitle(req: operations.PutGroupGroupTitleRequest, config?: AxiosRequestConfig): Promise<operations.PutGroupGroupTitleResponse>;
}
