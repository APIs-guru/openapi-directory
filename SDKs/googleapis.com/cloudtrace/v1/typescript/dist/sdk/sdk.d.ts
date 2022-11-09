import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CloudtraceProjectsPatchTraces(req: operations.CloudtraceProjectsPatchTracesRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsPatchTracesResponse>;
    CloudtraceProjectsTracesGet(req: operations.CloudtraceProjectsTracesGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTracesGetResponse>;
    CloudtraceProjectsTracesList(req: operations.CloudtraceProjectsTracesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTracesListResponse>;
}
export {};
