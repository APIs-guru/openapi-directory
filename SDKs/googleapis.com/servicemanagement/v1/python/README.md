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
    
req = operations.ServicemanagementOperationsGetRequest(
    security=operations.ServicemanagementOperationsGetSecurity(
        option1=operations.ServicemanagementOperationsGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.ServicemanagementOperationsGetPathParams(
        name="neque",
    ),
    query_params=operations.ServicemanagementOperationsGetQueryParams(
        dollar_xgafv="2",
        access_token="qui",
        alt="json",
        callback="expedita",
        fields="nobis",
        key="illo",
        oauth_token="laborum",
        pretty_print=True,
        quota_user="non",
        upload_type="quis",
        upload_protocol="sint",
    ),
)
    
res = s.operations.servicemanagement_operations_get(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `servicemanagement_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `servicemanagement_operations_list` - Lists service operations that match the specified filter in the request.

### services

* `servicemanagement_services_configs_create` - Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.
* `servicemanagement_services_configs_get` - Gets a service configuration (version) for a managed service.
* `servicemanagement_services_configs_list` - Lists the history of the service configuration for a managed service, from the newest to the oldest.
* `servicemanagement_services_configs_submit` - Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation
* `servicemanagement_services_consumers_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `servicemanagement_services_consumers_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `servicemanagement_services_consumers_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `servicemanagement_services_create` - Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation
* `servicemanagement_services_delete` - Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation
* `servicemanagement_services_generate_config_report` - Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
* `servicemanagement_services_get` - Gets a managed service. Authentication is required unless the service is public.
* `servicemanagement_services_get_config` - Gets a service configuration (version) for a managed service.
* `servicemanagement_services_list` - Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.
* `servicemanagement_services_rollouts_create` - Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation
* `servicemanagement_services_rollouts_get` - Gets a service configuration rollout.
* `servicemanagement_services_rollouts_list` - Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
* `servicemanagement_services_undelete` - Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
