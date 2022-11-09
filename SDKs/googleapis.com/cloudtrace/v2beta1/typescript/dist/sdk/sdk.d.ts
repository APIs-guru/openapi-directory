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
    CloudtraceProjectsTraceSinksCreate(req: operations.CloudtraceProjectsTraceSinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksCreateResponse>;
    CloudtraceProjectsTraceSinksDelete(req: operations.CloudtraceProjectsTraceSinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksDeleteResponse>;
    CloudtraceProjectsTraceSinksGet(req: operations.CloudtraceProjectsTraceSinksGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksGetResponse>;
    CloudtraceProjectsTraceSinksList(req: operations.CloudtraceProjectsTraceSinksListRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksListResponse>;
    CloudtraceProjectsTraceSinksPatch(req: operations.CloudtraceProjectsTraceSinksPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksPatchResponse>;
}
export {};
