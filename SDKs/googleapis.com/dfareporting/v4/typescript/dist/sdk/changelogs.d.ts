import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChangeLogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingChangeLogsGet - Gets one change log by ID.
    **/
    dfareportingChangeLogsGet(req: operations.DfareportingChangeLogsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingChangeLogsGetResponse>;
    /**
     * dfareportingChangeLogsList - Retrieves a list of change logs. This method supports paging.
    **/
    dfareportingChangeLogsList(req: operations.DfareportingChangeLogsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingChangeLogsListResponse>;
}
