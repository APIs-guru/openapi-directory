import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * domainsrdapGetDomains - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
    **/
    domainsrdapGetDomains(req: operations.DomainsrdapGetDomainsRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetDomainsResponse>;
    /**
     * domainsrdapGetEntities - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
    **/
    domainsrdapGetEntities(req: operations.DomainsrdapGetEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetEntitiesResponse>;
    /**
     * domainsrdapGetHelp - Get help information for the RDAP API, including links to documentation.
    **/
    domainsrdapGetHelp(req: operations.DomainsrdapGetHelpRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetHelpResponse>;
    /**
     * domainsrdapGetIp - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
    **/
    domainsrdapGetIp(req: operations.DomainsrdapGetIpRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetIpResponse>;
    /**
     * domainsrdapGetNameservers - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
    **/
    domainsrdapGetNameservers(req: operations.DomainsrdapGetNameserversRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetNameserversResponse>;
}
