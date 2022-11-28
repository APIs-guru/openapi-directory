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
import { CircuitsCircuitTerminationsCreateRequest, CircuitsCircuitTerminationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    bearer: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CircuitsCircuitTerminationsCreateRequest = {
  request: {
    cable: {
      label: "aliquid",
    },
    circuit: 5396713859516954870,
    connectionStatus: true,
    description: "animi",
    portSpeed: 5767282679630353800,
    ppInfo: "magni",
    site: 3444678983313942400,
    termSide: "A",
    upstreamSpeed: 2772754371455433371,
    xconnectId: "eveniet",
  },
};

sdk.sdk.circuitsCircuitTerminationsCreate(req).then((res: CircuitsCircuitTerminationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `circuitsCircuitTerminationsCreate`
* `circuitsCircuitTerminationsDelete`
* `circuitsCircuitTerminationsList` - Call to super to allow for caching
* `circuitsCircuitTerminationsPartialUpdate`
* `circuitsCircuitTerminationsRead` - Call to super to allow for caching
* `circuitsCircuitTerminationsUpdate`
* `circuitsCircuitTypesCreate`
* `circuitsCircuitTypesDelete`
* `circuitsCircuitTypesList` - Call to super to allow for caching
* `circuitsCircuitTypesPartialUpdate`
* `circuitsCircuitTypesRead` - Call to super to allow for caching
* `circuitsCircuitTypesUpdate`
* `circuitsCircuitsCreate`
* `circuitsCircuitsDelete`
* `circuitsCircuitsList` - Call to super to allow for caching
* `circuitsCircuitsPartialUpdate`
* `circuitsCircuitsRead` - Call to super to allow for caching
* `circuitsCircuitsUpdate`
* `circuitsProvidersCreate`
* `circuitsProvidersDelete`
* `circuitsProvidersGraphs` - A convenience method for rendering graphs for a particular provider.
* `circuitsProvidersList` - Call to super to allow for caching
* `circuitsProvidersPartialUpdate`
* `circuitsProvidersRead` - Call to super to allow for caching
* `circuitsProvidersUpdate`
* `dcimCablesCreate`
* `dcimCablesDelete`
* `dcimCablesList` - Call to super to allow for caching
* `dcimCablesPartialUpdate`
* `dcimCablesRead` - Call to super to allow for caching
* `dcimCablesUpdate`
* `dcimConnectedDeviceList` - This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
via a protocol such as LLDP. Two query parameters must be included in the request:

* `peer_device`: The name of the peer device
* `peer_interface`: The name of the peer interface
* `dcimConsoleConnectionsList`
* `dcimConsolePortTemplatesCreate`
* `dcimConsolePortTemplatesDelete`
* `dcimConsolePortTemplatesList` - Call to super to allow for caching
* `dcimConsolePortTemplatesPartialUpdate`
* `dcimConsolePortTemplatesRead` - Call to super to allow for caching
* `dcimConsolePortTemplatesUpdate`
* `dcimConsolePortsCreate`
* `dcimConsolePortsDelete`
* `dcimConsolePortsList` - Call to super to allow for caching
* `dcimConsolePortsPartialUpdate`
* `dcimConsolePortsRead` - Call to super to allow for caching
* `dcimConsolePortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `dcimConsolePortsUpdate`
* `dcimConsoleServerPortTemplatesCreate`
* `dcimConsoleServerPortTemplatesDelete`
* `dcimConsoleServerPortTemplatesList` - Call to super to allow for caching
* `dcimConsoleServerPortTemplatesPartialUpdate`
* `dcimConsoleServerPortTemplatesRead` - Call to super to allow for caching
* `dcimConsoleServerPortTemplatesUpdate`
* `dcimConsoleServerPortsCreate`
* `dcimConsoleServerPortsDelete`
* `dcimConsoleServerPortsList` - Call to super to allow for caching
* `dcimConsoleServerPortsPartialUpdate`
* `dcimConsoleServerPortsRead` - Call to super to allow for caching
* `dcimConsoleServerPortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `dcimConsoleServerPortsUpdate`
* `dcimDeviceBayTemplatesCreate`
* `dcimDeviceBayTemplatesDelete`
* `dcimDeviceBayTemplatesList` - Call to super to allow for caching
* `dcimDeviceBayTemplatesPartialUpdate`
* `dcimDeviceBayTemplatesRead` - Call to super to allow for caching
* `dcimDeviceBayTemplatesUpdate`
* `dcimDeviceBaysCreate`
* `dcimDeviceBaysDelete`
* `dcimDeviceBaysList` - Call to super to allow for caching
* `dcimDeviceBaysPartialUpdate`
* `dcimDeviceBaysRead` - Call to super to allow for caching
* `dcimDeviceBaysUpdate`
* `dcimDeviceRolesCreate`
* `dcimDeviceRolesDelete`
* `dcimDeviceRolesList` - Call to super to allow for caching
* `dcimDeviceRolesPartialUpdate`
* `dcimDeviceRolesRead` - Call to super to allow for caching
* `dcimDeviceRolesUpdate`
* `dcimDeviceTypesCreate`
* `dcimDeviceTypesDelete`
* `dcimDeviceTypesList` - Call to super to allow for caching
* `dcimDeviceTypesPartialUpdate`
* `dcimDeviceTypesRead` - Call to super to allow for caching
* `dcimDeviceTypesUpdate`
* `dcimDevicesCreate`
* `dcimDevicesDelete`
* `dcimDevicesGraphs` - A convenience method for rendering graphs for a particular Device.
* `dcimDevicesList` - Call to super to allow for caching
* `dcimDevicesNapalm` - Execute a NAPALM method on a Device
* `dcimDevicesPartialUpdate`
* `dcimDevicesRead` - Call to super to allow for caching
* `dcimDevicesUpdate`
* `dcimFrontPortTemplatesCreate`
* `dcimFrontPortTemplatesDelete`
* `dcimFrontPortTemplatesList` - Call to super to allow for caching
* `dcimFrontPortTemplatesPartialUpdate`
* `dcimFrontPortTemplatesRead` - Call to super to allow for caching
* `dcimFrontPortTemplatesUpdate`
* `dcimFrontPortsCreate`
* `dcimFrontPortsDelete`
* `dcimFrontPortsList` - Call to super to allow for caching
* `dcimFrontPortsPartialUpdate`
* `dcimFrontPortsRead` - Call to super to allow for caching
* `dcimFrontPortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `dcimFrontPortsUpdate`
* `dcimInterfaceConnectionsList`
* `dcimInterfaceTemplatesCreate`
* `dcimInterfaceTemplatesDelete`
* `dcimInterfaceTemplatesList` - Call to super to allow for caching
* `dcimInterfaceTemplatesPartialUpdate`
* `dcimInterfaceTemplatesRead` - Call to super to allow for caching
* `dcimInterfaceTemplatesUpdate`
* `dcimInterfacesCreate`
* `dcimInterfacesDelete`
* `dcimInterfacesGraphs` - A convenience method for rendering graphs for a particular interface.
* `dcimInterfacesList` - Call to super to allow for caching
* `dcimInterfacesPartialUpdate`
* `dcimInterfacesRead` - Call to super to allow for caching
* `dcimInterfacesTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `dcimInterfacesUpdate`
* `dcimInventoryItemsCreate`
* `dcimInventoryItemsDelete`
* `dcimInventoryItemsList` - Call to super to allow for caching
* `dcimInventoryItemsPartialUpdate`
* `dcimInventoryItemsRead` - Call to super to allow for caching
* `dcimInventoryItemsUpdate`
* `dcimManufacturersCreate`
* `dcimManufacturersDelete`
* `dcimManufacturersList` - Call to super to allow for caching
* `dcimManufacturersPartialUpdate`
* `dcimManufacturersRead` - Call to super to allow for caching
* `dcimManufacturersUpdate`
* `dcimPlatformsCreate`
* `dcimPlatformsDelete`
* `dcimPlatformsList` - Call to super to allow for caching
* `dcimPlatformsPartialUpdate`
* `dcimPlatformsRead` - Call to super to allow for caching
* `dcimPlatformsUpdate`
* `dcimPowerConnectionsList`
* `dcimPowerFeedsCreate`
* `dcimPowerFeedsDelete`
* `dcimPowerFeedsList` - Call to super to allow for caching
* `dcimPowerFeedsPartialUpdate`
* `dcimPowerFeedsRead` - Call to super to allow for caching
* `dcimPowerFeedsUpdate`
* `dcimPowerOutletTemplatesCreate`
* `dcimPowerOutletTemplatesDelete`
* `dcimPowerOutletTemplatesList` - Call to super to allow for caching
* `dcimPowerOutletTemplatesPartialUpdate`
* `dcimPowerOutletTemplatesRead` - Call to super to allow for caching
* `dcimPowerOutletTemplatesUpdate`
* `dcimPowerOutletsCreate`
* `dcimPowerOutletsDelete`
* `dcimPowerOutletsList` - Call to super to allow for caching
* `dcimPowerOutletsPartialUpdate`
* `dcimPowerOutletsRead` - Call to super to allow for caching
* `dcimPowerOutletsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `dcimPowerOutletsUpdate`
* `dcimPowerPanelsCreate`
* `dcimPowerPanelsDelete`
* `dcimPowerPanelsList` - Call to super to allow for caching
* `dcimPowerPanelsPartialUpdate`
* `dcimPowerPanelsRead` - Call to super to allow for caching
* `dcimPowerPanelsUpdate`
* `dcimPowerPortTemplatesCreate`
* `dcimPowerPortTemplatesDelete`
* `dcimPowerPortTemplatesList` - Call to super to allow for caching
* `dcimPowerPortTemplatesPartialUpdate`
* `dcimPowerPortTemplatesRead` - Call to super to allow for caching
* `dcimPowerPortTemplatesUpdate`
* `dcimPowerPortsCreate`
* `dcimPowerPortsDelete`
* `dcimPowerPortsList` - Call to super to allow for caching
* `dcimPowerPortsPartialUpdate`
* `dcimPowerPortsRead` - Call to super to allow for caching
* `dcimPowerPortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `dcimPowerPortsUpdate`
* `dcimRackGroupsCreate`
* `dcimRackGroupsDelete`
* `dcimRackGroupsList` - Call to super to allow for caching
* `dcimRackGroupsPartialUpdate`
* `dcimRackGroupsRead` - Call to super to allow for caching
* `dcimRackGroupsUpdate`
* `dcimRackReservationsCreate`
* `dcimRackReservationsDelete`
* `dcimRackReservationsList` - Call to super to allow for caching
* `dcimRackReservationsPartialUpdate`
* `dcimRackReservationsRead` - Call to super to allow for caching
* `dcimRackReservationsUpdate`
* `dcimRackRolesCreate`
* `dcimRackRolesDelete`
* `dcimRackRolesList` - Call to super to allow for caching
* `dcimRackRolesPartialUpdate`
* `dcimRackRolesRead` - Call to super to allow for caching
* `dcimRackRolesUpdate`
* `dcimRacksCreate`
* `dcimRacksDelete`
* `dcimRacksElevation` - Rack elevation representing the list of rack units. Also supports rendering the elevation as an SVG.
* `dcimRacksList` - Call to super to allow for caching
* `dcimRacksPartialUpdate`
* `dcimRacksRead` - Call to super to allow for caching
* `dcimRacksUpdate`
* `dcimRearPortTemplatesCreate`
* `dcimRearPortTemplatesDelete`
* `dcimRearPortTemplatesList` - Call to super to allow for caching
* `dcimRearPortTemplatesPartialUpdate`
* `dcimRearPortTemplatesRead` - Call to super to allow for caching
* `dcimRearPortTemplatesUpdate`
* `dcimRearPortsCreate`
* `dcimRearPortsDelete`
* `dcimRearPortsList` - Call to super to allow for caching
* `dcimRearPortsPartialUpdate`
* `dcimRearPortsRead` - Call to super to allow for caching
* `dcimRearPortsTrace` - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
* `dcimRearPortsUpdate`
* `dcimRegionsCreate`
* `dcimRegionsDelete`
* `dcimRegionsList` - Call to super to allow for caching
* `dcimRegionsPartialUpdate`
* `dcimRegionsRead` - Call to super to allow for caching
* `dcimRegionsUpdate`
* `dcimSitesCreate`
* `dcimSitesDelete`
* `dcimSitesGraphs` - A convenience method for rendering graphs for a particular site.
* `dcimSitesList` - Call to super to allow for caching
* `dcimSitesPartialUpdate`
* `dcimSitesRead` - Call to super to allow for caching
* `dcimSitesUpdate`
* `dcimVirtualChassisCreate`
* `dcimVirtualChassisDelete`
* `dcimVirtualChassisList` - Call to super to allow for caching
* `dcimVirtualChassisPartialUpdate`
* `dcimVirtualChassisRead` - Call to super to allow for caching
* `dcimVirtualChassisUpdate`
* `extrasCustomFieldChoicesList`
* `extrasCustomFieldChoicesRead`
* `extrasConfigContextsCreate`
* `extrasConfigContextsDelete`
* `extrasConfigContextsList` - Call to super to allow for caching
* `extrasConfigContextsPartialUpdate`
* `extrasConfigContextsRead` - Call to super to allow for caching
* `extrasConfigContextsUpdate`
* `extrasExportTemplatesCreate`
* `extrasExportTemplatesDelete`
* `extrasExportTemplatesList` - Call to super to allow for caching
* `extrasExportTemplatesPartialUpdate`
* `extrasExportTemplatesRead` - Call to super to allow for caching
* `extrasExportTemplatesUpdate`
* `extrasGraphsCreate`
* `extrasGraphsDelete`
* `extrasGraphsList` - Call to super to allow for caching
* `extrasGraphsPartialUpdate`
* `extrasGraphsRead` - Call to super to allow for caching
* `extrasGraphsUpdate`
* `extrasImageAttachmentsCreate`
* `extrasImageAttachmentsDelete`
* `extrasImageAttachmentsList` - Call to super to allow for caching
* `extrasImageAttachmentsPartialUpdate`
* `extrasImageAttachmentsRead` - Call to super to allow for caching
* `extrasImageAttachmentsUpdate`
* `extrasObjectChangesList` - Retrieve a list of recent changes.
* `extrasObjectChangesRead` - Retrieve a list of recent changes.
* `extrasReportsList` - Compile all reports and their related results (if any). Result data is deferred in the list view.
* `extrasReportsRead` - Retrieve a single Report identified as "<module>.<report>".
* `extrasReportsRun` - Run a Report and create a new ReportResult, overwriting any previous result for the Report.
* `extrasScriptsList`
* `extrasScriptsRead`
* `extrasTagsCreate`
* `extrasTagsDelete`
* `extrasTagsList` - Call to super to allow for caching
* `extrasTagsPartialUpdate`
* `extrasTagsRead` - Call to super to allow for caching
* `extrasTagsUpdate`
* `ipamAggregatesCreate`
* `ipamAggregatesDelete`
* `ipamAggregatesList` - Call to super to allow for caching
* `ipamAggregatesPartialUpdate`
* `ipamAggregatesRead` - Call to super to allow for caching
* `ipamAggregatesUpdate`
* `ipamIpAddressesCreate`
* `ipamIpAddressesDelete`
* `ipamIpAddressesList` - Call to super to allow for caching
* `ipamIpAddressesPartialUpdate`
* `ipamIpAddressesRead` - Call to super to allow for caching
* `ipamIpAddressesUpdate`
* `ipamPrefixesAvailableIpsCreate` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.
* `ipamPrefixesAvailableIpsRead` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.
* `ipamPrefixesAvailablePrefixesCreate` - A convenience method for returning available child prefixes within a parent.
* `ipamPrefixesAvailablePrefixesRead` - A convenience method for returning available child prefixes within a parent.
* `ipamPrefixesCreate`
* `ipamPrefixesDelete`
* `ipamPrefixesList` - Call to super to allow for caching
* `ipamPrefixesPartialUpdate`
* `ipamPrefixesRead` - Call to super to allow for caching
* `ipamPrefixesUpdate`
* `ipamRirsCreate`
* `ipamRirsDelete`
* `ipamRirsList` - Call to super to allow for caching
* `ipamRirsPartialUpdate`
* `ipamRirsRead` - Call to super to allow for caching
* `ipamRirsUpdate`
* `ipamRolesCreate`
* `ipamRolesDelete`
* `ipamRolesList` - Call to super to allow for caching
* `ipamRolesPartialUpdate`
* `ipamRolesRead` - Call to super to allow for caching
* `ipamRolesUpdate`
* `ipamServicesCreate`
* `ipamServicesDelete`
* `ipamServicesList` - Call to super to allow for caching
* `ipamServicesPartialUpdate`
* `ipamServicesRead` - Call to super to allow for caching
* `ipamServicesUpdate`
* `ipamVlanGroupsCreate`
* `ipamVlanGroupsDelete`
* `ipamVlanGroupsList` - Call to super to allow for caching
* `ipamVlanGroupsPartialUpdate`
* `ipamVlanGroupsRead` - Call to super to allow for caching
* `ipamVlanGroupsUpdate`
* `ipamVlansCreate`
* `ipamVlansDelete`
* `ipamVlansList` - Call to super to allow for caching
* `ipamVlansPartialUpdate`
* `ipamVlansRead` - Call to super to allow for caching
* `ipamVlansUpdate`
* `ipamVrfsCreate`
* `ipamVrfsDelete`
* `ipamVrfsList` - Call to super to allow for caching
* `ipamVrfsPartialUpdate`
* `ipamVrfsRead` - Call to super to allow for caching
* `ipamVrfsUpdate`
* `secretsGenerateRsaKeyPairList` - This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.
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
* `secretsSecretRolesList` - Call to super to allow for caching
* `secretsSecretRolesPartialUpdate`
* `secretsSecretRolesRead` - Call to super to allow for caching
* `secretsSecretRolesUpdate`
* `secretsSecretsCreate`
* `secretsSecretsDelete`
* `secretsSecretsList`
* `secretsSecretsPartialUpdate`
* `secretsSecretsRead`
* `secretsSecretsUpdate`
* `tenancyTenantGroupsCreate`
* `tenancyTenantGroupsDelete`
* `tenancyTenantGroupsList` - Call to super to allow for caching
* `tenancyTenantGroupsPartialUpdate`
* `tenancyTenantGroupsRead` - Call to super to allow for caching
* `tenancyTenantGroupsUpdate`
* `tenancyTenantsCreate`
* `tenancyTenantsDelete`
* `tenancyTenantsList` - Call to super to allow for caching
* `tenancyTenantsPartialUpdate`
* `tenancyTenantsRead` - Call to super to allow for caching
* `tenancyTenantsUpdate`
* `virtualizationClusterGroupsCreate`
* `virtualizationClusterGroupsDelete`
* `virtualizationClusterGroupsList` - Call to super to allow for caching
* `virtualizationClusterGroupsPartialUpdate`
* `virtualizationClusterGroupsRead` - Call to super to allow for caching
* `virtualizationClusterGroupsUpdate`
* `virtualizationClusterTypesCreate`
* `virtualizationClusterTypesDelete`
* `virtualizationClusterTypesList` - Call to super to allow for caching
* `virtualizationClusterTypesPartialUpdate`
* `virtualizationClusterTypesRead` - Call to super to allow for caching
* `virtualizationClusterTypesUpdate`
* `virtualizationClustersCreate`
* `virtualizationClustersDelete`
* `virtualizationClustersList` - Call to super to allow for caching
* `virtualizationClustersPartialUpdate`
* `virtualizationClustersRead` - Call to super to allow for caching
* `virtualizationClustersUpdate`
* `virtualizationInterfacesCreate`
* `virtualizationInterfacesDelete`
* `virtualizationInterfacesList` - Call to super to allow for caching
* `virtualizationInterfacesPartialUpdate`
* `virtualizationInterfacesRead` - Call to super to allow for caching
* `virtualizationInterfacesUpdate`
* `virtualizationVirtualMachinesCreate`
* `virtualizationVirtualMachinesDelete`
* `virtualizationVirtualMachinesList` - Call to super to allow for caching
* `virtualizationVirtualMachinesPartialUpdate`
* `virtualizationVirtualMachinesRead` - Call to super to allow for caching
* `virtualizationVirtualMachinesUpdate`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
