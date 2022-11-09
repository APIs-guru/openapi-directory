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
    SourcerepoProjectsGetConfig(req: operations.SourcerepoProjectsGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsGetConfigResponse>;
    SourcerepoProjectsReposCreate(req: operations.SourcerepoProjectsReposCreateRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposCreateResponse>;
    SourcerepoProjectsReposDelete(req: operations.SourcerepoProjectsReposDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposDeleteResponse>;
    SourcerepoProjectsReposGet(req: operations.SourcerepoProjectsReposGetRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposGetResponse>;
    SourcerepoProjectsReposGetIamPolicy(req: operations.SourcerepoProjectsReposGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposGetIamPolicyResponse>;
    SourcerepoProjectsReposList(req: operations.SourcerepoProjectsReposListRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposListResponse>;
    SourcerepoProjectsReposPatch(req: operations.SourcerepoProjectsReposPatchRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposPatchResponse>;
    SourcerepoProjectsReposSetIamPolicy(req: operations.SourcerepoProjectsReposSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposSetIamPolicyResponse>;
    SourcerepoProjectsReposSync(req: operations.SourcerepoProjectsReposSyncRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposSyncResponse>;
    SourcerepoProjectsReposTestIamPermissions(req: operations.SourcerepoProjectsReposTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsReposTestIamPermissionsResponse>;
    SourcerepoProjectsUpdateConfig(req: operations.SourcerepoProjectsUpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.SourcerepoProjectsUpdateConfigResponse>;
}
export {};
