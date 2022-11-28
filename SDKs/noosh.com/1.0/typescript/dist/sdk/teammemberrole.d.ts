import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TeamMemberRole {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMemberRoles - List all the role options for the user
     *
     * List all the role options for the user
    **/
    getMemberRoles(req: operations.GetMemberRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetMemberRolesResponse>;
}
