import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.nytimes.com/svc/movies/v2", "https://api.nytimes.com/svc/movies/v2"];
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
    getCriticsResourceTypeJson(req: operations.GetCriticsResourceTypeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCriticsResourceTypeJsonResponse>;
    getReviewsResourceTypeJson(req: operations.GetReviewsResourceTypeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsResourceTypeJsonResponse>;
    getReviewsSearchJson(req: operations.GetReviewsSearchJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsSearchJsonResponse>;
}
export {};
