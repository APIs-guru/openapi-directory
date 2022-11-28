import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Hashes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * webriskHashesSearch - Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.
    **/
    webriskHashesSearch(req: operations.WebriskHashesSearchRequest, config?: AxiosRequestConfig): Promise<operations.WebriskHashesSearchResponse>;
}
