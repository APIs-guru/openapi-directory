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
    
    req := operations.CircuitsCircuitTerminationsCreateRequest{
        Request: shared.WritableCircuitTerminationInput{
            Cable: &shared.NestedCableInput{
                Label: "aliquid",
            },
            Circuit: 5396713859516954870,
            ConnectionStatus: true,
            Description: "animi",
            PortSpeed: 5767282679630353800,
            PpInfo: "magni",
            Site: 3444678983313942400,
            TermSide: "A",
            UpstreamSpeed: 2772754371455433371,
            XconnectID: "eveniet",
        },
    }
    
    res, err := s.Sdk.CircuitsCircuitTerminationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CircuitTermination != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CircuitsCircuitTerminationsCreate`
* `CircuitsCircuitTerminationsDelete`
* `CircuitsCircuitTerminationsList` - Call to super to allow for caching
* `CircuitsCircuitTerminationsPartialUpdate`
* `CircuitsCircuitTerminationsRead` - Call to super to allow for caching
* `CircuitsCircuitTerminationsUpdate`
* `CircuitsCircuitTypesCreate`
* `CircuitsCircuitTypesDelete`
* `CircuitsCircuitTypesList` - Call to super to allow for caching
* `CircuitsCircuitTypesPartialUpdate`
* `CircuitsCircuitTypesRead` - Call to super to allow for caching
* `CircuitsCircuitTypesUpdate`
* `CircuitsCircuitsCreate`
* `CircuitsCircuitsDelete`
* `CircuitsCircuitsList` - Call to super to allow for caching
* `CircuitsCircuitsPartialUpdate`
* `CircuitsCircuitsRead` - Call to super to allow for caching
* `CircuitsCircuitsUpdate`
* `CircuitsProvidersCreate`
* `CircuitsProvidersDelete`
* `CircuitsProvidersGraphs` - A convenience method for rendering graphs for a particular provider.
* `CircuitsProvidersList` - Call to super to allow for caching
* `CircuitsProvidersPartialUpdate`
* `CircuitsProvidersRead` - Call to super to allow for caching
* `CircuitsProvidersUpdate`
* `DcimCablesCreate`
* `DcimCablesDelete`
* `DcimCablesList` - Call to super to allow for caching
* `DcimCablesPartialUpdate`
* `DcimCablesRead` - Call to super to allow for caching
* `DcimCablesUpdate`
* `DcimConnectedDeviceList` - This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
via a protocol such as LLDP. Two query parameters must be included in the request:

* `peer_device`: The name of the peer device
* `peer_interface`: The name of the peer interface
* `DcimConsoleConnectionsList`
* `DcimConsolePortTemplatesCreate`
* `DcimConsolePortTemplatesDelete`
* `DcimConsolePortTemplatesList` - Call to super to allow for caching
* `DcimConsolePortTemplatesPartialUpdate`
* `DcimConsolePortTemplatesRead` - Call to super to allow for caching
* `DcimConsolePortTemplatesUpdate`
* `DcimConsolePortsCreate`
* `DcimConsolePortsDelete`
* `DcimConsolePortsList` - Call to super to allow for caching
* `DcimConsolePortsPartialUpdate`
* `DcimConsolePortsRead` - Call to super to allow for caching
* `DcimConsolePortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `DcimConsolePortsUpdate`
* `DcimConsoleServerPortTemplatesCreate`
* `DcimConsoleServerPortTemplatesDelete`
* `DcimConsoleServerPortTemplatesList` - Call to super to allow for caching
* `DcimConsoleServerPortTemplatesPartialUpdate`
* `DcimConsoleServerPortTemplatesRead` - Call to super to allow for caching
* `DcimConsoleServerPortTemplatesUpdate`
* `DcimConsoleServerPortsCreate`
* `DcimConsoleServerPortsDelete`
* `DcimConsoleServerPortsList` - Call to super to allow for caching
* `DcimConsoleServerPortsPartialUpdate`
* `DcimConsoleServerPortsRead` - Call to super to allow for caching
* `DcimConsoleServerPortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `DcimConsoleServerPortsUpdate`
* `DcimDeviceBayTemplatesCreate`
* `DcimDeviceBayTemplatesDelete`
* `DcimDeviceBayTemplatesList` - Call to super to allow for caching
* `DcimDeviceBayTemplatesPartialUpdate`
* `DcimDeviceBayTemplatesRead` - Call to super to allow for caching
* `DcimDeviceBayTemplatesUpdate`
* `DcimDeviceBaysCreate`
* `DcimDeviceBaysDelete`
* `DcimDeviceBaysList` - Call to super to allow for caching
* `DcimDeviceBaysPartialUpdate`
* `DcimDeviceBaysRead` - Call to super to allow for caching
* `DcimDeviceBaysUpdate`
* `DcimDeviceRolesCreate`
* `DcimDeviceRolesDelete`
* `DcimDeviceRolesList` - Call to super to allow for caching
* `DcimDeviceRolesPartialUpdate`
* `DcimDeviceRolesRead` - Call to super to allow for caching
* `DcimDeviceRolesUpdate`
* `DcimDeviceTypesCreate`
* `DcimDeviceTypesDelete`
* `DcimDeviceTypesList` - Call to super to allow for caching
* `DcimDeviceTypesPartialUpdate`
* `DcimDeviceTypesRead` - Call to super to allow for caching
* `DcimDeviceTypesUpdate`
* `DcimDevicesCreate`
* `DcimDevicesDelete`
* `DcimDevicesGraphs` - A convenience method for rendering graphs for a particular Device.
* `DcimDevicesList` - Call to super to allow for caching
* `DcimDevicesNapalm` - Execute a NAPALM method on a Device
* `DcimDevicesPartialUpdate`
* `DcimDevicesRead` - Call to super to allow for caching
* `DcimDevicesUpdate`
* `DcimFrontPortTemplatesCreate`
* `DcimFrontPortTemplatesDelete`
* `DcimFrontPortTemplatesList` - Call to super to allow for caching
* `DcimFrontPortTemplatesPartialUpdate`
* `DcimFrontPortTemplatesRead` - Call to super to allow for caching
* `DcimFrontPortTemplatesUpdate`
* `DcimFrontPortsCreate`
* `DcimFrontPortsDelete`
* `DcimFrontPortsList` - Call to super to allow for caching
* `DcimFrontPortsPartialUpdate`
* `DcimFrontPortsRead` - Call to super to allow for caching
* `DcimFrontPortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `DcimFrontPortsUpdate`
* `DcimInterfaceConnectionsList`
* `DcimInterfaceTemplatesCreate`
* `DcimInterfaceTemplatesDelete`
* `DcimInterfaceTemplatesList` - Call to super to allow for caching
* `DcimInterfaceTemplatesPartialUpdate`
* `DcimInterfaceTemplatesRead` - Call to super to allow for caching
* `DcimInterfaceTemplatesUpdate`
* `DcimInterfacesCreate`
* `DcimInterfacesDelete`
* `DcimInterfacesGraphs` - A convenience method for rendering graphs for a particular interface.
* `DcimInterfacesList` - Call to super to allow for caching
* `DcimInterfacesPartialUpdate`
* `DcimInterfacesRead` - Call to super to allow for caching
* `DcimInterfacesTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `DcimInterfacesUpdate`
* `DcimInventoryItemsCreate`
* `DcimInventoryItemsDelete`
* `DcimInventoryItemsList` - Call to super to allow for caching
* `DcimInventoryItemsPartialUpdate`
* `DcimInventoryItemsRead` - Call to super to allow for caching
* `DcimInventoryItemsUpdate`
* `DcimManufacturersCreate`
* `DcimManufacturersDelete`
* `DcimManufacturersList` - Call to super to allow for caching
* `DcimManufacturersPartialUpdate`
* `DcimManufacturersRead` - Call to super to allow for caching
* `DcimManufacturersUpdate`
* `DcimPlatformsCreate`
* `DcimPlatformsDelete`
* `DcimPlatformsList` - Call to super to allow for caching
* `DcimPlatformsPartialUpdate`
* `DcimPlatformsRead` - Call to super to allow for caching
* `DcimPlatformsUpdate`
* `DcimPowerConnectionsList`
* `DcimPowerFeedsCreate`
* `DcimPowerFeedsDelete`
* `DcimPowerFeedsList` - Call to super to allow for caching
* `DcimPowerFeedsPartialUpdate`
* `DcimPowerFeedsRead` - Call to super to allow for caching
* `DcimPowerFeedsUpdate`
* `DcimPowerOutletTemplatesCreate`
* `DcimPowerOutletTemplatesDelete`
* `DcimPowerOutletTemplatesList` - Call to super to allow for caching
* `DcimPowerOutletTemplatesPartialUpdate`
* `DcimPowerOutletTemplatesRead` - Call to super to allow for caching
* `DcimPowerOutletTemplatesUpdate`
* `DcimPowerOutletsCreate`
* `DcimPowerOutletsDelete`
* `DcimPowerOutletsList` - Call to super to allow for caching
* `DcimPowerOutletsPartialUpdate`
* `DcimPowerOutletsRead` - Call to super to allow for caching
* `DcimPowerOutletsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `DcimPowerOutletsUpdate`
* `DcimPowerPanelsCreate`
* `DcimPowerPanelsDelete`
* `DcimPowerPanelsList` - Call to super to allow for caching
* `DcimPowerPanelsPartialUpdate`
* `DcimPowerPanelsRead` - Call to super to allow for caching
* `DcimPowerPanelsUpdate`
* `DcimPowerPortTemplatesCreate`
* `DcimPowerPortTemplatesDelete`
* `DcimPowerPortTemplatesList` - Call to super to allow for caching
* `DcimPowerPortTemplatesPartialUpdate`
* `DcimPowerPortTemplatesRead` - Call to super to allow for caching
* `DcimPowerPortTemplatesUpdate`
* `DcimPowerPortsCreate`
* `DcimPowerPortsDelete`
* `DcimPowerPortsList` - Call to super to allow for caching
* `DcimPowerPortsPartialUpdate`
* `DcimPowerPortsRead` - Call to super to allow for caching
* `DcimPowerPortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `DcimPowerPortsUpdate`
* `DcimRackGroupsCreate`
* `DcimRackGroupsDelete`
* `DcimRackGroupsList` - Call to super to allow for caching
* `DcimRackGroupsPartialUpdate`
* `DcimRackGroupsRead` - Call to super to allow for caching
* `DcimRackGroupsUpdate`
* `DcimRackReservationsCreate`
* `DcimRackReservationsDelete`
* `DcimRackReservationsList` - Call to super to allow for caching
* `DcimRackReservationsPartialUpdate`
* `DcimRackReservationsRead` - Call to super to allow for caching
* `DcimRackReservationsUpdate`
* `DcimRackRolesCreate`
* `DcimRackRolesDelete`
* `DcimRackRolesList` - Call to super to allow for caching
* `DcimRackRolesPartialUpdate`
* `DcimRackRolesRead` - Call to super to allow for caching
* `DcimRackRolesUpdate`
* `DcimRacksCreate`
* `DcimRacksDelete`
* `DcimRacksElevation` - Rack elevation representing the list of rack units. Also supports rendering the elevation as an SVG.
* `DcimRacksList` - Call to super to allow for caching
* `DcimRacksPartialUpdate`
* `DcimRacksRead` - Call to super to allow for caching
* `DcimRacksUpdate`
* `DcimRearPortTemplatesCreate`
* `DcimRearPortTemplatesDelete`
* `DcimRearPortTemplatesList` - Call to super to allow for caching
* `DcimRearPortTemplatesPartialUpdate`
* `DcimRearPortTemplatesRead` - Call to super to allow for caching
* `DcimRearPortTemplatesUpdate`
* `DcimRearPortsCreate`
* `DcimRearPortsDelete`
* `DcimRearPortsList` - Call to super to allow for caching
* `DcimRearPortsPartialUpdate`
* `DcimRearPortsRead` - Call to super to allow for caching
* `DcimRearPortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `DcimRearPortsUpdate`
* `DcimRegionsCreate`
* `DcimRegionsDelete`
* `DcimRegionsList` - Call to super to allow for caching
* `DcimRegionsPartialUpdate`
* `DcimRegionsRead` - Call to super to allow for caching
* `DcimRegionsUpdate`
* `DcimSitesCreate`
* `DcimSitesDelete`
* `DcimSitesGraphs` - A convenience method for rendering graphs for a particular site.
* `DcimSitesList` - Call to super to allow for caching
* `DcimSitesPartialUpdate`
* `DcimSitesRead` - Call to super to allow for caching
* `DcimSitesUpdate`
* `DcimVirtualChassisCreate`
* `DcimVirtualChassisDelete`
* `DcimVirtualChassisList` - Call to super to allow for caching
* `DcimVirtualChassisPartialUpdate`
* `DcimVirtualChassisRead` - Call to super to allow for caching
* `DcimVirtualChassisUpdate`
* `ExtrasCustomFieldChoicesList`
* `ExtrasCustomFieldChoicesRead`
* `ExtrasConfigContextsCreate`
* `ExtrasConfigContextsDelete`
* `ExtrasConfigContextsList` - Call to super to allow for caching
* `ExtrasConfigContextsPartialUpdate`
* `ExtrasConfigContextsRead` - Call to super to allow for caching
* `ExtrasConfigContextsUpdate`
* `ExtrasExportTemplatesCreate`
* `ExtrasExportTemplatesDelete`
* `ExtrasExportTemplatesList` - Call to super to allow for caching
* `ExtrasExportTemplatesPartialUpdate`
* `ExtrasExportTemplatesRead` - Call to super to allow for caching
* `ExtrasExportTemplatesUpdate`
* `ExtrasGraphsCreate`
* `ExtrasGraphsDelete`
* `ExtrasGraphsList` - Call to super to allow for caching
* `ExtrasGraphsPartialUpdate`
* `ExtrasGraphsRead` - Call to super to allow for caching
* `ExtrasGraphsUpdate`
* `ExtrasImageAttachmentsCreate`
* `ExtrasImageAttachmentsDelete`
* `ExtrasImageAttachmentsList` - Call to super to allow for caching
* `ExtrasImageAttachmentsPartialUpdate`
* `ExtrasImageAttachmentsRead` - Call to super to allow for caching
* `ExtrasImageAttachmentsUpdate`
* `ExtrasObjectChangesList` - Retrieve a list of recent changes.
* `ExtrasObjectChangesRead` - Retrieve a list of recent changes.
* `ExtrasReportsList` - Compile all reports and their related results (if any). Result data is deferred in the list view.
* `ExtrasReportsRead` - Retrieve a single Report identified as "<module>.<report>".
* `ExtrasReportsRun` - Run a Report and create a new ReportResult, overwriting any previous result for the Report.
* `ExtrasScriptsList`
* `ExtrasScriptsRead`
* `ExtrasTagsCreate`
* `ExtrasTagsDelete`
* `ExtrasTagsList` - Call to super to allow for caching
* `ExtrasTagsPartialUpdate`
* `ExtrasTagsRead` - Call to super to allow for caching
* `ExtrasTagsUpdate`
* `IpamAggregatesCreate`
* `IpamAggregatesDelete`
* `IpamAggregatesList` - Call to super to allow for caching
* `IpamAggregatesPartialUpdate`
* `IpamAggregatesRead` - Call to super to allow for caching
* `IpamAggregatesUpdate`
* `IpamIPAddressesCreate`
* `IpamIPAddressesDelete`
* `IpamIPAddressesList` - Call to super to allow for caching
* `IpamIPAddressesPartialUpdate`
* `IpamIPAddressesRead` - Call to super to allow for caching
* `IpamIPAddressesUpdate`
* `IpamPrefixesAvailableIpsCreate` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.
* `IpamPrefixesAvailableIpsRead` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.
* `IpamPrefixesAvailablePrefixesCreate` - A convenience method for returning available child prefixes within a parent.
* `IpamPrefixesAvailablePrefixesRead` - A convenience method for returning available child prefixes within a parent.
* `IpamPrefixesCreate`
* `IpamPrefixesDelete`
* `IpamPrefixesList` - Call to super to allow for caching
* `IpamPrefixesPartialUpdate`
* `IpamPrefixesRead` - Call to super to allow for caching
* `IpamPrefixesUpdate`
* `IpamRirsCreate`
* `IpamRirsDelete`
* `IpamRirsList` - Call to super to allow for caching
* `IpamRirsPartialUpdate`
* `IpamRirsRead` - Call to super to allow for caching
* `IpamRirsUpdate`
* `IpamRolesCreate`
* `IpamRolesDelete`
* `IpamRolesList` - Call to super to allow for caching
* `IpamRolesPartialUpdate`
* `IpamRolesRead` - Call to super to allow for caching
* `IpamRolesUpdate`
* `IpamServicesCreate`
* `IpamServicesDelete`
* `IpamServicesList` - Call to super to allow for caching
* `IpamServicesPartialUpdate`
* `IpamServicesRead` - Call to super to allow for caching
* `IpamServicesUpdate`
* `IpamVlanGroupsCreate`
* `IpamVlanGroupsDelete`
* `IpamVlanGroupsList` - Call to super to allow for caching
* `IpamVlanGroupsPartialUpdate`
* `IpamVlanGroupsRead` - Call to super to allow for caching
* `IpamVlanGroupsUpdate`
* `IpamVlansCreate`
* `IpamVlansDelete`
* `IpamVlansList` - Call to super to allow for caching
* `IpamVlansPartialUpdate`
* `IpamVlansRead` - Call to super to allow for caching
* `IpamVlansUpdate`
* `IpamVrfsCreate`
* `IpamVrfsDelete`
* `IpamVrfsList` - Call to super to allow for caching
* `IpamVrfsPartialUpdate`
* `IpamVrfsRead` - Call to super to allow for caching
* `IpamVrfsUpdate`
* `SecretsGenerateRsaKeyPairList` - This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.
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
* `SecretsSecretRolesList` - Call to super to allow for caching
* `SecretsSecretRolesPartialUpdate`
* `SecretsSecretRolesRead` - Call to super to allow for caching
* `SecretsSecretRolesUpdate`
* `SecretsSecretsCreate`
* `SecretsSecretsDelete`
* `SecretsSecretsList`
* `SecretsSecretsPartialUpdate`
* `SecretsSecretsRead`
* `SecretsSecretsUpdate`
* `TenancyTenantGroupsCreate`
* `TenancyTenantGroupsDelete`
* `TenancyTenantGroupsList` - Call to super to allow for caching
* `TenancyTenantGroupsPartialUpdate`
* `TenancyTenantGroupsRead` - Call to super to allow for caching
* `TenancyTenantGroupsUpdate`
* `TenancyTenantsCreate`
* `TenancyTenantsDelete`
* `TenancyTenantsList` - Call to super to allow for caching
* `TenancyTenantsPartialUpdate`
* `TenancyTenantsRead` - Call to super to allow for caching
* `TenancyTenantsUpdate`
* `VirtualizationClusterGroupsCreate`
* `VirtualizationClusterGroupsDelete`
* `VirtualizationClusterGroupsList` - Call to super to allow for caching
* `VirtualizationClusterGroupsPartialUpdate`
* `VirtualizationClusterGroupsRead` - Call to super to allow for caching
* `VirtualizationClusterGroupsUpdate`
* `VirtualizationClusterTypesCreate`
* `VirtualizationClusterTypesDelete`
* `VirtualizationClusterTypesList` - Call to super to allow for caching
* `VirtualizationClusterTypesPartialUpdate`
* `VirtualizationClusterTypesRead` - Call to super to allow for caching
* `VirtualizationClusterTypesUpdate`
* `VirtualizationClustersCreate`
* `VirtualizationClustersDelete`
* `VirtualizationClustersList` - Call to super to allow for caching
* `VirtualizationClustersPartialUpdate`
* `VirtualizationClustersRead` - Call to super to allow for caching
* `VirtualizationClustersUpdate`
* `VirtualizationInterfacesCreate`
* `VirtualizationInterfacesDelete`
* `VirtualizationInterfacesList` - Call to super to allow for caching
* `VirtualizationInterfacesPartialUpdate`
* `VirtualizationInterfacesRead` - Call to super to allow for caching
* `VirtualizationInterfacesUpdate`
* `VirtualizationVirtualMachinesCreate`
* `VirtualizationVirtualMachinesDelete`
* `VirtualizationVirtualMachinesList` - Call to super to allow for caching
* `VirtualizationVirtualMachinesPartialUpdate`
* `VirtualizationVirtualMachinesRead` - Call to super to allow for caching
* `VirtualizationVirtualMachinesUpdate`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
