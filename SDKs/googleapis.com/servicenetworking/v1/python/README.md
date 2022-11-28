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
    
req = operations.ServicenetworkingOperationsCancelRequest(
    security=operations.ServicenetworkingOperationsCancelSecurity(
        option1=operations.ServicenetworkingOperationsCancelSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.ServicenetworkingOperationsCancelPathParams(
        name="quis",
    ),
    query_params=operations.ServicenetworkingOperationsCancelQueryParams(
        dollar_xgafv="2",
        access_token="sunt",
        alt="proto",
        callback="praesentium",
        fields="voluptatem",
        key="consequatur",
        oauth_token="rerum",
        pretty_print=True,
        quota_user="in",
        upload_type="molestiae",
        upload_protocol="sed",
    ),
    request={
        "totam": "culpa",
    },
)
    
res = s.operations.servicenetworking_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `servicenetworking_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### services

* `servicenetworking_services_add_subnetwork` - For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
* `servicenetworking_services_connections_create` - Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.
* `servicenetworking_services_connections_delete_connection` - Deletes a private service access connection.
* `servicenetworking_services_connections_list` - List the private connections that are configured in a service consumer's VPC network.
* `servicenetworking_services_connections_patch` - Updates the allocated ranges that are assigned to a connection.
* `servicenetworking_services_disable_vpc_service_controls` - Disables VPC service controls for a connection.
* `servicenetworking_services_dns_record_sets_add` - Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.
* `servicenetworking_services_dns_record_sets_remove` - Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.
* `servicenetworking_services_dns_record_sets_update` - Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.
* `servicenetworking_services_dns_zones_add` - Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* `servicenetworking_services_dns_zones_remove` - Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* `servicenetworking_services_enable_vpc_service_controls` - Enables VPC service controls for a connection.
* `servicenetworking_services_projects_global_networks_get` - Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* `servicenetworking_services_projects_global_networks_peered_dns_domains_create` - Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.
* `servicenetworking_services_projects_global_networks_peered_dns_domains_delete` - Deletes a peered DNS domain.
* `servicenetworking_services_projects_global_networks_peered_dns_domains_list` - Lists peered DNS domains for a connection.
* `servicenetworking_services_projects_global_networks_update_consumer_config` - Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* `servicenetworking_services_roles_add` - Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.
* `servicenetworking_services_search_range` - Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).
* `servicenetworking_services_validate` - Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
