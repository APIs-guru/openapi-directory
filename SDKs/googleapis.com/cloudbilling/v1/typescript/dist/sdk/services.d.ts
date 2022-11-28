import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudbillingServicesList - Lists all public cloud services.
    **/
    cloudbillingServicesList(req: operations.CloudbillingServicesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingServicesListResponse>;
    /**
     * cloudbillingServicesSkusList - Lists all publicly available SKUs for a given cloud service.
    **/
    cloudbillingServicesSkusList(req: operations.CloudbillingServicesSkusListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingServicesSkusListResponse>;
}
