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
     * identitytoolkitProjectsIdentityPlatformInitializeAuth - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
    **/
    identitytoolkitProjectsIdentityPlatformInitializeAuth(req: operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse>;
    /**
     * identitytoolkitProjectsTenantsCreate - Create a tenant. Requires write permission on the Agent project.
    **/
    identitytoolkitProjectsTenantsCreate(req: operations.IdentitytoolkitProjectsTenantsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsCreateResponse>;
    /**
     * identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate - Create a default supported Idp configuration for an Identity Toolkit project.
    **/
    identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate(req: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse>;
    /**
     * identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList - List all default supported Idp configurations for an Identity Toolkit project.
    **/
    identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList(req: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse>;
    /**
     * identitytoolkitProjectsTenantsGetIamPolicy - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
    **/
    identitytoolkitProjectsTenantsGetIamPolicy(req: operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse>;
    /**
     * identitytoolkitProjectsTenantsInboundSamlConfigsCreate - Create an inbound SAML configuration for an Identity Toolkit project.
    **/
    identitytoolkitProjectsTenantsInboundSamlConfigsCreate(req: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse>;
    /**
     * identitytoolkitProjectsTenantsInboundSamlConfigsList - List all inbound SAML configurations for an Identity Toolkit project.
    **/
    identitytoolkitProjectsTenantsInboundSamlConfigsList(req: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse>;
    /**
     * identitytoolkitProjectsTenantsList - List tenants under the given agent project. Requires read permission on the Agent project.
    **/
    identitytoolkitProjectsTenantsList(req: operations.IdentitytoolkitProjectsTenantsListRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsListResponse>;
    /**
     * identitytoolkitProjectsTenantsOauthIdpConfigsCreate - Create an Oidc Idp configuration for an Identity Toolkit project.
    **/
    identitytoolkitProjectsTenantsOauthIdpConfigsCreate(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse>;
    /**
     * identitytoolkitProjectsTenantsOauthIdpConfigsDelete - Delete an Oidc Idp configuration for an Identity Toolkit project.
    **/
    identitytoolkitProjectsTenantsOauthIdpConfigsDelete(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse>;
    /**
     * identitytoolkitProjectsTenantsOauthIdpConfigsGet - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
    **/
    identitytoolkitProjectsTenantsOauthIdpConfigsGet(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse>;
    /**
     * identitytoolkitProjectsTenantsOauthIdpConfigsList - List all Oidc Idp configurations for an Identity Toolkit project.
    **/
    identitytoolkitProjectsTenantsOauthIdpConfigsList(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse>;
    /**
     * identitytoolkitProjectsTenantsOauthIdpConfigsPatch - Update an Oidc Idp configuration for an Identity Toolkit project.
    **/
    identitytoolkitProjectsTenantsOauthIdpConfigsPatch(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse>;
    /**
     * identitytoolkitProjectsTenantsSetIamPolicy - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
    **/
    identitytoolkitProjectsTenantsSetIamPolicy(req: operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse>;
    /**
     * identitytoolkitProjectsTenantsTestIamPermissions - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
    **/
    identitytoolkitProjectsTenantsTestIamPermissions(req: operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse>;
}
