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
    /**
     * Add a new word. Need to be accepted by a human.
    **/
    GetAddWord(req: operations.GetAddWordRequest, config?: AxiosRequestConfig): Promise<operations.GetAddWordResponse>;
    GetCount(config?: AxiosRequestConfig): Promise<operations.GetCountResponse>;
    GetEcho(config?: AxiosRequestConfig): Promise<operations.GetEchoResponse>;
    GetOpenapi3Json(config?: AxiosRequestConfig): Promise<operations.GetOpenapi3JsonResponse>;
    GetRandom(config?: AxiosRequestConfig): Promise<operations.GetRandomResponse>;
}
export {};
