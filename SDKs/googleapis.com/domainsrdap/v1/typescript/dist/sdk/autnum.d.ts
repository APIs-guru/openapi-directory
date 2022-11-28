import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Autnum {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * domainsrdapAutnumGet - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
    **/
    domainsrdapAutnumGet(req: operations.DomainsrdapAutnumGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapAutnumGetResponse>;
}
