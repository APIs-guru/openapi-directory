import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Languages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * languageLanguagesList - Returns a list of supported languages for translation.
    **/
    languageLanguagesList(req: operations.LanguageLanguagesListRequest, config?: AxiosRequestConfig): Promise<operations.LanguageLanguagesListResponse>;
}
