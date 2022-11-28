import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * languageDocumentsAnalyzeEntities - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
    **/
    languageDocumentsAnalyzeEntities(req: operations.LanguageDocumentsAnalyzeEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeEntitiesResponse>;
    /**
     * languageDocumentsAnalyzeEntitySentiment - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
    **/
    languageDocumentsAnalyzeEntitySentiment(req: operations.LanguageDocumentsAnalyzeEntitySentimentRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeEntitySentimentResponse>;
    /**
     * languageDocumentsAnalyzeSentiment - Analyzes the sentiment of the provided text.
    **/
    languageDocumentsAnalyzeSentiment(req: operations.LanguageDocumentsAnalyzeSentimentRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeSentimentResponse>;
    /**
     * languageDocumentsAnalyzeSyntax - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
    **/
    languageDocumentsAnalyzeSyntax(req: operations.LanguageDocumentsAnalyzeSyntaxRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeSyntaxResponse>;
    /**
     * languageDocumentsAnnotateText - A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
    **/
    languageDocumentsAnnotateText(req: operations.LanguageDocumentsAnnotateTextRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnnotateTextResponse>;
    /**
     * languageDocumentsClassifyText - Classifies a document into categories.
    **/
    languageDocumentsClassifyText(req: operations.LanguageDocumentsClassifyTextRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsClassifyTextResponse>;
}
