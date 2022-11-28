import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Detections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * languageDetectionsDetect - Detects the language of text within a request.
    **/
    languageDetectionsDetect(req: operations.LanguageDetectionsDetectRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionsDetectResponse>;
    /**
     * languageDetectionsList - Detects the language of text within a request.
    **/
    languageDetectionsList(req: operations.LanguageDetectionsListRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionsListResponse>;
}
