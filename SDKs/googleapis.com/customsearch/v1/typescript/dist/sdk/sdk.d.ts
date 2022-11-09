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
    SearchCseList(req: operations.SearchCseListRequest, config?: AxiosRequestConfig): Promise<operations.SearchCseListResponse>;
    SearchCseSiterestrictList(req: operations.SearchCseSiterestrictListRequest, config?: AxiosRequestConfig): Promise<operations.SearchCseSiterestrictListResponse>;
}
export {};
