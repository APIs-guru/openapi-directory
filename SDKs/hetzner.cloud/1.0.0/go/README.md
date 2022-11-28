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
    
    req := operations.GetActionsRequest{
        QueryParams: operations.GetActionsQueryParams{
            ID: 3204866814910134817,
            Sort: "finished",
            Status: "running",
        },
    }
    
    res, err := s.Actions.GetActions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Actions

* `GetActions` - Get all Actions
* `GetActionsID` - Get an Action

### Certificate Actions

* `GetCertificatesIDActions` - Get all Actions for a Certificate
* `GetCertificatesIDActionsActionID` - Get an Action for a Certificate
* `PostCertificatesIDActionsRetry` - Retry Issuance or Renewal

### Certificates

* `DeleteCertificatesID` - Delete a Certificate
* `GetCertificates` - Get all Certificates
* `GetCertificatesID` - Get a Certificate
* `PostCertificates` - Create a Certificate
* `PutCertificatesID` - Update a Certificate

### Datacenters

* `GetDatacenters` - Get all Datacenters
* `GetDatacentersID` - Get a Datacenter

### Firewall Actions

* `GetFirewallsIDActions` - Get all Actions for a Firewall
* `GetFirewallsIDActionsActionID` - Get an Action for a Firewall
* `PostFirewallsIDActionsApplyToResources` - Apply to Resources
* `PostFirewallsIDActionsRemoveFromResources` - Remove from Resources
* `PostFirewallsIDActionsSetRules` - Set Rules

### Firewalls

* `DeleteFirewallsID` - Delete a Firewall
* `GetFirewalls` - Get all Firewalls
* `GetFirewallsID` - Get a Firewall
* `PostFirewalls` - Create a Firewall
* `PutFirewallsID` - Update a Firewall

### Floating IP Actions

* `GetFloatingIpsIDActions` - Get all Actions for a Floating IP
* `GetFloatingIpsIDActionsActionID` - Get an Action for a Floating IP
* `PostFloatingIpsIDActionsAssign` - Assign a Floating IP to a Server
* `PostFloatingIpsIDActionsChangeDNSPtr` - Change reverse DNS entry for a Floating IP
* `PostFloatingIpsIDActionsChangeProtection` - Change Floating IP Protection
* `PostFloatingIpsIDActionsUnassign` - Unassign a Floating IP

### Floating IPs

* `DeleteFloatingIpsID` - Delete a Floating IP
* `GetFloatingIps` - Get all Floating IPs
* `GetFloatingIpsID` - Get a Floating IP
* `PostFloatingIps` - Create a Floating IP
* `PutFloatingIpsID` - Update a Floating IP

### ISOs

* `GetIsos` - Get all ISOs
* `GetIsosID` - Get an ISO

### Image Actions

* `GetImagesIDActions` - Get all Actions for an Image
* `GetImagesIDActionsActionID` - Get an Action for an Image
* `PostImagesIDActionsChangeProtection` - Change Image Protection

### Images

* `DeleteImagesID` - Delete an Image
* `GetImages` - Get all Images
* `GetImagesID` - Get an Image
* `PutImagesID` - Update an Image

### Load Balancer Actions

* `GetLoadBalancersIDActions` - Get all Actions for a Load Balancer
* `GetLoadBalancersIDActionsActionID` - Get an Action for a Load Balancer
* `PostLoadBalancersIDActionsAddService` - Add Service
* `PostLoadBalancersIDActionsAddTarget` - Add Target
* `PostLoadBalancersIDActionsAttachToNetwork` - Attach a Load Balancer to a Network
* `PostLoadBalancersIDActionsChangeAlgorithm` - Change Algorithm
* `PostLoadBalancersIDActionsChangeDNSPtr` - Change reverse DNS entry for this Load Balancer
* `PostLoadBalancersIDActionsChangeProtection` - Change Load Balancer Protection
* `PostLoadBalancersIDActionsChangeType` - Change the Type of a Load Balancer
* `PostLoadBalancersIDActionsDeleteService` - Delete Service
* `PostLoadBalancersIDActionsDetachFromNetwork` - Detach a Load Balancer from a Network
* `PostLoadBalancersIDActionsDisablePublicInterface` - Disable the public interface of a Load Balancer
* `PostLoadBalancersIDActionsEnablePublicInterface` - Enable the public interface of a Load Balancer
* `PostLoadBalancersIDActionsRemoveTarget` - Remove Target
* `PostLoadBalancersIDActionsUpdateService` - Update Service

### Load Balancer Types

* `GetLoadBalancerTypes` - Get all Load Balancer Types
* `GetLoadBalancerTypesID` - Get a Load Balancer Type

### Load Balancers

