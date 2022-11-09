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
    TexttospeechTextSynthesize(req: operations.TexttospeechTextSynthesizeRequest, config?: AxiosRequestConfig): Promise<operations.TexttospeechTextSynthesizeResponse>;
    TexttospeechVoicesList(req: operations.TexttospeechVoicesListRequest, config?: AxiosRequestConfig): Promise<operations.TexttospeechVoicesListResponse>;
}
export {};
