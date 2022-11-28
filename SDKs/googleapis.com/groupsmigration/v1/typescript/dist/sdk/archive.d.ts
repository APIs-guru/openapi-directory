import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Archive {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * groupsmigrationArchiveInsert - Inserts a new mail into the archive of the Google group.
    **/
    groupsmigrationArchiveInsert(req: operations.GroupsmigrationArchiveInsertRequest, config?: AxiosRequestConfig): Promise<operations.GroupsmigrationArchiveInsertResponse>;
}
