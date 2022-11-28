import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConfigurationChanges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationConfigurationChanges - View the Change Log for your organization
     *
     * View the Change Log for your organization
    **/
    getOrganizationConfigurationChanges(req: operations.GetOrganizationConfigurationChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigurationChangesResponse>;
}
