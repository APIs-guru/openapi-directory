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
    
    req := operations.DatafusionProjectsLocationsInstancesCreateRequest{
        Security: operations.DatafusionProjectsLocationsInstancesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatafusionProjectsLocationsInstancesCreatePathParams{
            Parent: "velit",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "nostrum",
            Alt: "media",
            Callback: "veritatis",
            Fields: "quis",
            InstanceID: "quidem",
            Key: "ratione",
            OauthToken: "sed",
            PrettyPrint: false,
            QuotaUser: "enim",
            UploadType: "natus",
            UploadProtocol: "repudiandae",
        },
        Request: &shared.InstanceInput{
            Accelerators: []shared.Accelerator{
                shared.Accelerator{
                    AcceleratorType: "CCAI_INSIGHTS",
                    State: "STATE_UNSPECIFIED",
                },
                shared.Accelerator{
                    AcceleratorType: "CCAI_INSIGHTS",
                    State: "ENABLED",
                },
            },
            AvailableVersion: []shared.Version{
                shared.Version{
                    AvailableFeatures: []string{
                        "sed",
                    },
                    DefaultVersion: true,
                    Type: "TYPE_UNSPECIFIED",
                    VersionNumber: "est",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "dolores",
                        "officia",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_PREVIEW",
                    VersionNumber: "aut",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "iure",
                        "voluptatem",
                        "modi",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_UNSPECIFIED",
                    VersionNumber: "totam",
                },
            },
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "ea",
            },
            DataprocServiceAccount: "nisi",
            Description: "dicta",
            DisplayName: "provident",
            EnableRbac: false,
            EnableStackdriverLogging: false,
            EnableStackdriverMonitoring: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: true,
                Topic: "mollitia",
            },
            Labels: map[string]string{
                "perferendis": "voluptatem",
                "et": "asperiores",
                "reprehenderit": "sequi",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "at",
                Network: "ea",
            },
            Options: map[string]string{
                "facere": "veritatis",
            },
            PrivateInstance: true,
            Type: "TYPE_UNSPECIFIED",
            Version: "nostrum",
            Zone: "minus",
        },
    }
    
    res, err := s.Projects.DatafusionProjectsLocationsInstancesCreate(ctx, req)
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

* `DatafusionProjectsLocationsInstancesCreate` - Creates a new Data Fusion instance in the specified project and location.
* `DatafusionProjectsLocationsInstancesDNSPeeringsCreate` - Creates DNS peering on the given resource.
* `DatafusionProjectsLocationsInstancesDNSPeeringsList` - Lists DNS peerings for a given resource.
* `DatafusionProjectsLocationsInstancesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DatafusionProjectsLocationsInstancesList` - Lists Data Fusion instances in the specified project and location.
* `DatafusionProjectsLocationsInstancesPatch` - Updates a single Data Fusion instance.
* `DatafusionProjectsLocationsInstancesRestart` - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* `DatafusionProjectsLocationsInstancesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `DatafusionProjectsLocationsInstancesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DatafusionProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatafusionProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatafusionProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `DatafusionProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DatafusionProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `DatafusionProjectsLocationsVersionsList` - Lists possible versions for Data Fusion instances in the specified project and location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
