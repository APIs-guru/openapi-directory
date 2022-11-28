import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AbuseReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeAbuseReportsInsert - Inserts a new resource into this collection.
    **/
    youtubeAbuseReportsInsert(req: operations.YoutubeAbuseReportsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAbuseReportsInsertResponse>;
}
