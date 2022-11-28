import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Entries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * datacatalogEntriesLookup - Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.
    **/
    datacatalogEntriesLookup(req: operations.DatacatalogEntriesLookupRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogEntriesLookupResponse>;
}
