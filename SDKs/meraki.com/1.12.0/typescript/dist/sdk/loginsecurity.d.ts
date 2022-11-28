import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LoginSecurity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationLoginSecurity - Returns the login security settings for an organization.
     *
     * Returns the login security settings for an organization.
    **/
    getOrganizationLoginSecurity(req: operations.GetOrganizationLoginSecurityRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLoginSecurityResponse>;
    /**
     * updateOrganizationLoginSecurity - Update the login security settings for an organization
     *
     * Update the login security settings for an organization
    **/
    updateOrganizationLoginSecurity(req: operations.UpdateOrganizationLoginSecurityRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationLoginSecurityResponse>;
}
