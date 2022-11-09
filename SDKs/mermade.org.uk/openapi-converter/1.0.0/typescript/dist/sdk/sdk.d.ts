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
    Convert(req: operations.ConvertRequest, config?: AxiosRequestConfig): Promise<operations.ConvertResponse>;
    ConvertUrl(req: operations.ConvertUrlRequest, config?: AxiosRequestConfig): Promise<operations.ConvertUrlResponse>;
    GetBadge(req: operations.GetBadgeRequest, config?: AxiosRequestConfig): Promise<operations.GetBadgeResponse>;
    GetStatus(config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    Validate(req: operations.ValidateRequest, config?: AxiosRequestConfig): Promise<operations.ValidateResponse>;
    ValidateUrl(req: operations.ValidateUrlRequest, config?: AxiosRequestConfig): Promise<operations.ValidateUrlResponse>;
}
export {};
