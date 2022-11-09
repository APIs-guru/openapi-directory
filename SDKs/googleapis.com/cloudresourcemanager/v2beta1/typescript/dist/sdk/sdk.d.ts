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
    CloudresourcemanagerFoldersCreate(req: operations.CloudresourcemanagerFoldersCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersCreateResponse>;
    CloudresourcemanagerFoldersDelete(req: operations.CloudresourcemanagerFoldersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersDeleteResponse>;
    CloudresourcemanagerFoldersGet(req: operations.CloudresourcemanagerFoldersGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersGetResponse>;
    CloudresourcemanagerFoldersGetIamPolicy(req: operations.CloudresourcemanagerFoldersGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersGetIamPolicyResponse>;
    CloudresourcemanagerFoldersList(req: operations.CloudresourcemanagerFoldersListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersListResponse>;
    CloudresourcemanagerFoldersMove(req: operations.CloudresourcemanagerFoldersMoveRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersMoveResponse>;
    CloudresourcemanagerFoldersPatch(req: operations.CloudresourcemanagerFoldersPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersPatchResponse>;
    CloudresourcemanagerFoldersSearch(req: operations.CloudresourcemanagerFoldersSearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersSearchResponse>;
    CloudresourcemanagerFoldersSetIamPolicy(req: operations.CloudresourcemanagerFoldersSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersSetIamPolicyResponse>;
    CloudresourcemanagerFoldersTestIamPermissions(req: operations.CloudresourcemanagerFoldersTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersTestIamPermissionsResponse>;
    CloudresourcemanagerFoldersUndelete(req: operations.CloudresourcemanagerFoldersUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerFoldersUndeleteResponse>;
    CloudresourcemanagerOperationsGet(req: operations.CloudresourcemanagerOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOperationsGetResponse>;
}
export {};
