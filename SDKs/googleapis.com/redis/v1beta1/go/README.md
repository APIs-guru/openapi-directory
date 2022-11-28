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
    
    req := operations.RedisProjectsLocationsInstancesCreateRequest{
        Security: operations.RedisProjectsLocationsInstancesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RedisProjectsLocationsInstancesCreatePathParams{
            Parent: "laboriosam",
        },
        QueryParams: operations.RedisProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "vero",
            Alt: "media",
            Callback: "minima",
            Fields: "et",
            InstanceID: "qui",
            Key: "aspernatur",
            OauthToken: "repudiandae",
            PrettyPrint: true,
            QuotaUser: "magnam",
            UploadType: "odit",
            UploadProtocol: "ratione",
        },
        Request: &shared.InstanceInput{
            AlternativeLocationID: "tempora",
            AuthEnabled: true,
            AuthorizedNetwork: "autem",
            AvailableMaintenanceVersions: []string{
                "repellat",
                "a",
                "id",
            },
            ConnectMode: "DIRECT_PEERING",
            CustomerManagedKey: "minima",
            DisplayName: "non",
            Labels: map[string]string{
                "deleniti": "est",
            },
            LocationID: "voluptatum",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "et",
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "THURSDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 8447988876140740075,
                            Minutes: 5041146191201319909,
                            Nanos: 5541796795475235323,
                            Seconds: 2996517446438545323,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "SUNDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 5521534650374502695,
                            Minutes: 8981216204834136043,
                            Nanos: 4874886829143815684,
                            Seconds: 4478153492668249776,
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: true,
            },
            MaintenanceVersion: "harum",
            MemorySizeGb: 5129341615647848829,
            Name: "iste",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "PERSISTENCE_MODE_UNSPECIFIED",
                RdbSnapshotPeriod: "SIX_HOURS",
                RdbSnapshotStartTime: "atque",
            },
            ReadReplicasMode: "READ_REPLICAS_MODE_UNSPECIFIED",
            RedisConfigs: map[string]string{
                "mollitia": "pariatur",
                "similique": "minus",
            },
            RedisVersion: "in",
            ReplicaCount: 9035187264571426591,
            ReservedIPRange: "modi",
            SecondaryIPRange: "beatae",
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                "SUSPENSION_REASON_UNSPECIFIED",
                "CUSTOMER_MANAGED_KEY_ISSUE",
            },
            Tier: "TIER_UNSPECIFIED",
            TransitEncryptionMode: "DISABLED",
        },
    }
    
    res, err := s.Projects.RedisProjectsLocationsInstancesCreate(ctx, req)
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

* `RedisProjectsLocationsInstancesCreate` - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. The completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `RedisProjectsLocationsInstancesExport` - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `RedisProjectsLocationsInstancesFailover` - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
* `RedisProjectsLocationsInstancesGetAuthString` - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
* `RedisProjectsLocationsInstancesImport` - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `RedisProjectsLocationsInstancesList` - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
* `RedisProjectsLocationsInstancesPatch` - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `RedisProjectsLocationsInstancesRescheduleMaintenance` - Reschedule maintenance for a given instance in a given project and location.
* `RedisProjectsLocationsInstancesUpgrade` - Upgrades Redis instance to the newer Redis version specified in the request.
* `RedisProjectsLocationsList` - Lists information about the supported locations for this service.
* `RedisProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `RedisProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `RedisProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `RedisProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
