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
    
req = operations.NotebooksProjectsLocationsEnvironmentsCreateRequest(
    security=operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.NotebooksProjectsLocationsEnvironmentsCreatePathParams(
        parent="tempora",
    ),
    query_params=operations.NotebooksProjectsLocationsEnvironmentsCreateQueryParams(
        dollar_xgafv="2",
        access_token="ipsum",
        alt="media",
        callback="fugiat",
        environment_id="magnam",
        fields="porro",
        key="eos",
        oauth_token="consequatur",
        pretty_print=False,
        quota_user="laudantium",
        upload_type="officia",
        upload_protocol="quidem",
    ),
    request=shared.EnvironmentInput(
        container_image=shared.ContainerImage(
            repository="voluptatem",
            tag="nesciunt",
        ),
        description="provident",
        display_name="perferendis",
        post_startup_script="suscipit",
        vm_image=shared.VMImage(
            image_family="sunt",
            image_name="aut",
            project="non",
        ),
    ),
)
    
res = s.projects.notebooks_projects_locations_environments_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `notebooks_projects_locations_environments_create` - Creates a new Environment.
* `notebooks_projects_locations_environments_list` - Lists environments in a project.
* `notebooks_projects_locations_executions_create` - Creates a new Execution in a given project and location.
* `notebooks_projects_locations_executions_list` - Lists executions in a given project and location
* `notebooks_projects_locations_instances_create` - Creates a new Instance in a given project and location.
* `notebooks_projects_locations_instances_get_instance_health` - Check if a notebook instance is healthy.
* `notebooks_projects_locations_instances_is_upgradeable` - Check if a notebook instance is upgradable.
* `notebooks_projects_locations_instances_list` - Lists instances in a given project and location.
* `notebooks_projects_locations_instances_register` - Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
* `notebooks_projects_locations_instances_report` - Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
* `notebooks_projects_locations_instances_rollback` - Rollbacks a notebook instance to the previous version.
* `notebooks_projects_locations_instances_set_accelerator` - Updates the guest accelerators of a single Instance.
* `notebooks_projects_locations_instances_set_labels` - Replaces all the labels of an Instance.
* `notebooks_projects_locations_instances_set_machine_type` - Updates the machine type of a single Instance.
* `notebooks_projects_locations_instances_update_config` - Update Notebook Instance configurations.
* `notebooks_projects_locations_instances_update_metadata_items` - Add/update metadata items for an instance.
* `notebooks_projects_locations_instances_update_shielded_instance_config` - Updates the Shielded instance configuration of a single Instance.
* `notebooks_projects_locations_instances_upgrade_internal` - Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
* `notebooks_projects_locations_list` - Lists information about the supported locations for this service.
* `notebooks_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `notebooks_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `notebooks_projects_locations_runtimes_create` - Creates a new Runtime in a given project and location.
* `notebooks_projects_locations_runtimes_diagnose` - Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
* `notebooks_projects_locations_runtimes_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `notebooks_projects_locations_runtimes_list` - Lists Runtimes in a given project and location.
* `notebooks_projects_locations_runtimes_patch` - Update Notebook Runtime configuration.
* `notebooks_projects_locations_runtimes_refresh_runtime_token_internal` - Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
* `notebooks_projects_locations_runtimes_report_event` - Report and process a runtime event.
* `notebooks_projects_locations_runtimes_reset` - Resets a Managed Notebook Runtime.
* `notebooks_projects_locations_runtimes_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `notebooks_projects_locations_runtimes_start` - Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* `notebooks_projects_locations_runtimes_stop` - Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* `notebooks_projects_locations_runtimes_switch` - Switch a Managed Notebook Runtime.
* `notebooks_projects_locations_runtimes_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `notebooks_projects_locations_runtimes_upgrade` - Upgrades a Managed Notebook Runtime to the latest version.
* `notebooks_projects_locations_schedules_create` - Creates a new Scheduled Notebook in a given project and location.
* `notebooks_projects_locations_schedules_delete` - Deletes schedule and all underlying jobs
* `notebooks_projects_locations_schedules_get` - Gets details of schedule
* `notebooks_projects_locations_schedules_list` - Lists schedules in a given project and location.
* `notebooks_projects_locations_schedules_trigger` - Triggers execution of an existing schedule.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
