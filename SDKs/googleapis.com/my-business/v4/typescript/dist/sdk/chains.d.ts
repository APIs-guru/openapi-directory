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
     * mybusinessChainsGet - Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
    **/
    mybusinessChainsGet(req: operations.MybusinessChainsGetRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessChainsGetResponse>;
    /**
     * mybusinessChainsSearch - Searches the chain based on chain name.
    **/
    mybusinessChainsSearch(req: operations.MybusinessChainsSearchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessChainsSearchResponse>;
}
