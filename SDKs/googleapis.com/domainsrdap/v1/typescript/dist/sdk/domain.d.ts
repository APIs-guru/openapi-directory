import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Domain {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * domainsrdapDomainGet - Look up RDAP information for a domain by name.
    **/
    domainsrdapDomainGet(req: operations.DomainsrdapDomainGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapDomainGetResponse>;
}
