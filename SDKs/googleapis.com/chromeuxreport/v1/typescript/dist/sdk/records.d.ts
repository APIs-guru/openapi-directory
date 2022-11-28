import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Records {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * chromeuxreportRecordsQueryRecord - Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.
    **/
    chromeuxreportRecordsQueryRecord(req: operations.ChromeuxreportRecordsQueryRecordRequest, config?: AxiosRequestConfig): Promise<operations.ChromeuxreportRecordsQueryRecordResponse>;
}
