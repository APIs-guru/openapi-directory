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
    LanguageDetectionsDetect(req: operations.LanguageDetectionsDetectRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionsDetectResponse>;
    LanguageDetectionsList(req: operations.LanguageDetectionsListRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionsListResponse>;
    LanguageLanguagesList(req: operations.LanguageLanguagesListRequest, config?: AxiosRequestConfig): Promise<operations.LanguageLanguagesListResponse>;
    LanguageTranslationsList(req: operations.LanguageTranslationsListRequest, config?: AxiosRequestConfig): Promise<operations.LanguageTranslationsListResponse>;
    LanguageTranslationsTranslate(req: operations.LanguageTranslationsTranslateRequest, config?: AxiosRequestConfig): Promise<operations.LanguageTranslationsTranslateResponse>;
}
export {};
