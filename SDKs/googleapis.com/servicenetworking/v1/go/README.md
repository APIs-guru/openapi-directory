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
    
    req := operations.ServicenetworkingOperationsCancelRequest{
        Security: operations.ServicenetworkingOperationsCancelSecurity{
            Option1: &operations.ServicenetworkingOperationsCancelSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.ServicenetworkingOperationsCancelPathParams{
            Name: "quis",
        },
        QueryParams: operations.ServicenetworkingOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "sunt",
            Alt: "proto",
            Callback: "praesentium",
            Fields: "voluptatem",
            Key: "consequatur",
            OauthToken: "rerum",
            PrettyPrint: true,
            QuotaUser: "in",
            UploadType: "molestiae",
            UploadProtocol: "sed",
        },
        Request: map[string]interface{}{
            "totam": "culpa",
        },
    }
    
    res, err := s.Operations.ServicenetworkingOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `ServicenetworkingOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### services

* `ServicenetworkingServicesAddSubnetwork` - For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
* `ServicenetworkingServicesConnectionsCreate` - Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.
* `ServicenetworkingServicesConnectionsDeleteConnection` - Deletes a private service access connection.
* `ServicenetworkingServicesConnectionsList` - List the private connections that are configured in a service consumer's VPC network.
* `ServicenetworkingServicesConnectionsPatch` - Updates the allocated ranges that are assigned to a connection.
* `ServicenetworkingServicesDisableVpcServiceControls` - Disables VPC service controls for a connection.
* `ServicenetworkingServicesDNSRecordSetsAdd` - Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.
* `ServicenetworkingServicesDNSRecordSetsRemove` - Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.
* `ServicenetworkingServicesDNSRecordSetsUpdate` - Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.
* `ServicenetworkingServicesDNSZonesAdd` - Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* `ServicenetworkingServicesDNSZonesRemove` - Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* `ServicenetworkingServicesEnableVpcServiceControls` - Enables VPC service controls for a connection.
* `ServicenetworkingServicesProjectsGlobalNetworksGet` - Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* `ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreate` - Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.
* `ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsDelete` - Deletes a peered DNS domain.
* `ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsList` - Lists peered DNS domains for a connection.
* `ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig` - Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* `ServicenetworkingServicesRolesAdd` - Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.
* `ServicenetworkingServicesSearchRange` - Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).
* `ServicenetworkingServicesValidate` - Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
