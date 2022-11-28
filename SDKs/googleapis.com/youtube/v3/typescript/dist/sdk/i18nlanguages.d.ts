import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class I18nLanguages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeI18nLanguagesList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeI18nLanguagesList(req: operations.YoutubeI18nLanguagesListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeI18nLanguagesListResponse>;
}
