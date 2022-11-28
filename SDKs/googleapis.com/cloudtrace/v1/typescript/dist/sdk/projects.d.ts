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
     * cloudtraceProjectsPatchTraces - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
    **/
    cloudtraceProjectsPatchTraces(req: operations.CloudtraceProjectsPatchTracesRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsPatchTracesResponse>;
    /**
     * cloudtraceProjectsTracesGet - Gets a single trace by its ID.
    **/
    cloudtraceProjectsTracesGet(req: operations.CloudtraceProjectsTracesGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTracesGetResponse>;
    /**
     * cloudtraceProjectsTracesList - Returns a list of traces that match the specified filter conditions.
    **/
    cloudtraceProjectsTracesList(req: operations.CloudtraceProjectsTracesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTracesListResponse>;
}
