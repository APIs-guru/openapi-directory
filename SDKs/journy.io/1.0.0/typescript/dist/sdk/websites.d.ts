import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Websites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTrackingSnippet - Get snippet for a website
     *
     * Endpoint used to get a snippet for a website.
    **/
    getTrackingSnippet(req: operations.GetTrackingSnippetRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackingSnippetResponse>;
}
