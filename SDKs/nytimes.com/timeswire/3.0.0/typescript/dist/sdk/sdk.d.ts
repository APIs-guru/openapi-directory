import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GetContentJson(req: operations.GetContentJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentJsonResponse>;
    GetContentSourceSectionJson(req: operations.GetContentSourceSectionJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentSourceSectionJsonResponse>;
    GetContentSourceSectionTimePeriodJson(req: operations.GetContentSourceSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentSourceSectionTimePeriodJsonResponse>;
}
export {};
