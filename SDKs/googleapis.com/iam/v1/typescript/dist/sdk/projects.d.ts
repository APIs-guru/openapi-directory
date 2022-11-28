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
     * iamProjectsLocationsWorkloadIdentityPoolsCreate - Creates a new WorkloadIdentityPool. You cannot reuse the name of a deleted pool until 30 days after deletion.
    **/
    iamProjectsLocationsWorkloadIdentityPoolsCreate(req: operations.IamProjectsLocationsWorkloadIdentityPoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsLocationsWorkloadIdentityPoolsCreateResponse>;
    /**
     * iamProjectsLocationsWorkloadIdentityPoolsList - Lists all non-deleted WorkloadIdentityPools in a project. If `show_deleted` is set to `true`, then deleted pools are also listed.
    **/
    iamProjectsLocationsWorkloadIdentityPoolsList(req: operations.IamProjectsLocationsWorkloadIdentityPoolsListRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsLocationsWorkloadIdentityPoolsListResponse>;
    /**
     * iamProjectsLocationsWorkloadIdentityPoolsProvidersCreate - Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool. You cannot reuse the name of a deleted provider until 30 days after deletion.
    **/
    iamProjectsLocationsWorkloadIdentityPoolsProvidersCreate(req: operations.IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse>;
    /**
     * iamProjectsLocationsWorkloadIdentityPoolsProvidersList - Lists all non-deleted WorkloadIdentityPoolProviders in a WorkloadIdentityPool. If `show_deleted` is set to `true`, then deleted providers are also listed.
    **/
    iamProjectsLocationsWorkloadIdentityPoolsProvidersList(req: operations.IamProjectsLocationsWorkloadIdentityPoolsProvidersListRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsLocationsWorkloadIdentityPoolsProvidersListResponse>;
    /**
     * iamProjectsRolesCreate - Creates a new custom Role.
    **/
    iamProjectsRolesCreate(req: operations.IamProjectsRolesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsRolesCreateResponse>;
    /**
     * iamProjectsRolesList - Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
    **/
    iamProjectsRolesList(req: operations.IamProjectsRolesListRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsRolesListResponse>;
    /**
     * iamProjectsServiceAccountsCreate - Creates a ServiceAccount.
    **/
    iamProjectsServiceAccountsCreate(req: operations.IamProjectsServiceAccountsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsCreateResponse>;
    /**
     * iamProjectsServiceAccountsGetIamPolicy - Gets the IAM policy that is attached to a ServiceAccount. This IAM policy specifies which principals have access to the service account. This method does not tell you whether the service account has been granted any roles on other resources. To check whether a service account has role grants on a resource, use the `getIamPolicy` method for that resource. For example, to view the role grants for a project, call the Resource Manager API's [`projects.getIamPolicy`](https://cloud.google.com/resource-manager/reference/rest/v1/projects/getIamPolicy) method.
    **/
    iamProjectsServiceAccountsGetIamPolicy(req: operations.IamProjectsServiceAccountsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsGetIamPolicyResponse>;
    /**
     * iamProjectsServiceAccountsKeysCreate - Creates a ServiceAccountKey.
    **/
    iamProjectsServiceAccountsKeysCreate(req: operations.IamProjectsServiceAccountsKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsKeysCreateResponse>;
    /**
     * iamProjectsServiceAccountsKeysDelete - Deletes a ServiceAccountKey. Deleting a service account key does not revoke short-lived credentials that have been issued based on the service account key.
    **/
    iamProjectsServiceAccountsKeysDelete(req: operations.IamProjectsServiceAccountsKeysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsKeysDeleteResponse>;
    /**
     * iamProjectsServiceAccountsKeysDisable - Disable a ServiceAccountKey. A disabled service account key can be re-enabled with EnableServiceAccountKey.
    **/
    iamProjectsServiceAccountsKeysDisable(req: operations.IamProjectsServiceAccountsKeysDisableRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsKeysDisableResponse>;
    /**
     * iamProjectsServiceAccountsKeysEnable - Enable a ServiceAccountKey.
    **/
    iamProjectsServiceAccountsKeysEnable(req: operations.IamProjectsServiceAccountsKeysEnableRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsKeysEnableResponse>;
    /**
     * iamProjectsServiceAccountsKeysList - Lists every ServiceAccountKey for a service account.
    **/
    iamProjectsServiceAccountsKeysList(req: operations.IamProjectsServiceAccountsKeysListRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsKeysListResponse>;
    /**
     * iamProjectsServiceAccountsKeysUpload - Uploads the public key portion of a key pair that you manage, and associates the public key with a ServiceAccount. After you upload the public key, you can use the private key from the key pair as a service account key.
    **/
    iamProjectsServiceAccountsKeysUpload(req: operations.IamProjectsServiceAccountsKeysUploadRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsKeysUploadResponse>;
    /**
     * iamProjectsServiceAccountsList - Lists every ServiceAccount that belongs to a specific project.
    **/
    iamProjectsServiceAccountsList(req: operations.IamProjectsServiceAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsListResponse>;
    /**
     * iamProjectsServiceAccountsPatch - Patches a ServiceAccount.
    **/
    iamProjectsServiceAccountsPatch(req: operations.IamProjectsServiceAccountsPatchRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsPatchResponse>;
    /**
     * iamProjectsServiceAccountsSetIamPolicy - Sets the IAM policy that is attached to a ServiceAccount. Use this method to grant or revoke access to the service account. For example, you could grant a principal the ability to impersonate the service account. This method does not enable the service account to access other resources. To grant roles to a service account on a resource, follow these steps: 1. Call the resource's `getIamPolicy` method to get its current IAM policy. 2. Edit the policy so that it binds the service account to an IAM role for the resource. 3. Call the resource's `setIamPolicy` method to update its IAM policy. For detailed instructions, see [Manage access to project, folders, and organizations](https://cloud.google.com/iam/help/service-accounts/granting-access-to-service-accounts) or [Manage access to other resources](https://cloud.google.com/iam/help/access/manage-other-resources).
    **/
    iamProjectsServiceAccountsSetIamPolicy(req: operations.IamProjectsServiceAccountsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsSetIamPolicyResponse>;
    /**
     * iamProjectsServiceAccountsSignBlob - **Note:** This method is deprecated. Use the [`signBlob`](https://cloud.google.com/iam/help/rest-credentials/v1/projects.serviceAccounts/signBlob) method in the IAM Service Account Credentials API instead. If you currently use this method, see the [migration guide](https://cloud.google.com/iam/help/credentials/migrate-api) for instructions. Signs a blob using the system-managed private key for a ServiceAccount.
    **/
    iamProjectsServiceAccountsSignBlob(req: operations.IamProjectsServiceAccountsSignBlobRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsSignBlobResponse>;
    /**
     * iamProjectsServiceAccountsSignJwt - **Note:** This method is deprecated. Use the [`signJwt`](https://cloud.google.com/iam/help/rest-credentials/v1/projects.serviceAccounts/signJwt) method in the IAM Service Account Credentials API instead. If you currently use this method, see the [migration guide](https://cloud.google.com/iam/help/credentials/migrate-api) for instructions. Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount.
    **/
    iamProjectsServiceAccountsSignJwt(req: operations.IamProjectsServiceAccountsSignJwtRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsSignJwtResponse>;
    /**
     * iamProjectsServiceAccountsTestIamPermissions - Tests whether the caller has the specified permissions on a ServiceAccount.
    **/
    iamProjectsServiceAccountsTestIamPermissions(req: operations.IamProjectsServiceAccountsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsTestIamPermissionsResponse>;
    /**
     * iamProjectsServiceAccountsUndelete - Restores a deleted ServiceAccount. **Important:** It is not always possible to restore a deleted service account. Use this method only as a last resort. After you delete a service account, IAM permanently removes the service account 30 days later. There is no way to restore a deleted service account that has been permanently removed.
    **/
    iamProjectsServiceAccountsUndelete(req: operations.IamProjectsServiceAccountsUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsUndeleteResponse>;
    /**
     * iamProjectsServiceAccountsUpdate - **Note:** We are in the process of deprecating this method. Use PatchServiceAccount instead. Updates a ServiceAccount. You can update only the `display_name` field.
    **/
    iamProjectsServiceAccountsUpdate(req: operations.IamProjectsServiceAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IamProjectsServiceAccountsUpdateResponse>;
}
