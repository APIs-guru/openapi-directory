import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FullHashes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * safebrowsingFullHashesFind - Finds the full hashes that match the requested hash prefixes.
    **/
    safebrowsingFullHashesFind(req: operations.SafebrowsingFullHashesFindRequest, config?: AxiosRequestConfig): Promise<operations.SafebrowsingFullHashesFindResponse>;
}
