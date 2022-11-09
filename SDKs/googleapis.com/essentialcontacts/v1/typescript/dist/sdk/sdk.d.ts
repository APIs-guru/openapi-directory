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
    EssentialcontactsProjectsContactsCompute(req: operations.EssentialcontactsProjectsContactsComputeRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsComputeResponse>;
    EssentialcontactsProjectsContactsCreate(req: operations.EssentialcontactsProjectsContactsCreateRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsCreateResponse>;
    EssentialcontactsProjectsContactsDelete(req: operations.EssentialcontactsProjectsContactsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsDeleteResponse>;
    EssentialcontactsProjectsContactsGet(req: operations.EssentialcontactsProjectsContactsGetRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsGetResponse>;
    EssentialcontactsProjectsContactsList(req: operations.EssentialcontactsProjectsContactsListRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsListResponse>;
    EssentialcontactsProjectsContactsPatch(req: operations.EssentialcontactsProjectsContactsPatchRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsPatchResponse>;
    EssentialcontactsProjectsContactsSendTestMessage(req: operations.EssentialcontactsProjectsContactsSendTestMessageRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsSendTestMessageResponse>;
}
export {};
