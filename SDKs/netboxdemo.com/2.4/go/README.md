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
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Bearer: shared.SchemeBearer{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    res, err := s.Sdk.CircuitsChoicesList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CircuitsChoicesList`
* `CircuitsChoicesRead`
* `CircuitsCircuitTerminationsCreate`
* `CircuitsCircuitTerminationsDelete`
* `CircuitsCircuitTerminationsList`
* `CircuitsCircuitTerminationsPartialUpdate`
* `CircuitsCircuitTerminationsRead`
* `CircuitsCircuitTerminationsUpdate`
* `CircuitsCircuitTypesCreate`
* `CircuitsCircuitTypesDelete`
* `CircuitsCircuitTypesList`
* `CircuitsCircuitTypesPartialUpdate`
* `CircuitsCircuitTypesRead`
* `CircuitsCircuitTypesUpdate`
* `CircuitsCircuitsCreate`
* `CircuitsCircuitsDelete`
* `CircuitsCircuitsList`
* `CircuitsCircuitsPartialUpdate`
* `CircuitsCircuitsRead`
* `CircuitsCircuitsUpdate`
* `CircuitsProvidersCreate`
* `CircuitsProvidersDelete`
* `CircuitsProvidersGraphs` - A convenience method for rendering graphs for a particular provider.
* `CircuitsProvidersList`
* `CircuitsProvidersPartialUpdate`
* `CircuitsProvidersRead`
* `CircuitsProvidersUpdate`
* `DcimChoicesList`
* `DcimChoicesRead`
* `DcimConnectedDeviceList` - This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
via a protocol such as LLDP. Two query parameters must be included in the request:

* `peer_device`: The name of the peer device
* `peer_interface`: The name of the peer interface
* `DcimConsoleConnectionsList`
* `DcimConsolePortTemplatesCreate`
* `DcimConsolePortTemplatesDelete`
* `DcimConsolePortTemplatesList`
* `DcimConsolePortTemplatesPartialUpdate`
* `DcimConsolePortTemplatesRead`
* `DcimConsolePortTemplatesUpdate`
* `DcimConsolePortsCreate`
* `DcimConsolePortsDelete`
* `DcimConsolePortsList`
* `DcimConsolePortsPartialUpdate`
* `DcimConsolePortsRead`
* `DcimConsolePortsUpdate`
* `DcimConsoleServerPortTemplatesCreate`
* `DcimConsoleServerPortTemplatesDelete`
* `DcimConsoleServerPortTemplatesList`
* `DcimConsoleServerPortTemplatesPartialUpdate`
* `DcimConsoleServerPortTemplatesRead`
* `DcimConsoleServerPortTemplatesUpdate`
* `DcimConsoleServerPortsCreate`
* `DcimConsoleServerPortsDelete`
* `DcimConsoleServerPortsList`
* `DcimConsoleServerPortsPartialUpdate`
* `DcimConsoleServerPortsRead`
* `DcimConsoleServerPortsUpdate`
* `DcimDeviceBayTemplatesCreate`
* `DcimDeviceBayTemplatesDelete`
* `DcimDeviceBayTemplatesList`
* `DcimDeviceBayTemplatesPartialUpdate`
* `DcimDeviceBayTemplatesRead`
* `DcimDeviceBayTemplatesUpdate`
* `DcimDeviceBaysCreate`
* `DcimDeviceBaysDelete`
* `DcimDeviceBaysList`
* `DcimDeviceBaysPartialUpdate`
* `DcimDeviceBaysRead`
* `DcimDeviceBaysUpdate`
* `DcimDeviceRolesCreate`
* `DcimDeviceRolesDelete`
* `DcimDeviceRolesList`
* `DcimDeviceRolesPartialUpdate`
* `DcimDeviceRolesRead`
* `DcimDeviceRolesUpdate`
* `DcimDeviceTypesCreate`
* `DcimDeviceTypesDelete`
* `DcimDeviceTypesList`
* `DcimDeviceTypesPartialUpdate`
* `DcimDeviceTypesRead`
* `DcimDeviceTypesUpdate`
* `DcimDevicesCreate`
* `DcimDevicesDelete`
* `DcimDevicesList`
* `DcimDevicesNapalm` - Execute a NAPALM method on a Device
* `DcimDevicesPartialUpdate`
* `DcimDevicesRead`
* `DcimDevicesUpdate`
* `DcimInterfaceConnectionsCreate`
* `DcimInterfaceConnectionsDelete`
* `DcimInterfaceConnectionsList`
* `DcimInterfaceConnectionsPartialUpdate`
* `DcimInterfaceConnectionsRead`
* `DcimInterfaceConnectionsUpdate`
* `DcimInterfaceTemplatesCreate`
* `DcimInterfaceTemplatesDelete`
* `DcimInterfaceTemplatesList`
* `DcimInterfaceTemplatesPartialUpdate`
* `DcimInterfaceTemplatesRead`
* `DcimInterfaceTemplatesUpdate`
* `DcimInterfacesCreate`
* `DcimInterfacesDelete`
* `DcimInterfacesGraphs` - A convenience method for rendering graphs for a particular interface.
* `DcimInterfacesList`
* `DcimInterfacesPartialUpdate`
* `DcimInterfacesRead`
* `DcimInterfacesUpdate`
* `DcimInventoryItemsCreate`
* `DcimInventoryItemsDelete`
* `DcimInventoryItemsList`
* `DcimInventoryItemsPartialUpdate`
* `DcimInventoryItemsRead`
* `DcimInventoryItemsUpdate`
* `DcimManufacturersCreate`
* `DcimManufacturersDelete`
* `DcimManufacturersList`
* `DcimManufacturersPartialUpdate`
* `DcimManufacturersRead`
* `DcimManufacturersUpdate`
* `DcimPlatformsCreate`
* `DcimPlatformsDelete`
* `DcimPlatformsList`
* `DcimPlatformsPartialUpdate`
* `DcimPlatformsRead`
* `DcimPlatformsUpdate`
* `DcimPowerConnectionsList`
* `DcimPowerOutletTemplatesCreate`
* `DcimPowerOutletTemplatesDelete`
* `DcimPowerOutletTemplatesList`
* `DcimPowerOutletTemplatesPartialUpdate`
* `DcimPowerOutletTemplatesRead`
* `DcimPowerOutletTemplatesUpdate`
* `DcimPowerOutletsCreate`
* `DcimPowerOutletsDelete`
* `DcimPowerOutletsList`
* `DcimPowerOutletsPartialUpdate`
* `DcimPowerOutletsRead`
* `DcimPowerOutletsUpdate`
* `DcimPowerPortTemplatesCreate`
* `DcimPowerPortTemplatesDelete`
* `DcimPowerPortTemplatesList`
* `DcimPowerPortTemplatesPartialUpdate`
* `DcimPowerPortTemplatesRead`
* `DcimPowerPortTemplatesUpdate`
* `DcimPowerPortsCreate`
* `DcimPowerPortsDelete`
* `DcimPowerPortsList`
* `DcimPowerPortsPartialUpdate`
* `DcimPowerPortsRead`
* `DcimPowerPortsUpdate`
* `DcimRackGroupsCreate`
* `DcimRackGroupsDelete`
* `DcimRackGroupsList`
* `DcimRackGroupsPartialUpdate`
* `DcimRackGroupsRead`
* `DcimRackGroupsUpdate`
* `DcimRackReservationsCreate`
* `DcimRackReservationsDelete`
* `DcimRackReservationsList`
* `DcimRackReservationsPartialUpdate`
* `DcimRackReservationsRead`
* `DcimRackReservationsUpdate`
* `DcimRackRolesCreate`
* `DcimRackRolesDelete`
* `DcimRackRolesList`
* `DcimRackRolesPartialUpdate`
* `DcimRackRolesRead`
* `DcimRackRolesUpdate`
* `DcimRacksCreate`
* `DcimRacksDelete`
* `DcimRacksList`
* `DcimRacksPartialUpdate`
* `DcimRacksRead`
* `DcimRacksUnits` - List rack units (by rack)
* `DcimRacksUpdate`
* `DcimRegionsCreate`
* `DcimRegionsDelete`
* `DcimRegionsList`
* `DcimRegionsPartialUpdate`
* `DcimRegionsRead`
* `DcimRegionsUpdate`
* `DcimSitesCreate`
* `DcimSitesDelete`
* `DcimSitesGraphs` - A convenience method for rendering graphs for a particular site.
* `DcimSitesList`
* `DcimSitesPartialUpdate`
* `DcimSitesRead`
* `DcimSitesUpdate`
* `DcimVirtualChassisCreate`
* `DcimVirtualChassisDelete`
* `DcimVirtualChassisList`
* `DcimVirtualChassisPartialUpdate`
* `DcimVirtualChassisRead`
* `DcimVirtualChassisUpdate`
* `ExtrasChoicesList`
* `ExtrasChoicesRead`
* `ExtrasConfigContextsCreate`
* `ExtrasConfigContextsDelete`
* `ExtrasConfigContextsList`
* `ExtrasConfigContextsPartialUpdate`
* `ExtrasConfigContextsRead`
* `ExtrasConfigContextsUpdate`
* `ExtrasExportTemplatesCreate`
* `ExtrasExportTemplatesDelete`
* `ExtrasExportTemplatesList`
* `ExtrasExportTemplatesPartialUpdate`
* `ExtrasExportTemplatesRead`
* `ExtrasExportTemplatesUpdate`
* `ExtrasGraphsCreate`
* `ExtrasGraphsDelete`
* `ExtrasGraphsList`
* `ExtrasGraphsPartialUpdate`
* `ExtrasGraphsRead`
* `ExtrasGraphsUpdate`
* `ExtrasImageAttachmentsCreate`
* `ExtrasImageAttachmentsDelete`
* `ExtrasImageAttachmentsList`
* `ExtrasImageAttachmentsPartialUpdate`
* `ExtrasImageAttachmentsRead`
* `ExtrasImageAttachmentsUpdate`
* `ExtrasObjectChangesList` - Retrieve a list of recent changes.
* `ExtrasObjectChangesRead` - Retrieve a list of recent changes.
* `ExtrasRecentActivityList`
* `ExtrasRecentActivityRead`
* `ExtrasTagsCreate`
* `ExtrasTagsDelete`
* `ExtrasTagsList`
* `ExtrasTagsPartialUpdate`
* `ExtrasTagsRead`
* `ExtrasTagsUpdate`
* `ExtrasTopologyMapsCreate`
* `ExtrasTopologyMapsDelete`
* `ExtrasTopologyMapsList`
* `ExtrasTopologyMapsPartialUpdate`
* `ExtrasTopologyMapsRead`
* `ExtrasTopologyMapsRender`
* `ExtrasTopologyMapsUpdate`
* `IpamChoicesList`
* `IpamChoicesRead`
* `IpamAggregatesCreate`
* `IpamAggregatesDelete`
* `IpamAggregatesList`
* `IpamAggregatesPartialUpdate`
* `IpamAggregatesRead`
* `IpamAggregatesUpdate`
* `IpamIPAddressesCreate`
* `IpamIPAddressesDelete`
* `IpamIPAddressesList`
* `IpamIPAddressesPartialUpdate`
* `IpamIPAddressesRead`
* `IpamIPAddressesUpdate`
* `IpamPrefixesAvailableIpsCreate` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.
* `IpamPrefixesAvailableIpsRead` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.
* `IpamPrefixesAvailablePrefixesCreate` - A convenience method for returning available child prefixes within a parent.
* `IpamPrefixesAvailablePrefixesRead` - A convenience method for returning available child prefixes within a parent.
* `IpamPrefixesCreate`
* `IpamPrefixesDelete`
* `IpamPrefixesList`
* `IpamPrefixesPartialUpdate`
* `IpamPrefixesRead`
* `IpamPrefixesUpdate`
* `IpamRirsCreate`
* `IpamRirsDelete`
* `IpamRirsList`
* `IpamRirsPartialUpdate`
* `IpamRirsRead`
* `IpamRirsUpdate`
* `IpamRolesCreate`
* `IpamRolesDelete`
* `IpamRolesList`
* `IpamRolesPartialUpdate`
* `IpamRolesRead`
* `IpamRolesUpdate`
* `IpamServicesCreate`
* `IpamServicesDelete`
* `IpamServicesList`
* `IpamServicesPartialUpdate`
* `IpamServicesRead`
* `IpamServicesUpdate`
* `IpamVlanGroupsCreate`
* `IpamVlanGroupsDelete`
* `IpamVlanGroupsList`
* `IpamVlanGroupsPartialUpdate`
* `IpamVlanGroupsRead`
* `IpamVlanGroupsUpdate`
* `IpamVlansCreate`
* `IpamVlansDelete`
* `IpamVlansList`
* `IpamVlansPartialUpdate`
* `IpamVlansRead`
* `IpamVlansUpdate`
* `IpamVrfsCreate`
* `IpamVrfsDelete`
* `IpamVrfsList`
* `IpamVrfsPartialUpdate`
* `IpamVrfsRead`
* `IpamVrfsUpdate`
* `SecretsChoicesList`
* `SecretsChoicesRead`
* `SecretsGenerateRsaKeyPairList` - This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.

    {
        "public_key": "<public key>",
        "private_key": "<private key>"
    }
* `SecretsGetSessionKeyCreate` - Retrieve a temporary session key to use for encrypting and decrypting secrets via the API. The user's private RSA
key is POSTed with the name `private_key`. An example:

    curl -v -X POST -H "Authorization: Token <token>" -H "Accept: application/json; indent=4" \
    --data-urlencode "private_key@<filename>" https://netbox/api/secrets/get-session-key/

This request will yield a base64-encoded session key to be included in an `X-Session-Key` header in future requests:

    {
        "session_key": "+8t4SI6XikgVmB5+/urhozx9O5qCQANyOk1MNe6taRf="
    }

This endpoint accepts one optional parameter: `preserve_key`. If True and a session key exists, the existing session
key will be returned instead of a new one.
* `SecretsSecretRolesCreate`
* `SecretsSecretRolesDelete`
* `SecretsSecretRolesList`
* `SecretsSecretRolesPartialUpdate`
* `SecretsSecretRolesRead`
* `SecretsSecretRolesUpdate`
* `SecretsSecretsCreate`
* `SecretsSecretsDelete`
* `SecretsSecretsList`
* `SecretsSecretsPartialUpdate`
* `SecretsSecretsRead`
* `SecretsSecretsUpdate`
* `TenancyChoicesList`
* `TenancyChoicesRead`
* `TenancyTenantGroupsCreate`
* `TenancyTenantGroupsDelete`
* `TenancyTenantGroupsList`
* `TenancyTenantGroupsPartialUpdate`
* `TenancyTenantGroupsRead`
* `TenancyTenantGroupsUpdate`
* `TenancyTenantsCreate`
* `TenancyTenantsDelete`
* `TenancyTenantsList`
* `TenancyTenantsPartialUpdate`
* `TenancyTenantsRead`
* `TenancyTenantsUpdate`
* `VirtualizationChoicesList`
* `VirtualizationChoicesRead`
* `VirtualizationClusterGroupsCreate`
* `VirtualizationClusterGroupsDelete`
* `VirtualizationClusterGroupsList`
* `VirtualizationClusterGroupsPartialUpdate`
* `VirtualizationClusterGroupsRead`
* `VirtualizationClusterGroupsUpdate`
* `VirtualizationClusterTypesCreate`
* `VirtualizationClusterTypesDelete`
* `VirtualizationClusterTypesList`
* `VirtualizationClusterTypesPartialUpdate`
* `VirtualizationClusterTypesRead`
* `VirtualizationClusterTypesUpdate`
* `VirtualizationClustersCreate`
* `VirtualizationClustersDelete`
* `VirtualizationClustersList`
* `VirtualizationClustersPartialUpdate`
* `VirtualizationClustersRead`
* `VirtualizationClustersUpdate`
* `VirtualizationInterfacesCreate`
* `VirtualizationInterfacesDelete`
* `VirtualizationInterfacesList`
* `VirtualizationInterfacesPartialUpdate`
* `VirtualizationInterfacesRead`
* `VirtualizationInterfacesUpdate`
* `VirtualizationVirtualMachinesCreate`
* `VirtualizationVirtualMachinesDelete`
* `VirtualizationVirtualMachinesList`
* `VirtualizationVirtualMachinesPartialUpdate`
* `VirtualizationVirtualMachinesRead`
* `VirtualizationVirtualMachinesUpdate`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
