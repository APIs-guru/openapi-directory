import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    DomainsrdapAutnumGet(req: operations.DomainsrdapAutnumGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapAutnumGetResponse>;
    DomainsrdapDomainGet(req: operations.DomainsrdapDomainGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapDomainGetResponse>;
    DomainsrdapEntityGet(req: operations.DomainsrdapEntityGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapEntityGetResponse>;
    DomainsrdapGetDomains(req: operations.DomainsrdapGetDomainsRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetDomainsResponse>;
    DomainsrdapGetEntities(req: operations.DomainsrdapGetEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetEntitiesResponse>;
    DomainsrdapGetHelp(req: operations.DomainsrdapGetHelpRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetHelpResponse>;
    DomainsrdapGetIp(req: operations.DomainsrdapGetIpRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetIpResponse>;
    DomainsrdapGetNameservers(req: operations.DomainsrdapGetNameserversRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapGetNameserversResponse>;
    DomainsrdapIpGet(req: operations.DomainsrdapIpGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapIpGetResponse>;
    DomainsrdapNameserverGet(req: operations.DomainsrdapNameserverGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapNameserverGetResponse>;
}
export {};
