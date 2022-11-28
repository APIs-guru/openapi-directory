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
     * secretmanagerProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    secretmanagerProjectsLocationsList(req: operations.SecretmanagerProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsLocationsListResponse>;
    /**
     * secretmanagerProjectsSecretsAddVersion - Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
    **/
    secretmanagerProjectsSecretsAddVersion(req: operations.SecretmanagerProjectsSecretsAddVersionRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsAddVersionResponse>;
    /**
     * secretmanagerProjectsSecretsCreate - Creates a new Secret containing no SecretVersions.
    **/
    secretmanagerProjectsSecretsCreate(req: operations.SecretmanagerProjectsSecretsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsCreateResponse>;
    /**
     * secretmanagerProjectsSecretsDelete - Deletes a Secret.
    **/
    secretmanagerProjectsSecretsDelete(req: operations.SecretmanagerProjectsSecretsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsDeleteResponse>;
    /**
     * secretmanagerProjectsSecretsGetIamPolicy - Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
    **/
    secretmanagerProjectsSecretsGetIamPolicy(req: operations.SecretmanagerProjectsSecretsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsGetIamPolicyResponse>;
    /**
     * secretmanagerProjectsSecretsList - Lists Secrets.
    **/
    secretmanagerProjectsSecretsList(req: operations.SecretmanagerProjectsSecretsListRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsListResponse>;
    /**
     * secretmanagerProjectsSecretsPatch - Updates metadata of an existing Secret.
    **/
    secretmanagerProjectsSecretsPatch(req: operations.SecretmanagerProjectsSecretsPatchRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsPatchResponse>;
    /**
     * secretmanagerProjectsSecretsSetIamPolicy - Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
    **/
    secretmanagerProjectsSecretsSetIamPolicy(req: operations.SecretmanagerProjectsSecretsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsSetIamPolicyResponse>;
    /**
     * secretmanagerProjectsSecretsTestIamPermissions - Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    secretmanagerProjectsSecretsTestIamPermissions(req: operations.SecretmanagerProjectsSecretsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsTestIamPermissionsResponse>;
    /**
     * secretmanagerProjectsSecretsVersionsAccess - Accesses a SecretVersion. This call returns the secret data. `projects/* /secrets/* /versions/latest` is an alias to the most recently created SecretVersion.
    **/
    secretmanagerProjectsSecretsVersionsAccess(req: operations.SecretmanagerProjectsSecretsVersionsAccessRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsAccessResponse>;
    /**
     * secretmanagerProjectsSecretsVersionsDestroy - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
    **/
    secretmanagerProjectsSecretsVersionsDestroy(req: operations.SecretmanagerProjectsSecretsVersionsDestroyRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsDestroyResponse>;
    /**
     * secretmanagerProjectsSecretsVersionsDisable - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
    **/
    secretmanagerProjectsSecretsVersionsDisable(req: operations.SecretmanagerProjectsSecretsVersionsDisableRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsDisableResponse>;
    /**
     * secretmanagerProjectsSecretsVersionsEnable - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
    **/
    secretmanagerProjectsSecretsVersionsEnable(req: operations.SecretmanagerProjectsSecretsVersionsEnableRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsEnableResponse>;
    /**
     * secretmanagerProjectsSecretsVersionsGet - Gets metadata for a SecretVersion. `projects/* /secrets/* /versions/latest` is an alias to the most recently created SecretVersion.
    **/
    secretmanagerProjectsSecretsVersionsGet(req: operations.SecretmanagerProjectsSecretsVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsGetResponse>;
    /**
     * secretmanagerProjectsSecretsVersionsList - Lists SecretVersions. This call does not return secret data.
    **/
    secretmanagerProjectsSecretsVersionsList(req: operations.SecretmanagerProjectsSecretsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsListResponse>;
}
