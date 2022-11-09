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
    SiteVerificationWebResourceDelete(req: operations.SiteVerificationWebResourceDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceDeleteResponse>;
    SiteVerificationWebResourceGet(req: operations.SiteVerificationWebResourceGetRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceGetResponse>;
    SiteVerificationWebResourceGetToken(req: operations.SiteVerificationWebResourceGetTokenRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceGetTokenResponse>;
    SiteVerificationWebResourceInsert(req: operations.SiteVerificationWebResourceInsertRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceInsertResponse>;
    SiteVerificationWebResourceList(req: operations.SiteVerificationWebResourceListRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceListResponse>;
    SiteVerificationWebResourcePatch(req: operations.SiteVerificationWebResourcePatchRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourcePatchResponse>;
    SiteVerificationWebResourceUpdate(req: operations.SiteVerificationWebResourceUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceUpdateResponse>;
}
export {};
