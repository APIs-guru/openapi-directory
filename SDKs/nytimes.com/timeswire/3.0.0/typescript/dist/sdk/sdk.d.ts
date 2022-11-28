import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.nytimes.com/svc/news/v3", "https://api.nytimes.com/svc/news/v3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    getContentJson(req: operations.GetContentJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentJsonResponse>;
    getContentSourceSectionJson(req: operations.GetContentSourceSectionJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentSourceSectionJsonResponse>;
    getContentSourceSectionTimePeriodJson(req: operations.GetContentSourceSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentSourceSectionTimePeriodJsonResponse>;
}
export {};
