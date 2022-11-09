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
    GetApiArticlesMediaTypeExtension(req: operations.GetApiArticlesMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiArticlesMediaTypeExtensionResponse>;
    GetApiBlogMediaTypeExtension(req: operations.GetApiBlogMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiBlogMediaTypeExtensionResponse>;
    GetApiGlossaryMediaTypeExtension(req: operations.GetApiGlossaryMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiGlossaryMediaTypeExtensionResponse>;
    GetApiQuestionsMediaTypeExtension(req: operations.GetApiQuestionsMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiQuestionsMediaTypeExtensionResponse>;
    GetApiStatesMediaTypeExtension(req: operations.GetApiStatesMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiStatesMediaTypeExtensionResponse>;
    GetApiTopicsMediaTypeExtension(req: operations.GetApiTopicsMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTopicsMediaTypeExtensionResponse>;
    GetBlogPageNameMediaTypeExtension(req: operations.GetBlogPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetBlogPageNameMediaTypeExtensionResponse>;
    GetEsBlogPageNameMediaTypeExtension(req: operations.GetEsBlogPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsBlogPageNameMediaTypeExtensionResponse>;
    GetEsGlossaryPageNameMediaTypeExtension(req: operations.GetEsGlossaryPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsGlossaryPageNameMediaTypeExtensionResponse>;
    GetEsPageNameMediaTypeExtension(req: operations.GetEsPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsPageNameMediaTypeExtensionResponse>;
    GetEsQuestionPageNameMediaTypeExtension(req: operations.GetEsQuestionPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsQuestionPageNameMediaTypeExtensionResponse>;
    GetEsStateNameMediaTypeExtension(req: operations.GetEsStateNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetEsStateNameMediaTypeExtensionResponse>;
    GetGlossaryPageNameMediaTypeExtension(req: operations.GetGlossaryPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGlossaryPageNameMediaTypeExtensionResponse>;
    GetPageNameMediaTypeExtension(req: operations.GetPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetPageNameMediaTypeExtensionResponse>;
    GetQuestionPageNameMediaTypeExtension(req: operations.GetQuestionPageNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetQuestionPageNameMediaTypeExtensionResponse>;
    GetStateNameMediaTypeExtension(req: operations.GetStateNameMediaTypeExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetStateNameMediaTypeExtensionResponse>;
}
export {};
