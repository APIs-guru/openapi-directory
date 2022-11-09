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
    LanguageDocumentsAnalyzeEntities(req: operations.LanguageDocumentsAnalyzeEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeEntitiesResponse>;
    LanguageDocumentsAnalyzeSentiment(req: operations.LanguageDocumentsAnalyzeSentimentRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeSentimentResponse>;
    LanguageDocumentsAnalyzeSyntax(req: operations.LanguageDocumentsAnalyzeSyntaxRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeSyntaxResponse>;
    LanguageDocumentsAnnotateText(req: operations.LanguageDocumentsAnnotateTextRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnnotateTextResponse>;
}
export {};
