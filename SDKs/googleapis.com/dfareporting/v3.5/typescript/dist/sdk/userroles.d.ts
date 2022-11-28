import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserRoles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingUserRolesDelete - Deletes an existing user role.
    **/
    dfareportingUserRolesDelete(req: operations.DfareportingUserRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesDeleteResponse>;
    /**
     * dfareportingUserRolesGet - Gets one user role by ID.
    **/
    dfareportingUserRolesGet(req: operations.DfareportingUserRolesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesGetResponse>;
    /**
     * dfareportingUserRolesInsert - Inserts a new user role.
    **/
    dfareportingUserRolesInsert(req: operations.DfareportingUserRolesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesInsertResponse>;
    /**
     * dfareportingUserRolesList - Retrieves a list of user roles, possibly filtered. This method supports paging.
    **/
    dfareportingUserRolesList(req: operations.DfareportingUserRolesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesListResponse>;
    /**
     * dfareportingUserRolesPatch - Updates an existing user role. This method supports patch semantics.
    **/
    dfareportingUserRolesPatch(req: operations.DfareportingUserRolesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesPatchResponse>;
    /**
     * dfareportingUserRolesUpdate - Updates an existing user role.
    **/
    dfareportingUserRolesUpdate(req: operations.DfareportingUserRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesUpdateResponse>;
}
