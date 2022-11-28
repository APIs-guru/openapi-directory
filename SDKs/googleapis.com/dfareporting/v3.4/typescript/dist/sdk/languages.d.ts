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
     * dfareportingLanguagesList - Retrieves a list of languages.
    **/
    dfareportingLanguagesList(req: operations.DfareportingLanguagesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingLanguagesListResponse>;
}
