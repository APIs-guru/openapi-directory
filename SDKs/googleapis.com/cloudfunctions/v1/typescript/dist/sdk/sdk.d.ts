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
    CloudfunctionsOperationsList(req: operations.CloudfunctionsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsOperationsListResponse>;
    CloudfunctionsProjectsLocationsFunctionsCall(req: operations.CloudfunctionsProjectsLocationsFunctionsCallRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsCallResponse>;
    CloudfunctionsProjectsLocationsFunctionsCreate(req: operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse>;
    CloudfunctionsProjectsLocationsFunctionsDelete(req: operations.CloudfunctionsProjectsLocationsFunctionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsDeleteResponse>;
    CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl(req: operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse>;
    CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl(req: operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse>;
    CloudfunctionsProjectsLocationsFunctionsGet(req: operations.CloudfunctionsProjectsLocationsFunctionsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGetResponse>;
    CloudfunctionsProjectsLocationsFunctionsGetIamPolicy(req: operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse>;
    CloudfunctionsProjectsLocationsFunctionsList(req: operations.CloudfunctionsProjectsLocationsFunctionsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsListResponse>;
    CloudfunctionsProjectsLocationsFunctionsPatch(req: operations.CloudfunctionsProjectsLocationsFunctionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsPatchResponse>;
    CloudfunctionsProjectsLocationsFunctionsSetIamPolicy(req: operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse>;
    CloudfunctionsProjectsLocationsFunctionsTestIamPermissions(req: operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse>;
    CloudfunctionsProjectsLocationsList(req: operations.CloudfunctionsProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsListResponse>;
}
export {};