* `DeleteLoadBalancersID` - Delete a Load Balancer
* `GetLoadBalancers` - Get all Load Balancers
* `GetLoadBalancersID` - Get a Load Balancer
* `GetLoadBalancersIDMetrics` - Get Metrics for a LoadBalancer
* `PostLoadBalancers` - Create a Load Balancer
* `PutLoadBalancersID` - Update a Load Balancer

### Locations

* `GetLocations` - Get all Locations
* `GetLocationsID` - Get a Location

### Network Actions

* `GetNetworksIDActions` - Get all Actions for a Network
* `GetNetworksIDActionsActionID` - Get an Action for a Network
* `PostNetworksIDActionsAddRoute` - Add a route to a Network
* `PostNetworksIDActionsAddSubnet` - Add a subnet to a Network
* `PostNetworksIDActionsChangeIPRange` - Change IP range of a Network
* `PostNetworksIDActionsChangeProtection` - Change Network Protection
* `PostNetworksIDActionsDeleteRoute` - Delete a route from a Network
* `PostNetworksIDActionsDeleteSubnet` - Delete a subnet from a Network

### Networks

* `DeleteNetworksID` - Delete a Network
* `GetNetworks` - Get all Networks
* `GetNetworksID` - Get a Network
* `PostNetworks` - Create a Network
* `PutNetworksID` - Update a Network

### Placement Groups

* `DeletePlacementGroupsID` - Delete a PlacementGroup
* `GetPlacementGroups` - Get all PlacementGroups
* `GetPlacementGroupsID` - Get a PlacementGroup
* `PostPlacementGroups` - Create a PlacementGroup
* `PutPlacementGroupsID` - Update a PlacementGroup

### Pricing

* `GetPricing` - Get all prices

### SSH Keys

* `DeleteSSHKeysID` - Delete an SSH key
* `GetSSHKeys` - Get all SSH keys
* `GetSSHKeysID` - Get a SSH key
* `PostSSHKeys` - Create an SSH key
* `PutSSHKeysID` - Update an SSH key

### Server Actions

* `GetServersIDActions` - Get all Actions for a Server
* `GetServersIDActionsActionID` - Get an Action for a Server
* `PostServersIDActionsAddToPlacementGroup` - Add a Server to a Placement Group
* `PostServersIDActionsAttachIso` - Attach an ISO to a Server
* `PostServersIDActionsAttachToNetwork` - Attach a Server to a Network
* `PostServersIDActionsChangeAliasIps` - Change alias IPs of a Network
* `PostServersIDActionsChangeDNSPtr` - Change reverse DNS entry for this Server
* `PostServersIDActionsChangeProtection` - Change Server Protection
* `PostServersIDActionsChangeType` - Change the Type of a Server
* `PostServersIDActionsCreateImage` - Create Image from a Server
* `PostServersIDActionsDetachFromNetwork` - Detach a Server from a Network
* `PostServersIDActionsDetachIso` - Detach an ISO from a Server
* `PostServersIDActionsDisableBackup` - Disable Backups for a Server
* `PostServersIDActionsDisableRescue` - Disable Rescue Mode for a Server
* `PostServersIDActionsEnableBackup` - Enable and Configure Backups for a Server
* `PostServersIDActionsEnableRescue` - Enable Rescue Mode for a Server
* `PostServersIDActionsPoweroff` - Power off a Server
* `PostServersIDActionsPoweron` - Power on a Server
* `PostServersIDActionsReboot` - Soft-reboot a Server
* `PostServersIDActionsRebuild` - Rebuild a Server from an Image
* `PostServersIDActionsRemoveFromPlacementGroup` - Remove from Placement Group
* `PostServersIDActionsRequestConsole` - Request Console for a Server
* `PostServersIDActionsReset` - Reset a Server
* `PostServersIDActionsResetPassword` - Reset root Password of a Server
* `PostServersIDActionsShutdown` - Shutdown a Server

### Server Types

* `GetServerTypes` - Get all Server Types
* `GetServerTypesID` - Get a Server Type

### Servers

* `DeleteServersID` - Delete a Server
* `GetServers` - Get all Servers
* `GetServersID` - Get a Server
* `GetServersIDMetrics` - Get Metrics for a Server
* `PostServers` - Create a Server
* `PutServersID` - Update a Server

### Volume Actions

* `GetVolumesIDActions` - Get all Actions for a Volume
* `GetVolumesIDActionsActionID` - Get an Action for a Volume
* `PostVolumesIDActionsAttach` - Attach Volume to a Server
* `PostVolumesIDActionsChangeProtection` - Change Volume Protection
* `PostVolumesIDActionsDetach` - Detach Volume
* `PostVolumesIDActionsResize` - Resize Volume

### Volumes

* `DeleteVolumesID` - Delete a Volume
* `GetVolumes` - Get all Volumes
* `GetVolumesID` - Get a Volume
* `PostVolumes` - Create a Volume
* `PutVolumesID` - Update a Volume

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
