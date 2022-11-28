import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Translations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * languageTranslationsList - Translates input text, returning translated text.
    **/
    languageTranslationsList(req: operations.LanguageTranslationsListRequest, config?: AxiosRequestConfig): Promise<operations.LanguageTranslationsListResponse>;
    /**
     * languageTranslationsTranslate - Translates input text, returning translated text.
    **/
    languageTranslationsTranslate(req: operations.LanguageTranslationsTranslateRequest, config?: AxiosRequestConfig): Promise<operations.LanguageTranslationsTranslateResponse>;
}
