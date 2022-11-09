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
    WebriskHashesSearch(req: operations.WebriskHashesSearchRequest, config?: AxiosRequestConfig): Promise<operations.WebriskHashesSearchResponse>;
    WebriskProjectsOperationsCancel(req: operations.WebriskProjectsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsOperationsCancelResponse>;
    WebriskProjectsOperationsDelete(req: operations.WebriskProjectsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsOperationsDeleteResponse>;
    WebriskProjectsOperationsGet(req: operations.WebriskProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsOperationsGetResponse>;
    WebriskProjectsOperationsList(req: operations.WebriskProjectsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsOperationsListResponse>;
    WebriskProjectsSubmissionsCreate(req: operations.WebriskProjectsSubmissionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsSubmissionsCreateResponse>;
    WebriskProjectsUrisSubmit(req: operations.WebriskProjectsUrisSubmitRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsUrisSubmitResponse>;
    WebriskThreatListsComputeDiff(req: operations.WebriskThreatListsComputeDiffRequest, config?: AxiosRequestConfig): Promise<operations.WebriskThreatListsComputeDiffResponse>;
    WebriskUrisSearch(req: operations.WebriskUrisSearchRequest, config?: AxiosRequestConfig): Promise<operations.WebriskUrisSearchResponse>;
}
export {};
