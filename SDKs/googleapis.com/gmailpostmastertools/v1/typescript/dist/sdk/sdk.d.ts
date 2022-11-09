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
    GmailpostmastertoolsDomainsList(req: operations.GmailpostmastertoolsDomainsListRequest, config?: AxiosRequestConfig): Promise<operations.GmailpostmastertoolsDomainsListResponse>;
    GmailpostmastertoolsDomainsTrafficStatsGet(req: operations.GmailpostmastertoolsDomainsTrafficStatsGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailpostmastertoolsDomainsTrafficStatsGetResponse>;
    GmailpostmastertoolsDomainsTrafficStatsList(req: operations.GmailpostmastertoolsDomainsTrafficStatsListRequest, config?: AxiosRequestConfig): Promise<operations.GmailpostmastertoolsDomainsTrafficStatsListResponse>;
}
export {};
