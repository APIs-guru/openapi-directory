# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest(
    security=operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams(
        parent="odio",
    ),
    query_params=operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams(
        dollar_xgafv="2",
        access_token="optio",
        alt="media",
        callback="quisquam",
        fields="vitae",
        filter="possimus",
        key="accusantium",
        oauth_token="autem",
        page_size=6952103479490399094,
        page_token="modi",
        pretty_print=False,
        quota_user="nihil",
        upload_type="soluta",
        upload_protocol="magnam",
    ),
)
    
res = s.projects.osconfig_projects_locations_instance_os_policies_compliances_list(req)

if res.list_instance_os_policies_compliances_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `osconfig_projects_locations_instance_os_policies_compliances_list` - List OS policies compliance data for all Compute Engine VM instances in the specified zone.
* `osconfig_projects_locations_instances_inventories_list` - List inventory data for all VM instances in the specified zone.
* `osconfig_projects_locations_instances_os_policy_assignments_reports_list` - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* `osconfig_projects_locations_instances_vulnerability_reports_list` - List vulnerability reports for all VM instances in the specified zone.
* `osconfig_projects_locations_os_policy_assignments_create` - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* `osconfig_projects_locations_os_policy_assignments_delete` - Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* `osconfig_projects_locations_os_policy_assignments_list` - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* `osconfig_projects_locations_os_policy_assignments_list_revisions` - List the OS policy assignment revisions for a given OS policy assignment.
* `osconfig_projects_locations_os_policy_assignments_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `osconfig_projects_locations_os_policy_assignments_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `osconfig_projects_locations_os_policy_assignments_patch` - Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
