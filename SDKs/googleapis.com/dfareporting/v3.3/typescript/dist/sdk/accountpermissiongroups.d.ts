import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccountPermissionGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingAccountPermissionGroupsGet - Gets one account permission group by ID.
    **/
    dfareportingAccountPermissionGroupsGet(req: operations.DfareportingAccountPermissionGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountPermissionGroupsGetResponse>;
    /**
     * dfareportingAccountPermissionGroupsList - Retrieves the list of account permission groups.
    **/
    dfareportingAccountPermissionGroupsList(req: operations.DfareportingAccountPermissionGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountPermissionGroupsListResponse>;
}
