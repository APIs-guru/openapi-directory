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
    
req = operations.ServiceusageOperationsListRequest(
    security=operations.ServiceusageOperationsListSecurity(
        option1=operations.ServiceusageOperationsListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    query_params=operations.ServiceusageOperationsListQueryParams(
        dollar_xgafv="2",
        access_token="iure",
        alt="json",
        callback="dolorem",
        fields="dolor",
        filter="numquam",
        key="id",
        name="nemo",
        oauth_token="quo",
        page_size=5700698267652515148,
        page_token="voluptatibus",
        pretty_print=False,
        quota_user="enim",
        upload_type="ea",
        upload_protocol="commodi",
    ),
)
    
res = s.operations.serviceusage_operations_list(req)

if res.list_operations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `serviceusage_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### services

* `serviceusage_services_batch_enable` - Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
* `serviceusage_services_consumer_quota_metrics_import_admin_overrides` - Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `serviceusage_services_consumer_quota_metrics_import_consumer_overrides` - Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `serviceusage_services_consumer_quota_metrics_limits_admin_overrides_create` - Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
* `serviceusage_services_consumer_quota_metrics_limits_admin_overrides_list` - Lists all admin overrides on this limit.
* `serviceusage_services_consumer_quota_metrics_limits_consumer_overrides_create` - Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
* `serviceusage_services_consumer_quota_metrics_limits_consumer_overrides_delete` - Deletes a consumer override.
* `serviceusage_services_consumer_quota_metrics_limits_consumer_overrides_list` - Lists all consumer overrides on this limit.
* `serviceusage_services_consumer_quota_metrics_limits_consumer_overrides_patch` - Updates a consumer override.
* `serviceusage_services_consumer_quota_metrics_limits_get` - Retrieves a summary of quota information for a specific quota limit.
* `serviceusage_services_consumer_quota_metrics_list` - Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
* `serviceusage_services_disable` - Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
* `serviceusage_services_enable` - Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
* `serviceusage_services_generate_service_identity` - Generates service identity for service.
* `serviceusage_services_list` - Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
