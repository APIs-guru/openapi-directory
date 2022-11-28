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
    
    req := operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest{
        Security: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams{
            Parent: "odio",
        },
        QueryParams: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "optio",
            Alt: "media",
            Callback: "quisquam",
            Fields: "vitae",
            Filter: "possimus",
            Key: "accusantium",
            OauthToken: "autem",
            PageSize: 6952103479490399094,
            PageToken: "modi",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "soluta",
            UploadProtocol: "magnam",
        },
    }
    
    res, err := s.Projects.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstanceOsPoliciesCompliancesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `OsconfigProjectsLocationsInstanceOsPoliciesCompliancesList` - List OS policies compliance data for all Compute Engine VM instances in the specified zone.
* `OsconfigProjectsLocationsInstancesInventoriesList` - List inventory data for all VM instances in the specified zone.
* `OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList` - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* `OsconfigProjectsLocationsInstancesVulnerabilityReportsList` - List vulnerability reports for all VM instances in the specified zone.
* `OsconfigProjectsLocationsOsPolicyAssignmentsCreate` - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* `OsconfigProjectsLocationsOsPolicyAssignmentsDelete` - Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* `OsconfigProjectsLocationsOsPolicyAssignmentsList` - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* `OsconfigProjectsLocationsOsPolicyAssignmentsListRevisions` - List the OS policy assignment revisions for a given OS policy assignment.
* `OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `OsconfigProjectsLocationsOsPolicyAssignmentsPatch` - Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
