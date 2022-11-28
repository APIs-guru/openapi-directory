import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserRolePermissionGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingUserRolePermissionGroupsGet - Gets one user role permission group by ID.
    **/
    dfareportingUserRolePermissionGroupsGet(req: operations.DfareportingUserRolePermissionGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolePermissionGroupsGetResponse>;
    /**
     * dfareportingUserRolePermissionGroupsList - Gets a list of all supported user role permission groups.
    **/
    dfareportingUserRolePermissionGroupsList(req: operations.DfareportingUserRolePermissionGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolePermissionGroupsListResponse>;
}
