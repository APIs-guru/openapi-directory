# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GkehubProjectsLocationsFeaturesCreateRequest{
        Security: operations.GkehubProjectsLocationsFeaturesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GkehubProjectsLocationsFeaturesCreatePathParams{
            Parent: "enim",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "magni",
            Alt: "proto",
            Callback: "id",
            FeatureID: "dolor",
            Fields: "id",
            Key: "ea",
            OauthToken: "error",
            PrettyPrint: false,
            QuotaUser: "similique",
            RequestID: "quo",
            UploadType: "est",
            UploadProtocol: "tenetur",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "quas": "ea",
                "facere": "excepturi",
                "iusto": "corporis",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "blanditiis": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "temporibus",
                                HTTPSProxy: "veniam",
                                PolicyDir: "itaque",
                                SecretType: "sed",
                                SyncBranch: "sint",
                                SyncRepo: "nihil",
                                SyncRev: "cumque",
                                SyncWaitSecs: "sed",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "aut",
                                PolicyDir: "ut",
                                SecretType: "sit",
                                SyncRepo: "aut",
                                SyncWaitSecs: "odit",
                            },
                            PreventDrift: false,
                            SourceFormat: "voluptatibus",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: true,
                            Enabled: true,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "velit",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "itaque",
                                "id",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "rerum",
                    },
                    Fleetobservability: map[string]interface{}{
                        "nostrum": "ex",
                        "sint": "ex",
                        "atque": "eos",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "molestiae",
                                    ClientSecret: "impedit",
                                    KubectlRedirectURI: "accusantium",
                                    Tenant: "libero",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "quo",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "natus",
                                    ClientID: "deserunt",
                                    ClientSecret: "amet",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "sit",
                                    GroupPrefix: "reiciendis",
                                    GroupsClaim: "sint",
                                    IssuerURI: "et",
                                    KubectlRedirectURI: "unde",
                                    Scopes: "aut",
                                    UserClaim: "molestiae",
                                    UserPrefix: "tempore",
                                },
                                Proxy: "quia",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "dolorem",
                                    ClientSecret: "voluptas",
                                    KubectlRedirectURI: "omnis",
                                    Tenant: "nulla",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "ab",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "aut",
                                    ClientID: "natus",
                                    ClientSecret: "ipsum",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "voluptatibus",
                                    GroupPrefix: "sequi",
                                    GroupsClaim: "voluptatem",
                                    IssuerURI: "et",
                                    KubectlRedirectURI: "id",
                                    Scopes: "impedit",
                                    UserClaim: "et",
                                    UserPrefix: "rerum",
                                },
                                Proxy: "consequuntur",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "fugit",
                                    ClientSecret: "aut",
                                    KubectlRedirectURI: "maxime",
                                    Tenant: "in",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "sit",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "non",
                                    ClientID: "delectus",
                                    ClientSecret: "et",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "minima",
                                    GroupPrefix: "accusantium",
                                    GroupsClaim: "ut",
                                    IssuerURI: "assumenda",
                                    KubectlRedirectURI: "saepe",
                                    Scopes: "provident",
                                    UserClaim: "delectus",
                                    UserPrefix: "unde",
                                },
                                Proxy: "similique",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "MANUAL",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                },
                "expedita": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "sint",
                                HTTPSProxy: "rerum",
                                PolicyDir: "maiores",
                                SecretType: "et",
                                SyncBranch: "sit",
                                SyncRepo: "veniam",
                                SyncRev: "ipsum",
                                SyncWaitSecs: "qui",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "aut",
                                PolicyDir: "sunt",
                                SecretType: "aperiam",
                                SyncRepo: "numquam",
                                SyncWaitSecs: "veritatis",
                            },
                            PreventDrift: false,
                            SourceFormat: "vero",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: true,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "qui",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "dolor",
                                "et",
                                "velit",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "facere",
                    },
                    Fleetobservability: map[string]interface{}{
                        "ad": "quis",
                        "iure": "neque",
                        "quis": "aspernatur",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "temporibus",
                                    ClientSecret: "culpa",
                                    KubectlRedirectURI: "soluta",
                                    Tenant: "dolor",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "eveniet",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "qui",
                                    ClientID: "ut",
                                    ClientSecret: "et",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "voluptatum",
                                    GroupPrefix: "assumenda",
                                    GroupsClaim: "porro",
                                    IssuerURI: "consequatur",
                                    KubectlRedirectURI: "est",
                                    Scopes: "quasi",
                                    UserClaim: "quaerat",
                                    UserPrefix: "sint",
                                },
                                Proxy: "eveniet",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "dolor",
                                    ClientSecret: "ratione",
                                    KubectlRedirectURI: "sed",
                                    Tenant: "voluptatum",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "aut",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "ut",
                                    ClientID: "voluptatem",
                                    ClientSecret: "voluptas",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "quia",
                                    GroupPrefix: "unde",
                                    GroupsClaim: "maiores",
                                    IssuerURI: "qui",
                                    KubectlRedirectURI: "et",
                                    Scopes: "est",
                                    UserClaim: "vel",
                                    UserPrefix: "deserunt",
                                },
                                Proxy: "necessitatibus",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "voluptatem",
                                    ClientSecret: "vel",
                                    KubectlRedirectURI: "facilis",
                                    Tenant: "aut",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "sequi",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "tempora",
                                    ClientID: "id",
                                    ClientSecret: "eveniet",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "quam",
                                    GroupPrefix: "perspiciatis",
                                    GroupsClaim: "saepe",
                                    IssuerURI: "et",
                                    KubectlRedirectURI: "consequatur",
                                    Scopes: "sunt",
                                    UserClaim: "vero",
                                    UserPrefix: "aut",
                                },
                                Proxy: "consequatur",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_MANUAL",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "SERVICE_UPDATING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "voluptatem": map[string]interface{}{
                    "et": "quia",
                    "nam": "veritatis",
                    "ad": "dolores",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Appdevexperience: map[string]interface{}{
                    "animi": "dicta",
                },
                Fleetobservability: map[string]interface{}{
                    "et": "in",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    ConfigMembership: "repellendus",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "UNKNOWN",
                        Description: "repudiandae",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "iste": "maxime",
                    "earum": "repudiandae",
                    "facere": "rerum",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "dolorum",
                    UpdateTime: "ab",
                },
            },
        },
    }
    
    res, err := s.Projects.GkehubProjectsLocationsFeaturesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `GkehubProjectsLocationsFeaturesCreate` - Adds a new Feature.
* `GkehubProjectsLocationsFeaturesList` - Lists Features in a given project and location.
* `GkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `GkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `GkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `GkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `GkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `GkehubProjectsLocationsMembershipsPatch` - Updates an existing Membership.
* `GkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `GkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `GkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `GkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `GkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `GkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
