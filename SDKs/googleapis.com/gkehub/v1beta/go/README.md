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
            Parent: "placeat",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "explicabo",
            Alt: "proto",
            Callback: "qui",
            FeatureID: "aut",
            Fields: "enim",
            Key: "minima",
            OauthToken: "quia",
            PrettyPrint: true,
            QuotaUser: "distinctio",
            RequestID: "non",
            UploadType: "cumque",
            UploadProtocol: "provident",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "ut": "dolor",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "voluptates": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: true,
                        Version: "laudantium",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "dolor",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "ut",
                                HTTPSProxy: "et",
                                PolicyDir: "nisi",
                                SecretType: "quo",
                                SyncBranch: "dolores",
                                SyncRepo: "aut",
                                SyncRev: "et",
                                SyncWaitSecs: "omnis",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "recusandae",
                                PolicyDir: "animi",
                                SecretType: "cumque",
                                SyncRepo: "deserunt",
                                SyncWaitSecs: "sapiente",
                            },
                            PreventDrift: true,
                            SourceFormat: "laborum",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "autem",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "neque",
                                "vel",
                                "dolorem",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "qui",
                    },
                    Fleetobservability: map[string]interface{}{
                        "pariatur": "repellat",
                        "magni": "quas",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "fuga",
                                    ClientSecret: "et",
                                    KubectlRedirectURI: "consequatur",
                                    Tenant: "nemo",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "ab",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "occaecati",
                                    ClientID: "vitae",
                                    ClientSecret: "dolor",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "dicta",
                                    GroupPrefix: "autem",
                                    GroupsClaim: "non",
                                    IssuerURI: "cumque",
                                    KubectlRedirectURI: "id",
                                    Scopes: "quia",
                                    UserClaim: "aut",
                                    UserPrefix: "placeat",
                                },
                                Proxy: "reprehenderit",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "quos",
                                    ClientSecret: "repudiandae",
                                    KubectlRedirectURI: "soluta",
                                    Tenant: "impedit",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "nisi",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "esse",
                                    ClientID: "aut",
                                    ClientSecret: "quia",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "quia",
                                    GroupPrefix: "qui",
                                    GroupsClaim: "voluptatibus",
                                    IssuerURI: "omnis",
                                    KubectlRedirectURI: "excepturi",
                                    Scopes: "ut",
                                    UserClaim: "aperiam",
                                    UserPrefix: "optio",
                                },
                                Proxy: "ducimus",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "cumque",
                                    ClientSecret: "voluptatem",
                                    KubectlRedirectURI: "omnis",
                                    Tenant: "at",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "quia",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "et",
                                    ClientID: "repellendus",
                                    ClientSecret: "eum",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "et",
                                    GroupPrefix: "fugiat",
                                    GroupsClaim: "et",
                                    IssuerURI: "perferendis",
                                    KubectlRedirectURI: "sint",
                                    Scopes: "ut",
                                    UserClaim: "molestiae",
                                    UserPrefix: "praesentium",
                                },
                                Proxy: "et",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "voluptatem",
                            ExemptableNamespaces: []string{
                                "et",
                                "facere",
                                "perferendis",
                            },
                            InstallSpec: "INSTALL_SPEC_UNSPECIFIED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "ad",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "DISABLING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "qui": map[string]interface{}{
                    "nostrum": "ad",
                    "aut": "sed",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: true,
                        Version: "et",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "magnam": "officia",
                    "commodi": "et",
                },
                Fleetobservability: map[string]interface{}{
                    "ipsam": "harum",
                    "eum": "ducimus",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "PAY_AS_YOU_GO",
                    ConfigMembership: "inventore",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "CODE_UNSPECIFIED",
                        Description: "velit",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "mollitia": "ducimus",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "enim",
                    UpdateTime: "illo",
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
* `GkehubProjectsLocationsFeaturesPatch` - Updates an existing Feature.
* `GkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `GkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `GkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `GkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `GkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `GkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `GkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `GkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
