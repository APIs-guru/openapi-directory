import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Facets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEndpointSummary - Search endpoint summary
     *
     * Returns endpoint summary
    **/
    getEndpointSummary(req: operations.GetEndpointSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetEndpointSummaryResponse>;
}
