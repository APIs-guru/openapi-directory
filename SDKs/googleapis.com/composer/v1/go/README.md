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
    
    req := operations.ComposerProjectsLocationsEnvironmentsCreateRequest{
        Security: operations.ComposerProjectsLocationsEnvironmentsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ComposerProjectsLocationsEnvironmentsCreatePathParams{
            Parent: "corporis",
        },
        QueryParams: operations.ComposerProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "consequatur",
            Alt: "media",
            Callback: "tempora",
            Fields: "in",
            Key: "sed",
            OauthToken: "dolor",
            PrettyPrint: true,
            QuotaUser: "assumenda",
            UploadType: "est",
            UploadProtocol: "consequatur",
        },
        Request: &shared.EnvironmentInput{
            Config: &shared.EnvironmentConfigInput{
                AirflowURI: "ipsa",
                DagGcsPrefix: "ut",
                DatabaseConfig: &shared.DatabaseConfig{
                    MachineType: "iure",
                },
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKeyName: "dicta",
                },
                EnvironmentSize: "ENVIRONMENT_SIZE_UNSPECIFIED",
                GkeCluster: "voluptatem",
                MaintenanceWindow: &shared.MaintenanceWindow{
                    EndTime: "sit",
                    Recurrence: "qui",
                    StartTime: "autem",
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: "fugiat",
                            DisplayName: "eligendi",
                        },
                        shared.CidrBlock{
                            CidrBlock: "quia",
                            DisplayName: "neque",
                        },
                    },
                    Enabled: true,
                },
                NodeConfig: &shared.NodeConfig{
                    DiskSizeGb: 4168920819476378105,
                    EnableIPMasqAgent: true,
                    IPAllocationPolicy: &shared.IPAllocationPolicy{
                        ClusterIpv4CidrBlock: "aut",
                        ClusterSecondaryRangeName: "sit",
                        ServicesIpv4CidrBlock: "in",
                        ServicesSecondaryRangeName: "sunt",
                        UseIPAliases: true,
                    },
                    Location: "ullam",
                    MachineType: "consequuntur",
                    Network: "aperiam",
                    OauthScopes: []string{
                        "repellendus",
                        "natus",
                        "consectetur",
                    },
                    ServiceAccount: "unde",
                    Subnetwork: "ut",
                    Tags: []string{
                        "ut",
                        "qui",
                        "aspernatur",
                    },
                },
                NodeCount: 2279341170733245843,
                PrivateEnvironmentConfig: &shared.PrivateEnvironmentConfigInput{
                    CloudComposerConnectionSubnetwork: "quas",
                    CloudComposerNetworkIpv4CidrBlock: "distinctio",
                    CloudSQLIpv4CidrBlock: "saepe",
                    EnablePrivateEnvironment: true,
                    EnablePrivatelyUsedPublicIps: false,
                    NetworkingConfig: &shared.NetworkingConfig{
                        ConnectionType: "CONNECTION_TYPE_UNSPECIFIED",
                    },
                    PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                        EnablePrivateEndpoint: false,
                        MasterIpv4CidrBlock: "nesciunt",
                    },
                    WebServerIpv4CidrBlock: "rem",
                },
                SoftwareConfig: &shared.SoftwareConfig{
                    AirflowConfigOverrides: map[string]string{
                        "ratione": "placeat",
                        "quam": "odit",
                        "voluptate": "ipsum",
                    },
                    EnvVariables: map[string]string{
                        "pariatur": "dicta",
                        "nulla": "tenetur",
                    },
                    ImageVersion: "et",
                    PypiPackages: map[string]string{
                        "ut": "modi",
                        "consequuntur": "ducimus",
                        "molestiae": "voluptas",
                    },
                    PythonVersion: "facilis",
                    SchedulerCount: 2867322181936390622,
                },
                WebServerConfig: &shared.WebServerConfig{
                    MachineType: "modi",
                },
                WebServerNetworkAccessControl: &shared.WebServerNetworkAccessControl{
                    AllowedIPRanges: []shared.AllowedIPRange{
                        shared.AllowedIPRange{
                            Description: "quasi",
                            Value: "necessitatibus",
                        },
                    },
                },
                WorkloadsConfig: &shared.WorkloadsConfig{
                    Scheduler: &shared.SchedulerResource{
                        Count: 3406083734481139106,
                        CPU: 7.100000,
                        MemoryGb: 34.099998,
                        StorageGb: 50.099998,
                    },
                    WebServer: &shared.WebServerResource{
                        CPU: 80.099998,
                        MemoryGb: 75.099998,
                        StorageGb: 88.199997,
                    },
                    Worker: &shared.WorkerResource{
                        CPU: 3.200000,
                        MaxCount: 8764901745431848692,
                        MemoryGb: 61.099998,
                        MinCount: 3415318281050260438,
                        StorageGb: 35.200001,
                    },
                },
            },
            CreateTime: "dolores",
            Labels: map[string]string{
                "tempora": "aliquam",
                "in": "iusto",
            },
            Name: "reiciendis",
            State: "CREATING",
            UpdateTime: "laudantium",
            UUID: "quae",
        },
    }
    
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsCreate(ctx, req)
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

* `ComposerProjectsLocationsEnvironmentsCreate` - Create a new environment.
* `ComposerProjectsLocationsEnvironmentsList` - List environments.
* `ComposerProjectsLocationsEnvironmentsPatch` - Update an environment.
* `ComposerProjectsLocationsImageVersionsList` - List ImageVersions for provided location.
* `ComposerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `ComposerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `ComposerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
