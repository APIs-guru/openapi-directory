import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InfoTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dlpInfoTypesList - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.
    **/
    dlpInfoTypesList(req: operations.DlpInfoTypesListRequest, config?: AxiosRequestConfig): Promise<operations.DlpInfoTypesListResponse>;
}
