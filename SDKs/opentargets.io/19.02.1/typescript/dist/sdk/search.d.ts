import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSearch - Search for a disease or a target
     *
     * This method allows you to look for gene or diseases of interest using a free text search,
     * replicating the functionality of the search box on our homepage. It should be used to identify
     * the best match for a disease or target of interest, rather than gathering a specific set of evidence.
     *
    **/
    getSearch(req: operations.GetSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchResponse>;
}
