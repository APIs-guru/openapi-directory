import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApnsCert {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationSmApnsCert - Get the organization's APNS certificate
     *
     * Get the organization's APNS certificate
    **/
    getOrganizationSmApnsCert(req: operations.GetOrganizationSmApnsCertRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSmApnsCertResponse>;
}
