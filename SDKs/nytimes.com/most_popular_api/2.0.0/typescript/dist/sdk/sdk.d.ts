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
    GetMostemailedSectionTimePeriodJson(req: operations.GetMostemailedSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetMostemailedSectionTimePeriodJsonResponse>;
    GetMostsharedSectionTimePeriodJson(req: operations.GetMostsharedSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetMostsharedSectionTimePeriodJsonResponse>;
    GetMostviewedSectionTimePeriodJson(req: operations.GetMostviewedSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetMostviewedSectionTimePeriodJsonResponse>;
}
export {};
