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
            Parent: "distinctio",
        },
        QueryParams: operations.RedisProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "corporis",
            Alt: "media",
            Callback: "necessitatibus",
            Fields: "commodi",
            InstanceID: "nulla",
            Key: "quo",
            OauthToken: "aperiam",
            PrettyPrint: false,
            QuotaUser: "quasi",
            UploadType: "similique",
            UploadProtocol: "quod",
        },
        Request: &shared.InstanceInput{
            AlternativeLocationID: "et",
            AuthEnabled: false,
            AuthorizedNetwork: "est",
            ConnectMode: "PRIVATE_SERVICE_ACCESS",
            CustomerManagedKey: "et",
            DisplayName: "occaecati",
            Labels: map[string]string{
                "numquam": "quo",
                "dolor": "aspernatur",
                "officiis": "quo",
            },
            LocationID: "at",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "inventore",
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "DAY_OF_WEEK_UNSPECIFIED",
                        StartTime: &shared.TimeOfDay{
                            Hours: 4589677787592018309,
                            Minutes: 4871412941294140056,
                            Nanos: 4695694551733737161,
                            Seconds: 1737807491654169512,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "SUNDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 6597343676242190148,
                            Minutes: 2077057246974141476,
                            Nanos: 6789962086798724761,
                            Seconds: 5773450730765709866,
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: true,
            },
            MemorySizeGb: 4466320768410931399,
            Name: "nobis",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "DISABLED",
                RdbSnapshotPeriod: "SIX_HOURS",
                RdbSnapshotStartTime: "distinctio",
            },
            ReadReplicasMode: "READ_REPLICAS_MODE_UNSPECIFIED",
            RedisConfigs: map[string]string{
                "voluptates": "dolores",
            },
            RedisVersion: "veniam",
            ReplicaCount: 6344519173458084389,
            ReservedIPRange: "quo",
            SecondaryIPRange: "adipisci",
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                "SUSPENSION_REASON_UNSPECIFIED",
                "SUSPENSION_REASON_UNSPECIFIED",
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

* `RedisProjectsLocationsInstancesCreate` - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
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
