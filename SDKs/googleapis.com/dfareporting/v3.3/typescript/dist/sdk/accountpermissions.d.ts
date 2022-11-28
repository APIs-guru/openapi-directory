import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccountPermissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingAccountPermissionsGet - Gets one account permission by ID.
    **/
    dfareportingAccountPermissionsGet(req: operations.DfareportingAccountPermissionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountPermissionsGetResponse>;
    /**
     * dfareportingAccountPermissionsList - Retrieves the list of account permissions.
    **/
    dfareportingAccountPermissionsList(req: operations.DfareportingAccountPermissionsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountPermissionsListResponse>;
}
