import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Languages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getResourcesLanguagesIdJson - Get Language by ID
     *
     * Information about a specific language
    **/
    getResourcesLanguagesIdJson(req: operations.GetResourcesLanguagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesLanguagesIdJsonResponse>;
    /**
     * getResourcesLanguagesJson - Get Languages
     *
     * Language Listings
    **/
    getResourcesLanguagesJson(req: operations.GetResourcesLanguagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesLanguagesJsonResponse>;
}
