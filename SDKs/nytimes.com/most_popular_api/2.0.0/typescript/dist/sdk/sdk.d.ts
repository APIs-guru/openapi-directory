import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.nytimes.com/svc/mostpopular/v2", "https://api.nytimes.com/svc/mostpopular/v2"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getMostemailedSectionTimePeriodJson - Most Emailed by Section & Time Period
    **/
    getMostemailedSectionTimePeriodJson(req: operations.GetMostemailedSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetMostemailedSectionTimePeriodJsonResponse>;
    /**
     * getMostsharedSectionTimePeriodJson - Most Shared by Section & Time Period
    **/
    getMostsharedSectionTimePeriodJson(req: operations.GetMostsharedSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetMostsharedSectionTimePeriodJsonResponse>;
    /**
     * getMostviewedSectionTimePeriodJson - Most Viewed by Section & Time Period
    **/
    getMostviewedSectionTimePeriodJson(req: operations.GetMostviewedSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetMostviewedSectionTimePeriodJsonResponse>;
}
export {};
