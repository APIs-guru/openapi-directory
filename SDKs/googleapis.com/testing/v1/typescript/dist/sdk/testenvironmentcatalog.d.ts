import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TestEnvironmentCatalog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * testingTestEnvironmentCatalogGet - Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred
    **/
    testingTestEnvironmentCatalogGet(req: operations.TestingTestEnvironmentCatalogGetRequest, config?: AxiosRequestConfig): Promise<operations.TestingTestEnvironmentCatalogGetResponse>;
}
