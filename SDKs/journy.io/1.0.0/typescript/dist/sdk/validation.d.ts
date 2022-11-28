import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Validation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getValidity - Validate API key
     *
     * Endpoint used to test the validity and some basic information about a specific API Key.
    **/
    getValidity(config?: AxiosRequestConfig): Promise<operations.GetValidityResponse>;
}
