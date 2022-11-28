import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Roles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * iamRolesGet - Gets the definition of a Role.
    **/
    iamRolesGet(req: operations.IamRolesGetRequest, config?: AxiosRequestConfig): Promise<operations.IamRolesGetResponse>;
    /**
     * iamRolesList - Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
    **/
    iamRolesList(req: operations.IamRolesListRequest, config?: AxiosRequestConfig): Promise<operations.IamRolesListResponse>;
    /**
     * iamRolesQueryGrantableRoles - Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.
    **/
    iamRolesQueryGrantableRoles(req: operations.IamRolesQueryGrantableRolesRequest, config?: AxiosRequestConfig): Promise<operations.IamRolesQueryGrantableRolesResponse>;
}
