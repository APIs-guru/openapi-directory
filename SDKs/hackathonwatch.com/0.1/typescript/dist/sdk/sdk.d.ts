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
    GetHackathonsIdFormat(req: operations.GetHackathonsIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetHackathonsIdFormatResponse>;
    GetHackathonsComingFormat(req: operations.GetHackathonsComingFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetHackathonsComingFormatResponse>;
    GetSwaggerDocFormat(config?: AxiosRequestConfig): Promise<operations.GetSwaggerDocFormatResponse>;
    GetSwaggerDocNameFormat(req: operations.GetSwaggerDocNameFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSwaggerDocNameFormatResponse>;
}
export {};
