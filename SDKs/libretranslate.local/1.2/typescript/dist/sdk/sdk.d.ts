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
    GetFrontendSettings(config?: AxiosRequestConfig): Promise<operations.GetFrontendSettingsResponse>;
    GetLanguages(config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
    PostDetect(req: operations.PostDetectRequest, config?: AxiosRequestConfig): Promise<operations.PostDetectResponse>;
    PostLanguages(config?: AxiosRequestConfig): Promise<operations.PostLanguagesResponse>;
    PostTranslate(req: operations.PostTranslateRequest, config?: AxiosRequestConfig): Promise<operations.PostTranslateResponse>;
}
export {};
