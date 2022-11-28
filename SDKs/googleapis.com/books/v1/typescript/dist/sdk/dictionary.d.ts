import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Dictionary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksDictionaryListOfflineMetadata - Returns a list of offline dictionary metadata available
    **/
    booksDictionaryListOfflineMetadata(req: operations.BooksDictionaryListOfflineMetadataRequest, config?: AxiosRequestConfig): Promise<operations.BooksDictionaryListOfflineMetadataResponse>;
}
