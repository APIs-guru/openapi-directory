import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Scans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * spannerScansList - Return available scans given a Database-specific resource name.
    **/
    spannerScansList(req: operations.SpannerScansListRequest, config?: AxiosRequestConfig): Promise<operations.SpannerScansListResponse>;
}
