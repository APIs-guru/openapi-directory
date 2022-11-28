import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ip {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * domainsrdapIpGet - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
    **/
    domainsrdapIpGet(req: operations.DomainsrdapIpGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapIpGetResponse>;
}
