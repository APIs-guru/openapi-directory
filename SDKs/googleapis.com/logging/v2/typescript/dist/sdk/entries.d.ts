import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Entries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * loggingEntriesCopy - Copies a set of log entries from a log bucket to a Cloud Storage bucket.
    **/
    loggingEntriesCopy(req: operations.LoggingEntriesCopyRequest, config?: AxiosRequestConfig): Promise<operations.LoggingEntriesCopyResponse>;
    /**
     * loggingEntriesList - Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).
    **/
    loggingEntriesList(req: operations.LoggingEntriesListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingEntriesListResponse>;
    /**
     * loggingEntriesTail - Streaming read of log entries as they are ingested. Until the stream is terminated, it will continue reading logs.
    **/
    loggingEntriesTail(req: operations.LoggingEntriesTailRequest, config?: AxiosRequestConfig): Promise<operations.LoggingEntriesTailResponse>;
    /**
     * loggingEntriesWrite - Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)
    **/
    loggingEntriesWrite(req: operations.LoggingEntriesWriteRequest, config?: AxiosRequestConfig): Promise<operations.LoggingEntriesWriteResponse>;
}
