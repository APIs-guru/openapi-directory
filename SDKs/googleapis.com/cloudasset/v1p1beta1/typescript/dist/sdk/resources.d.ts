import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudassetResourcesSearchAll - Searches all the resources within a given accessible CRM scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.
    **/
    cloudassetResourcesSearchAll(req: operations.CloudassetResourcesSearchAllRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetResourcesSearchAllResponse>;
}
