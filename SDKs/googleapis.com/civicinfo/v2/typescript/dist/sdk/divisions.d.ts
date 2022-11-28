import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Divisions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * civicinfoDivisionsSearch - Searches for political divisions by their natural name or OCD ID.
    **/
    civicinfoDivisionsSearch(req: operations.CivicinfoDivisionsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CivicinfoDivisionsSearchResponse>;
}
