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
    Get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    GetMulti(req: operations.GetMultiRequest, config?: AxiosRequestConfig): Promise<operations.GetMultiResponse>;
    Hat(config?: AxiosRequestConfig): Promise<operations.HatResponse>;
    HatOff(config?: AxiosRequestConfig): Promise<operations.HatOffResponse>;
    HatOn(config?: AxiosRequestConfig): Promise<operations.HatOnResponse>;
    MbusApi(config?: AxiosRequestConfig): Promise<operations.MbusApiResponse>;
    Scan(req: operations.ScanRequest, config?: AxiosRequestConfig): Promise<operations.ScanResponse>;
}
export {};
