import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.healthcare.gov"];
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
     * getApiArticlesMediaTypeExtension - Returns pages content.
    **/
    getApiArticlesMediaTypeExtension(req: operations.GetApiArticlesMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiArticlesMediaTypeExtensionResponse>;
    /**
     * getApiBlogMediaTypeExtension - Returns pages content.
    **/
    getApiBlogMediaTypeExtension(req: operations.GetApiBlogMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiBlogMediaTypeExtensionResponse>;
    /**
     * getApiGlossaryMediaTypeExtension - Returns pages content.
    **/
    getApiGlossaryMediaTypeExtension(req: operations.GetApiGlossaryMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiGlossaryMediaTypeExtensionResponse>;
    /**
     * getApiQuestionsMediaTypeExtension - Returns pages content.
    **/
    getApiQuestionsMediaTypeExtension(req: operations.GetApiQuestionsMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiQuestionsMediaTypeExtensionResponse>;
    /**
     * getApiStatesMediaTypeExtension - Returns pages content.
    **/
    getApiStatesMediaTypeExtension(req: operations.GetApiStatesMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiStatesMediaTypeExtensionResponse>;
    /**
     * getApiTopicsMediaTypeExtension - Returns pages content.
    **/
    getApiTopicsMediaTypeExtension(req: operations.GetApiTopicsMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTopicsMediaTypeExtensionResponse>;
    /**
     * getBlogPageNameMediaTypeExtension - Returns pages content.
    **/
    getBlogPageNameMediaTypeExtension(req: operations.GetBlogPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetBlogPageNameMediaTypeExtensionResponse>;
    /**
     * getEsBlogPageNameMediaTypeExtension - Returns pages content.
    **/
    getEsBlogPageNameMediaTypeExtension(req: operations.GetEsBlogPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsBlogPageNameMediaTypeExtensionResponse>;
    /**
     * getEsGlossaryPageNameMediaTypeExtension - Returns pages content.
    **/
    getEsGlossaryPageNameMediaTypeExtension(req: operations.GetEsGlossaryPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsGlossaryPageNameMediaTypeExtensionResponse>;
    /**
     * getEsPageNameMediaTypeExtension - Returns pages content.
    **/
    getEsPageNameMediaTypeExtension(req: operations.GetEsPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsPageNameMediaTypeExtensionResponse>;
    /**
     * getEsQuestionPageNameMediaTypeExtension - Returns pages content.
    **/
    getEsQuestionPageNameMediaTypeExtension(req: operations.GetEsQuestionPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsQuestionPageNameMediaTypeExtensionResponse>;
    /**
     * getEsStateNameMediaTypeExtension - Returns pages content.
    **/
    getEsStateNameMediaTypeExtension(req: operations.GetEsStateNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsStateNameMediaTypeExtensionResponse>;
    /**
     * getGlossaryPageNameMediaTypeExtension - Returns pages content.
    **/
    getGlossaryPageNameMediaTypeExtension(req: operations.GetGlossaryPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGlossaryPageNameMediaTypeExtensionResponse>;
    /**
     * getPageNameMediaTypeExtension - Returns pages content.
    **/
    getPageNameMediaTypeExtension(req: operations.GetPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetPageNameMediaTypeExtensionResponse>;
    /**
     * getQuestionPageNameMediaTypeExtension - Returns pages content.
    **/
    getQuestionPageNameMediaTypeExtension(req: operations.GetQuestionPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetQuestionPageNameMediaTypeExtensionResponse>;
    /**
     * getStateNameMediaTypeExtension - Returns pages content.
    **/
    getStateNameMediaTypeExtension(req: operations.GetStateNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetStateNameMediaTypeExtensionResponse>;
}
export {};
