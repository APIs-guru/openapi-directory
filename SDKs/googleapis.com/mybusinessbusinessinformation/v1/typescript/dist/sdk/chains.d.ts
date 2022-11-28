import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Chains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessbusinessinformationChainsSearch - Searches the chain based on chain name.
    **/
    mybusinessbusinessinformationChainsSearch(req: operations.MybusinessbusinessinformationChainsSearchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationChainsSearchResponse>;
}
