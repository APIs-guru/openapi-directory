import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WorkgroupMembers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getWorkgroupMemberInfo - Workgroup Member Info
     *
     * Workgroup Member Info
    **/
    getWorkgroupMemberInfo(req: operations.GetWorkgroupMemberInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkgroupMemberInfoResponse>;
    /**
     * getWorkgroupMemberList - List the workgroup members
     *
     * List the workgroup members
    **/
    getWorkgroupMemberList(req: operations.GetWorkgroupMemberListRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkgroupMemberListResponse>;
}
