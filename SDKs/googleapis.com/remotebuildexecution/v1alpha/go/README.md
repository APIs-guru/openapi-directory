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
    
    req := operations.RemotebuildexecutionProjectsInstancesCreateRequest{
        Security: operations.RemotebuildexecutionProjectsInstancesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RemotebuildexecutionProjectsInstancesCreatePathParams{
            Parent: "totam",
        },
        QueryParams: operations.RemotebuildexecutionProjectsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "ea",
            Alt: "media",
            Callback: "rerum",
            Fields: "consequatur",
            Key: "qui",
            OauthToken: "aut",
            PrettyPrint: true,
            QuotaUser: "exercitationem",
            UploadType: "aut",
            UploadProtocol: "doloremque",
        },
        Request: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest{
            Instance: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance{
                FeaturePolicy: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy{
                    ContainerImageSources: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "totam",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerAddCapabilities: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "vel",
                            "aspernatur",
                        },
                        Policy: "POLICY_UNSPECIFIED",
                    },
                    DockerChrootPath: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "porro",
                            "rerum",
                        },
                        Policy: "FORBIDDEN",
                    },
                    DockerNetwork: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "hic",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerPrivileged: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "quia",
                            "saepe",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerRunAsContainerProvidedUser: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "voluptatem",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerRunAsRoot: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "reiciendis",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerRuntime: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "natus",
                            "earum",
                            "et",
                        },
                        Policy: "POLICY_UNSPECIFIED",
                    },
                    DockerSiblingContainers: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "consequatur",
                            "ut",
                        },
                        Policy: "ALLOWED",
                    },
                    LinuxIsolation: "GVISOR",
                    VMVerification: "VM_VERIFICATION_UNSPECIFIED",
                },
                Location: "numquam",
                LoggingEnabled: true,
                Name: "vel",
                State: "STATE_UNSPECIFIED",
            },
            InstanceID: "voluptatem",
            Parent: "nostrum",
        },
    }
    
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `RemotebuildexecutionProjectsInstancesCreate` - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* `RemotebuildexecutionProjectsInstancesList` - Lists instances in a project.
* `RemotebuildexecutionProjectsInstancesTestNotify` - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsCreate` - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsDelete` - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsList` - Lists worker pools in an instance.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsPatch` - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* `RemotebuildexecutionProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
