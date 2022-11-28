import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudsearchInitializeCustomer - Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchInitializeCustomer(req: operations.CloudsearchInitializeCustomerRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchInitializeCustomerResponse>;
}
