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
     * cloudtraceProjectsTraceSinksCreate - Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
    **/
    cloudtraceProjectsTraceSinksCreate(req: operations.CloudtraceProjectsTraceSinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksCreateResponse>;
    /**
     * cloudtraceProjectsTraceSinksDelete - Deletes a sink.
    **/
    cloudtraceProjectsTraceSinksDelete(req: operations.CloudtraceProjectsTraceSinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksDeleteResponse>;
    /**
     * cloudtraceProjectsTraceSinksGet - Get a trace sink by name under the parent resource (GCP project).
    **/
    cloudtraceProjectsTraceSinksGet(req: operations.CloudtraceProjectsTraceSinksGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksGetResponse>;
    /**
     * cloudtraceProjectsTraceSinksList - List all sinks for the parent resource (GCP project).
    **/
    cloudtraceProjectsTraceSinksList(req: operations.CloudtraceProjectsTraceSinksListRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksListResponse>;
    /**
     * cloudtraceProjectsTraceSinksPatch - Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
    **/
    cloudtraceProjectsTraceSinksPatch(req: operations.CloudtraceProjectsTraceSinksPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksPatchResponse>;
}
