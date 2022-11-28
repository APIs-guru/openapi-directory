import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiVersion - API version
     *
     * Retrieves API Specification version information
    **/
    getApiVersion(config?: AxiosRequestConfig): Promise<operations.GetApiVersionResponse>;
    /**
     * getHealth - Service health
     *
     * Tests basic health of the service
    **/
    getHealth(config?: AxiosRequestConfig): Promise<operations.GetHealthResponse>;
}
