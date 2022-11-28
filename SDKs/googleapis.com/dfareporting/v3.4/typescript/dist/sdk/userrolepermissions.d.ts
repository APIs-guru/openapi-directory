import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserRolePermissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingUserRolePermissionsGet - Gets one user role permission by ID.
    **/
    dfareportingUserRolePermissionsGet(req: operations.DfareportingUserRolePermissionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolePermissionsGetResponse>;
    /**
     * dfareportingUserRolePermissionsList - Gets a list of user role permissions, possibly filtered.
    **/
    dfareportingUserRolePermissionsList(req: operations.DfareportingUserRolePermissionsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolePermissionsListResponse>;
}
