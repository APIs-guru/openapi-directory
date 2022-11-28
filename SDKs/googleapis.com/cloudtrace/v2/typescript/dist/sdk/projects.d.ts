import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudtraceProjectsTracesBatchWrite - Batch writes new spans to new or existing traces. You cannot update existing spans.
    **/
    cloudtraceProjectsTracesBatchWrite(req: operations.CloudtraceProjectsTracesBatchWriteRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTracesBatchWriteResponse>;
    /**
     * cloudtraceProjectsTracesSpansCreateSpan - Creates a new span.
    **/
    cloudtraceProjectsTracesSpansCreateSpan(req: operations.CloudtraceProjectsTracesSpansCreateSpanRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTracesSpansCreateSpanResponse>;
}
