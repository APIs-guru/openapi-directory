# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { GetActionsRequest, GetActionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetActionsRequest = {
  queryParams: {
    id: 3204866814910134817,
    sort: "finished",
    status: "running",
  },
};

sdk.actions.getActions(req).then((res: GetActionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Actions

* `getActions` - Get all Actions
* `getActionsId` - Get an Action

### Certificate Actions

* `getCertificatesIdActions` - Get all Actions for a Certificate
* `getCertificatesIdActionsActionId` - Get an Action for a Certificate
* `postCertificatesIdActionsRetry` - Retry Issuance or Renewal

### Certificates

* `deleteCertificatesId` - Delete a Certificate
* `getCertificates` - Get all Certificates
* `getCertificatesId` - Get a Certificate
* `postCertificates` - Create a Certificate
* `putCertificatesId` - Update a Certificate

### Datacenters

* `getDatacenters` - Get all Datacenters
* `getDatacentersId` - Get a Datacenter

### Firewall Actions

* `getFirewallsIdActions` - Get all Actions for a Firewall
* `getFirewallsIdActionsActionId` - Get an Action for a Firewall
* `postFirewallsIdActionsApplyToResources` - Apply to Resources
* `postFirewallsIdActionsRemoveFromResources` - Remove from Resources
* `postFirewallsIdActionsSetRules` - Set Rules

### Firewalls

* `deleteFirewallsId` - Delete a Firewall
* `getFirewalls` - Get all Firewalls
* `getFirewallsId` - Get a Firewall
* `postFirewalls` - Create a Firewall
* `putFirewallsId` - Update a Firewall

### Floating IP Actions

* `getFloatingIpsIdActions` - Get all Actions for a Floating IP
* `getFloatingIpsIdActionsActionId` - Get an Action for a Floating IP
* `postFloatingIpsIdActionsAssign` - Assign a Floating IP to a Server
* `postFloatingIpsIdActionsChangeDnsPtr` - Change reverse DNS entry for a Floating IP
* `postFloatingIpsIdActionsChangeProtection` - Change Floating IP Protection
* `postFloatingIpsIdActionsUnassign` - Unassign a Floating IP

### Floating IPs

* `deleteFloatingIpsId` - Delete a Floating IP
* `getFloatingIps` - Get all Floating IPs
* `getFloatingIpsId` - Get a Floating IP
* `postFloatingIps` - Create a Floating IP
* `putFloatingIpsId` - Update a Floating IP

### ISOs

* `getIsos` - Get all ISOs
* `getIsosId` - Get an ISO

### Image Actions

* `getImagesIdActions` - Get all Actions for an Image
* `getImagesIdActionsActionId` - Get an Action for an Image
* `postImagesIdActionsChangeProtection` - Change Image Protection

### Images

* `deleteImagesId` - Delete an Image
* `getImages` - Get all Images
* `getImagesId` - Get an Image
* `putImagesId` - Update an Image

### Load Balancer Actions

* `getLoadBalancersIdActions` - Get all Actions for a Load Balancer
* `getLoadBalancersIdActionsActionId` - Get an Action for a Load Balancer
* `postLoadBalancersIdActionsAddService` - Add Service
* `postLoadBalancersIdActionsAddTarget` - Add Target
* `postLoadBalancersIdActionsAttachToNetwork` - Attach a Load Balancer to a Network
* `postLoadBalancersIdActionsChangeAlgorithm` - Change Algorithm
* `postLoadBalancersIdActionsChangeDnsPtr` - Change reverse DNS entry for this Load Balancer
* `postLoadBalancersIdActionsChangeProtection` - Change Load Balancer Protection
* `postLoadBalancersIdActionsChangeType` - Change the Type of a Load Balancer
* `postLoadBalancersIdActionsDeleteService` - Delete Service
* `postLoadBalancersIdActionsDetachFromNetwork` - Detach a Load Balancer from a Network
* `postLoadBalancersIdActionsDisablePublicInterface` - Disable the public interface of a Load Balancer
* `postLoadBalancersIdActionsEnablePublicInterface` - Enable the public interface of a Load Balancer
* `postLoadBalancersIdActionsRemoveTarget` - Remove Target
* `postLoadBalancersIdActionsUpdateService` - Update Service

### Load Balancer Types

* `getLoadBalancerTypes` - Get all Load Balancer Types
* `getLoadBalancerTypesId` - Get a Load Balancer Type

### Load Balancers

* `deleteLoadBalancersId` - Delete a Load Balancer
* `getLoadBalancers` - Get all Load Balancers
* `getLoadBalancersId` - Get a Load Balancer
* `getLoadBalancersIdMetrics` - Get Metrics for a LoadBalancer
* `postLoadBalancers` - Create a Load Balancer
* `putLoadBalancersId` - Update a Load Balancer

### Locations

* `getLocations` - Get all Locations
* `getLocationsId` - Get a Location

### Network Actions

* `getNetworksIdActions` - Get all Actions for a Network
* `getNetworksIdActionsActionId` - Get an Action for a Network
* `postNetworksIdActionsAddRoute` - Add a route to a Network
* `postNetworksIdActionsAddSubnet` - Add a subnet to a Network
* `postNetworksIdActionsChangeIpRange` - Change IP range of a Network
* `postNetworksIdActionsChangeProtection` - Change Network Protection
* `postNetworksIdActionsDeleteRoute` - Delete a route from a Network
* `postNetworksIdActionsDeleteSubnet` - Delete a subnet from a Network

### Networks

* `deleteNetworksId` - Delete a Network
* `getNetworks` - Get all Networks
* `getNetworksId` - Get a Network
* `postNetworks` - Create a Network
* `putNetworksId` - Update a Network

### Placement Groups

* `deletePlacementGroupsId` - Delete a PlacementGroup
* `getPlacementGroups` - Get all PlacementGroups
* `getPlacementGroupsId` - Get a PlacementGroup
* `postPlacementGroups` - Create a PlacementGroup
* `putPlacementGroupsId` - Update a PlacementGroup

### Pricing

* `getPricing` - Get all prices

### SSH Keys

* `deleteSshKeysId` - Delete an SSH key
* `getSshKeys` - Get all SSH keys
* `getSshKeysId` - Get a SSH key
* `postSshKeys` - Create an SSH key
* `putSshKeysId` - Update an SSH key

### Server Actions

* `getServersIdActions` - Get all Actions for a Server
* `getServersIdActionsActionId` - Get an Action for a Server
* `postServersIdActionsAddToPlacementGroup` - Add a Server to a Placement Group
* `postServersIdActionsAttachIso` - Attach an ISO to a Server
* `postServersIdActionsAttachToNetwork` - Attach a Server to a Network
* `postServersIdActionsChangeAliasIps` - Change alias IPs of a Network
* `postServersIdActionsChangeDnsPtr` - Change reverse DNS entry for this Server
* `postServersIdActionsChangeProtection` - Change Server Protection
* `postServersIdActionsChangeType` - Change the Type of a Server
* `postServersIdActionsCreateImage` - Create Image from a Server
* `postServersIdActionsDetachFromNetwork` - Detach a Server from a Network
* `postServersIdActionsDetachIso` - Detach an ISO from a Server
* `postServersIdActionsDisableBackup` - Disable Backups for a Server
* `postServersIdActionsDisableRescue` - Disable Rescue Mode for a Server
* `postServersIdActionsEnableBackup` - Enable and Configure Backups for a Server
* `postServersIdActionsEnableRescue` - Enable Rescue Mode for a Server
* `postServersIdActionsPoweroff` - Power off a Server
* `postServersIdActionsPoweron` - Power on a Server
* `postServersIdActionsReboot` - Soft-reboot a Server
* `postServersIdActionsRebuild` - Rebuild a Server from an Image
* `postServersIdActionsRemoveFromPlacementGroup` - Remove from Placement Group
* `postServersIdActionsRequestConsole` - Request Console for a Server
* `postServersIdActionsReset` - Reset a Server
* `postServersIdActionsResetPassword` - Reset root Password of a Server
* `postServersIdActionsShutdown` - Shutdown a Server

### Server Types

* `getServerTypes` - Get all Server Types
* `getServerTypesId` - Get a Server Type

### Servers

* `deleteServersId` - Delete a Server
* `getServers` - Get all Servers
* `getServersId` - Get a Server
* `getServersIdMetrics` - Get Metrics for a Server
* `postServers` - Create a Server
* `putServersId` - Update a Server

### Volume Actions

* `getVolumesIdActions` - Get all Actions for a Volume
* `getVolumesIdActionsActionId` - Get an Action for a Volume
* `postVolumesIdActionsAttach` - Attach Volume to a Server
* `postVolumesIdActionsChangeProtection` - Change Volume Protection
* `postVolumesIdActionsDetach` - Detach Volume
* `postVolumesIdActionsResize` - Resize Volume

### Volumes

* `deleteVolumesId` - Delete a Volume
* `getVolumes` - Get all Volumes
* `getVolumesId` - Get a Volume
* `postVolumes` - Create a Volume
* `putVolumesId` - Update a Volume

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
