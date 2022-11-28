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
            Parent: "rerum",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "delectus",
            Alt: "json",
            Callback: "assumenda",
            FeatureID: "fugiat",
            Fields: "sed",
            Key: "aperiam",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "rerum",
            RequestID: "eum",
            UploadType: "rerum",
            UploadProtocol: "et",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "et": "fugiat",
                "nihil": "laboriosam",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "aut": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "officiis",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "minima",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: true,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "aut",
                                HTTPSProxy: "incidunt",
                                PolicyDir: "voluptatem",
                                SecretType: "in",
                                SyncBranch: "ut",
                                SyncRepo: "hic",
                                SyncRev: "molestiae",
                                SyncWaitSecs: "omnis",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "quibusdam",
                                PolicyDir: "ut",
                                SecretType: "numquam",
                                SyncRepo: "aperiam",
                                SyncWaitSecs: "eligendi",
                            },
                            PreventDrift: false,
                            SourceFormat: "ipsam",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: true,
                            Enabled: true,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "aspernatur",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "vel",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "recusandae",
                    },
                    Fleetobservability: map[string]interface{}{
                        "ullam": "id",
                        "mollitia": "illo",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "et",
                                    ClientSecret: "sed",
                                    KubectlRedirectURI: "nihil",
                                    Tenant: "sed",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "rerum",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "natus",
                                    ClientID: "excepturi",
                                    ClientSecret: "molestiae",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "ex",
                                    GroupPrefix: "quis",
                                    GroupsClaim: "et",
                                    IssuerURI: "laudantium",
                                    KubectlRedirectURI: "optio",
                                    Scopes: "quae",
                                    UserClaim: "nulla",
                                    UserPrefix: "tempore",
                                },
                                Proxy: "voluptatem",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "quis",
                                    ClientSecret: "atque",
                                    KubectlRedirectURI: "velit",
                                    Tenant: "ut",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "dolorem",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "magnam",
                                    ClientID: "praesentium",
                                    ClientSecret: "esse",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "totam",
                                    GroupPrefix: "hic",
                                    GroupsClaim: "porro",
                                    IssuerURI: "accusantium",
                                    KubectlRedirectURI: "illum",
                                    Scopes: "est",
                                    UserClaim: "deserunt",
                                    UserPrefix: "at",
                                },
                                Proxy: "magnam",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "MANUAL",
                        DefaultChannel: "STABLE",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "excepturi",
                            ExemptableNamespaces: []string{
                                "fuga",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: true,
                            },
                        },
                        Version: "sed",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                },
                "ipsum": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: false,
                        Version: "autem",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "incidunt",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "dolorum",
                                HTTPSProxy: "sit",
                                PolicyDir: "tempore",
                                SecretType: "et",
                                SyncBranch: "ut",
                                SyncRepo: "quis",
                                SyncRev: "officiis",
                                SyncWaitSecs: "qui",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "suscipit",
                                PolicyDir: "eos",
                                SecretType: "ut",
                                SyncRepo: "maxime",
                                SyncWaitSecs: "aut",
                            },
                            PreventDrift: true,
                            SourceFormat: "aspernatur",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: true,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "voluptatem",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "illo",
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
                        Version: "repudiandae",
                    },
                    Fleetobservability: map[string]interface{}{
                        "aspernatur": "est",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "eaque",
                                    ClientSecret: "earum",
                                    KubectlRedirectURI: "et",
                                    Tenant: "facere",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "quam",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "alias",
                                    ClientID: "et",
                                    ClientSecret: "saepe",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "quasi",
                                    GroupPrefix: "autem",
                                    GroupsClaim: "dolorum",
                                    IssuerURI: "dolorem",
                                    KubectlRedirectURI: "fugit",
                                    Scopes: "voluptates",
                                    UserClaim: "aut",
                                    UserPrefix: "amet",
                                },
                                Proxy: "est",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "RAPID",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "inventore",
                            ExemptableNamespaces: []string{
                                "voluptatem",
                                "molestiae",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "excepturi",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                    },
                },
                "necessitatibus": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: true,
                        Version: "vitae",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "SECURITY_POLICY_UNSPECIFIED",
                        Version: "explicabo",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: true,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "repellendus",
                                HTTPSProxy: "ad",
                                PolicyDir: "corrupti",
                                SecretType: "doloribus",
                                SyncBranch: "et",
                                SyncRepo: "sint",
                                SyncRev: "ullam",
                                SyncWaitSecs: "ea",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "expedita",
                                PolicyDir: "ratione",
                                SecretType: "qui",
                                SyncRepo: "totam",
                                SyncWaitSecs: "ut",
                            },
                            PreventDrift: false,
                            SourceFormat: "consequatur",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: true,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "vero",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "beatae",
                                "aut",
                                "dolorem",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "enim",
                    },
                    Fleetobservability: map[string]interface{}{
                        "quia": "quisquam",
                        "est": "aliquam",
                        "dolores": "ea",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "reprehenderit",
                                    ClientSecret: "molestiae",
                                    KubectlRedirectURI: "dolorum",
                                    Tenant: "incidunt",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "quis",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "qui",
                                    ClientID: "temporibus",
                                    ClientSecret: "natus",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "facere",
                                    GroupPrefix: "in",
                                    GroupsClaim: "nisi",
                                    IssuerURI: "dolores",
                                    KubectlRedirectURI: "voluptatem",
                                    Scopes: "optio",
                                    UserClaim: "eos",
                                    UserPrefix: "tenetur",
                                },
                                Proxy: "libero",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "CHANNEL_UNSPECIFIED",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "earum",
                            ExemptableNamespaces: []string{
                                "provident",
                                "eligendi",
                            },
                            InstallSpec: "INSTALL_SPEC_UNSPECIFIED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "similique",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "DISABLED",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "DISABLING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "expedita": map[string]interface{}{
                    "harum": "ratione",
                },
                "in": map[string]interface{}{
                    "ad": "ullam",
                    "placeat": "repellat",
                    "eius": "ducimus",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: true,
                        Version: "laudantium",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "odio": "placeat",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "dolorem",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "quis": "vel",
                    "corrupti": "dolorem",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "BILLING_UNSPECIFIED",
                    ConfigMembership: "eius",
                },
                Workloadcertificate: &shared.FeatureSpec{
                    DefaultConfig: &shared.MembershipSpec{
                        CertificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                    },
                    ProvisionGoogleCa: "DISABLED",
                },
            },
            State: &shared.CommonFeatureState1{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "FAILED",
                        Description: "sed",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "quis": "est",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "natus",
                    UpdateTime: "consequatur",
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
* `GkehubProjectsLocationsFleetsCreate` - Creates a fleet.
* `GkehubProjectsLocationsFleetsList` - Returns all fleets within an organization or a project that the caller has access to.
* `GkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `GkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `GkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `GkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `GkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `GkehubProjectsLocationsMembershipsListAdmin` - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* `GkehubProjectsLocationsMembershipsPatch` - Updates an existing Membership.
* `GkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `GkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `GkehubProjectsLocationsMembershipsValidateCreate` - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
* `GkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `GkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `GkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `GkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
