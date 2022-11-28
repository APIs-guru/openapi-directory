import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * iamPermissionsQueryTestablePermissions - Lists every permission that you can test on a resource. A permission is testable if you can check whether a principal has that permission on the resource.
    **/
    iamPermissionsQueryTestablePermissions(req: operations.IamPermissionsQueryTestablePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.IamPermissionsQueryTestablePermissionsResponse>;
}
