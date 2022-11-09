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
    SecretmanagerProjectsLocationsList(req: operations.SecretmanagerProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsLocationsListResponse>;
    SecretmanagerProjectsSecretsAddVersion(req: operations.SecretmanagerProjectsSecretsAddVersionRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsAddVersionResponse>;
    SecretmanagerProjectsSecretsCreate(req: operations.SecretmanagerProjectsSecretsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsCreateResponse>;
    SecretmanagerProjectsSecretsDelete(req: operations.SecretmanagerProjectsSecretsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsDeleteResponse>;
    SecretmanagerProjectsSecretsGetIamPolicy(req: operations.SecretmanagerProjectsSecretsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsGetIamPolicyResponse>;
    SecretmanagerProjectsSecretsList(req: operations.SecretmanagerProjectsSecretsListRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsListResponse>;
    SecretmanagerProjectsSecretsPatch(req: operations.SecretmanagerProjectsSecretsPatchRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsPatchResponse>;
    SecretmanagerProjectsSecretsSetIamPolicy(req: operations.SecretmanagerProjectsSecretsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsSetIamPolicyResponse>;
    SecretmanagerProjectsSecretsTestIamPermissions(req: operations.SecretmanagerProjectsSecretsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsTestIamPermissionsResponse>;
    SecretmanagerProjectsSecretsVersionsAccess(req: operations.SecretmanagerProjectsSecretsVersionsAccessRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsAccessResponse>;
    SecretmanagerProjectsSecretsVersionsDestroy(req: operations.SecretmanagerProjectsSecretsVersionsDestroyRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsDestroyResponse>;
    SecretmanagerProjectsSecretsVersionsDisable(req: operations.SecretmanagerProjectsSecretsVersionsDisableRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsDisableResponse>;
    SecretmanagerProjectsSecretsVersionsEnable(req: operations.SecretmanagerProjectsSecretsVersionsEnableRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsEnableResponse>;
    SecretmanagerProjectsSecretsVersionsGet(req: operations.SecretmanagerProjectsSecretsVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsGetResponse>;
    SecretmanagerProjectsSecretsVersionsList(req: operations.SecretmanagerProjectsSecretsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsListResponse>;
}
export {};
