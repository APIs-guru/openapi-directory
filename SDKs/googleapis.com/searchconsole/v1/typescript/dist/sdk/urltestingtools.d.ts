import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UrlTestingTools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchconsoleUrlTestingToolsMobileFriendlyTestRun - Runs Mobile-Friendly Test for a given URL.
    **/
    searchconsoleUrlTestingToolsMobileFriendlyTestRun(req: operations.SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest, config?: AxiosRequestConfig): Promise<operations.SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse>;
}
