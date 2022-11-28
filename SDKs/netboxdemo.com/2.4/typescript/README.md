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
import { CircuitsChoicesListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    bearer: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));

sdk.sdk.circuitsChoicesList().then((res: CircuitsChoicesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `circuitsChoicesList`
* `circuitsChoicesRead`
* `circuitsCircuitTerminationsCreate`
* `circuitsCircuitTerminationsDelete`
* `circuitsCircuitTerminationsList`
* `circuitsCircuitTerminationsPartialUpdate`
* `circuitsCircuitTerminationsRead`
* `circuitsCircuitTerminationsUpdate`
* `circuitsCircuitTypesCreate`
* `circuitsCircuitTypesDelete`
* `circuitsCircuitTypesList`
* `circuitsCircuitTypesPartialUpdate`
* `circuitsCircuitTypesRead`
* `circuitsCircuitTypesUpdate`
* `circuitsCircuitsCreate`
* `circuitsCircuitsDelete`
* `circuitsCircuitsList`
* `circuitsCircuitsPartialUpdate`
* `circuitsCircuitsRead`
* `circuitsCircuitsUpdate`
* `circuitsProvidersCreate`
* `circuitsProvidersDelete`
* `circuitsProvidersGraphs` - A convenience method for rendering graphs for a particular provider.
* `circuitsProvidersList`
* `circuitsProvidersPartialUpdate`
* `circuitsProvidersRead`
* `circuitsProvidersUpdate`
* `dcimChoicesList`
* `dcimChoicesRead`
* `dcimConnectedDeviceList` - This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
via a protocol such as LLDP. Two query parameters must be included in the request:

* `peer_device`: The name of the peer device
* `peer_interface`: The name of the peer interface
* `dcimConsoleConnectionsList`
* `dcimConsolePortTemplatesCreate`
* `dcimConsolePortTemplatesDelete`
* `dcimConsolePortTemplatesList`
* `dcimConsolePortTemplatesPartialUpdate`
* `dcimConsolePortTemplatesRead`
* `dcimConsolePortTemplatesUpdate`
* `dcimConsolePortsCreate`
* `dcimConsolePortsDelete`
* `dcimConsolePortsList`
* `dcimConsolePortsPartialUpdate`
* `dcimConsolePortsRead`
* `dcimConsolePortsUpdate`
* `dcimConsoleServerPortTemplatesCreate`
* `dcimConsoleServerPortTemplatesDelete`
* `dcimConsoleServerPortTemplatesList`
* `dcimConsoleServerPortTemplatesPartialUpdate`
* `dcimConsoleServerPortTemplatesRead`
* `dcimConsoleServerPortTemplatesUpdate`
* `dcimConsoleServerPortsCreate`
* `dcimConsoleServerPortsDelete`
* `dcimConsoleServerPortsList`
* `dcimConsoleServerPortsPartialUpdate`
* `dcimConsoleServerPortsRead`
* `dcimConsoleServerPortsUpdate`
* `dcimDeviceBayTemplatesCreate`
* `dcimDeviceBayTemplatesDelete`
* `dcimDeviceBayTemplatesList`
* `dcimDeviceBayTemplatesPartialUpdate`
* `dcimDeviceBayTemplatesRead`
* `dcimDeviceBayTemplatesUpdate`
* `dcimDeviceBaysCreate`
* `dcimDeviceBaysDelete`
* `dcimDeviceBaysList`
* `dcimDeviceBaysPartialUpdate`
* `dcimDeviceBaysRead`
* `dcimDeviceBaysUpdate`
* `dcimDeviceRolesCreate`
* `dcimDeviceRolesDelete`
* `dcimDeviceRolesList`
* `dcimDeviceRolesPartialUpdate`
* `dcimDeviceRolesRead`
* `dcimDeviceRolesUpdate`
* `dcimDeviceTypesCreate`
* `dcimDeviceTypesDelete`
* `dcimDeviceTypesList`
* `dcimDeviceTypesPartialUpdate`
* `dcimDeviceTypesRead`
* `dcimDeviceTypesUpdate`
* `dcimDevicesCreate`
* `dcimDevicesDelete`
* `dcimDevicesList`
* `dcimDevicesNapalm` - Execute a NAPALM method on a Device
* `dcimDevicesPartialUpdate`
* `dcimDevicesRead`
* `dcimDevicesUpdate`
* `dcimInterfaceConnectionsCreate`
* `dcimInterfaceConnectionsDelete`
* `dcimInterfaceConnectionsList`
* `dcimInterfaceConnectionsPartialUpdate`
* `dcimInterfaceConnectionsRead`
* `dcimInterfaceConnectionsUpdate`
* `dcimInterfaceTemplatesCreate`
* `dcimInterfaceTemplatesDelete`
* `dcimInterfaceTemplatesList`
* `dcimInterfaceTemplatesPartialUpdate`
* `dcimInterfaceTemplatesRead`
* `dcimInterfaceTemplatesUpdate`
* `dcimInterfacesCreate`
* `dcimInterfacesDelete`
* `dcimInterfacesGraphs` - A convenience method for rendering graphs for a particular interface.
* `dcimInterfacesList`
* `dcimInterfacesPartialUpdate`
* `dcimInterfacesRead`
* `dcimInterfacesUpdate`
* `dcimInventoryItemsCreate`
* `dcimInventoryItemsDelete`
* `dcimInventoryItemsList`
* `dcimInventoryItemsPartialUpdate`
* `dcimInventoryItemsRead`
* `dcimInventoryItemsUpdate`
* `dcimManufacturersCreate`
* `dcimManufacturersDelete`
* `dcimManufacturersList`
* `dcimManufacturersPartialUpdate`
* `dcimManufacturersRead`
* `dcimManufacturersUpdate`
* `dcimPlatformsCreate`
* `dcimPlatformsDelete`
* `dcimPlatformsList`
* `dcimPlatformsPartialUpdate`
* `dcimPlatformsRead`
* `dcimPlatformsUpdate`
* `dcimPowerConnectionsList`
* `dcimPowerOutletTemplatesCreate`
* `dcimPowerOutletTemplatesDelete`
* `dcimPowerOutletTemplatesList`
* `dcimPowerOutletTemplatesPartialUpdate`
* `dcimPowerOutletTemplatesRead`
* `dcimPowerOutletTemplatesUpdate`
* `dcimPowerOutletsCreate`
* `dcimPowerOutletsDelete`
* `dcimPowerOutletsList`
* `dcimPowerOutletsPartialUpdate`
* `dcimPowerOutletsRead`
* `dcimPowerOutletsUpdate`
* `dcimPowerPortTemplatesCreate`
* `dcimPowerPortTemplatesDelete`
* `dcimPowerPortTemplatesList`
* `dcimPowerPortTemplatesPartialUpdate`
* `dcimPowerPortTemplatesRead`
* `dcimPowerPortTemplatesUpdate`
* `dcimPowerPortsCreate`
* `dcimPowerPortsDelete`
* `dcimPowerPortsList`
* `dcimPowerPortsPartialUpdate`
* `dcimPowerPortsRead`
* `dcimPowerPortsUpdate`
* `dcimRackGroupsCreate`
* `dcimRackGroupsDelete`
* `dcimRackGroupsList`
* `dcimRackGroupsPartialUpdate`
* `dcimRackGroupsRead`
* `dcimRackGroupsUpdate`
* `dcimRackReservationsCreate`
* `dcimRackReservationsDelete`
* `dcimRackReservationsList`
* `dcimRackReservationsPartialUpdate`
* `dcimRackReservationsRead`
* `dcimRackReservationsUpdate`
* `dcimRackRolesCreate`
* `dcimRackRolesDelete`
* `dcimRackRolesList`
* `dcimRackRolesPartialUpdate`
* `dcimRackRolesRead`
* `dcimRackRolesUpdate`
* `dcimRacksCreate`
* `dcimRacksDelete`
* `dcimRacksList`
* `dcimRacksPartialUpdate`
* `dcimRacksRead`
* `dcimRacksUnits` - List rack units (by rack)
* `dcimRacksUpdate`
* `dcimRegionsCreate`
* `dcimRegionsDelete`
* `dcimRegionsList`
* `dcimRegionsPartialUpdate`
* `dcimRegionsRead`
* `dcimRegionsUpdate`
* `dcimSitesCreate`
* `dcimSitesDelete`
* `dcimSitesGraphs` - A convenience method for rendering graphs for a particular site.
* `dcimSitesList`
* `dcimSitesPartialUpdate`
* `dcimSitesRead`
* `dcimSitesUpdate`
* `dcimVirtualChassisCreate`
* `dcimVirtualChassisDelete`
* `dcimVirtualChassisList`
* `dcimVirtualChassisPartialUpdate`
* `dcimVirtualChassisRead`
* `dcimVirtualChassisUpdate`
* `extrasChoicesList`
* `extrasChoicesRead`
* `extrasConfigContextsCreate`
* `extrasConfigContextsDelete`
* `extrasConfigContextsList`
* `extrasConfigContextsPartialUpdate`
* `extrasConfigContextsRead`
* `extrasConfigContextsUpdate`
* `extrasExportTemplatesCreate`
* `extrasExportTemplatesDelete`
* `extrasExportTemplatesList`
* `extrasExportTemplatesPartialUpdate`
* `extrasExportTemplatesRead`
* `extrasExportTemplatesUpdate`
* `extrasGraphsCreate`
* `extrasGraphsDelete`
* `extrasGraphsList`
* `extrasGraphsPartialUpdate`
* `extrasGraphsRead`
* `extrasGraphsUpdate`
* `extrasImageAttachmentsCreate`
* `extrasImageAttachmentsDelete`
* `extrasImageAttachmentsList`
* `extrasImageAttachmentsPartialUpdate`
* `extrasImageAttachmentsRead`
* `extrasImageAttachmentsUpdate`
* `extrasObjectChangesList` - Retrieve a list of recent changes.
* `extrasObjectChangesRead` - Retrieve a list of recent changes.
* `extrasRecentActivityList`
* `extrasRecentActivityRead`
* `extrasTagsCreate`
* `extrasTagsDelete`
* `extrasTagsList`
* `extrasTagsPartialUpdate`
* `extrasTagsRead`
* `extrasTagsUpdate`
* `extrasTopologyMapsCreate`
* `extrasTopologyMapsDelete`
* `extrasTopologyMapsList`
* `extrasTopologyMapsPartialUpdate`
* `extrasTopologyMapsRead`
* `extrasTopologyMapsRender`
* `extrasTopologyMapsUpdate`
* `ipamChoicesList`
* `ipamChoicesRead`
* `ipamAggregatesCreate`
* `ipamAggregatesDelete`
* `ipamAggregatesList`
* `ipamAggregatesPartialUpdate`
* `ipamAggregatesRead`
* `ipamAggregatesUpdate`
* `ipamIpAddressesCreate`
* `ipamIpAddressesDelete`
* `ipamIpAddressesList`
* `ipamIpAddressesPartialUpdate`
* `ipamIpAddressesRead`
* `ipamIpAddressesUpdate`
* `ipamPrefixesAvailableIpsCreate` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.
* `ipamPrefixesAvailableIpsRead` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.
* `ipamPrefixesAvailablePrefixesCreate` - A convenience method for returning available child prefixes within a parent.
* `ipamPrefixesAvailablePrefixesRead` - A convenience method for returning available child prefixes within a parent.
* `ipamPrefixesCreate`
* `ipamPrefixesDelete`
* `ipamPrefixesList`
* `ipamPrefixesPartialUpdate`
* `ipamPrefixesRead`
* `ipamPrefixesUpdate`
* `ipamRirsCreate`
* `ipamRirsDelete`
* `ipamRirsList`
* `ipamRirsPartialUpdate`
* `ipamRirsRead`
* `ipamRirsUpdate`
* `ipamRolesCreate`
* `ipamRolesDelete`
* `ipamRolesList`
* `ipamRolesPartialUpdate`
* `ipamRolesRead`
* `ipamRolesUpdate`
* `ipamServicesCreate`
* `ipamServicesDelete`
* `ipamServicesList`
* `ipamServicesPartialUpdate`
* `ipamServicesRead`
* `ipamServicesUpdate`
* `ipamVlanGroupsCreate`
* `ipamVlanGroupsDelete`
* `ipamVlanGroupsList`
* `ipamVlanGroupsPartialUpdate`
* `ipamVlanGroupsRead`
* `ipamVlanGroupsUpdate`
* `ipamVlansCreate`
* `ipamVlansDelete`
* `ipamVlansList`
* `ipamVlansPartialUpdate`
* `ipamVlansRead`
* `ipamVlansUpdate`
* `ipamVrfsCreate`
* `ipamVrfsDelete`
* `ipamVrfsList`
* `ipamVrfsPartialUpdate`
* `ipamVrfsRead`
* `ipamVrfsUpdate`
* `secretsChoicesList`
* `secretsChoicesRead`
* `secretsGenerateRsaKeyPairList` - This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.

    {
        "public_key": "<public key>",
        "private_key": "<private key>"
    }
* `secretsGetSessionKeyCreate` - Retrieve a temporary session key to use for encrypting and decrypting secrets via the API. The user's private RSA
key is POSTed with the name `private_key`. An example:

    curl -v -X POST -H "Authorization: Token <token>" -H "Accept: application/json; indent=4" \
    --data-urlencode "private_key@<filename>" https://netbox/api/secrets/get-session-key/

This request will yield a base64-encoded session key to be included in an `X-Session-Key` header in future requests:

    {
        "session_key": "+8t4SI6XikgVmB5+/urhozx9O5qCQANyOk1MNe6taRf="
    }

This endpoint accepts one optional parameter: `preserve_key`. If True and a session key exists, the existing session
key will be returned instead of a new one.
* `secretsSecretRolesCreate`
* `secretsSecretRolesDelete`
* `secretsSecretRolesList`
* `secretsSecretRolesPartialUpdate`
* `secretsSecretRolesRead`
* `secretsSecretRolesUpdate`
* `secretsSecretsCreate`
* `secretsSecretsDelete`
* `secretsSecretsList`
* `secretsSecretsPartialUpdate`
* `secretsSecretsRead`
* `secretsSecretsUpdate`
* `tenancyChoicesList`
* `tenancyChoicesRead`
* `tenancyTenantGroupsCreate`
* `tenancyTenantGroupsDelete`
* `tenancyTenantGroupsList`
* `tenancyTenantGroupsPartialUpdate`
* `tenancyTenantGroupsRead`
* `tenancyTenantGroupsUpdate`
* `tenancyTenantsCreate`
* `tenancyTenantsDelete`
* `tenancyTenantsList`
* `tenancyTenantsPartialUpdate`
* `tenancyTenantsRead`
* `tenancyTenantsUpdate`
* `virtualizationChoicesList`
* `virtualizationChoicesRead`
* `virtualizationClusterGroupsCreate`
* `virtualizationClusterGroupsDelete`
* `virtualizationClusterGroupsList`
* `virtualizationClusterGroupsPartialUpdate`
* `virtualizationClusterGroupsRead`
* `virtualizationClusterGroupsUpdate`
* `virtualizationClusterTypesCreate`
* `virtualizationClusterTypesDelete`
* `virtualizationClusterTypesList`
* `virtualizationClusterTypesPartialUpdate`
* `virtualizationClusterTypesRead`
* `virtualizationClusterTypesUpdate`
* `virtualizationClustersCreate`
* `virtualizationClustersDelete`
* `virtualizationClustersList`
* `virtualizationClustersPartialUpdate`
* `virtualizationClustersRead`
* `virtualizationClustersUpdate`
* `virtualizationInterfacesCreate`
* `virtualizationInterfacesDelete`
* `virtualizationInterfacesList`
* `virtualizationInterfacesPartialUpdate`
* `virtualizationInterfacesRead`
* `virtualizationInterfacesUpdate`
* `virtualizationVirtualMachinesCreate`
* `virtualizationVirtualMachinesDelete`
* `virtualizationVirtualMachinesList`
* `virtualizationVirtualMachinesPartialUpdate`
* `virtualizationVirtualMachinesRead`
* `virtualizationVirtualMachinesUpdate`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
