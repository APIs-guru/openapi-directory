import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://netboxdemo.com/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    circuitsCircuitTerminationsCreate(req: operations.CircuitsCircuitTerminationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsCreateResponse>;
    circuitsCircuitTerminationsDelete(req: operations.CircuitsCircuitTerminationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsDeleteResponse>;
    /**
     * circuitsCircuitTerminationsList - Call to super to allow for caching
    **/
    circuitsCircuitTerminationsList(req: operations.CircuitsCircuitTerminationsListRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsListResponse>;
    circuitsCircuitTerminationsPartialUpdate(req: operations.CircuitsCircuitTerminationsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsPartialUpdateResponse>;
    /**
     * circuitsCircuitTerminationsRead - Call to super to allow for caching
    **/
    circuitsCircuitTerminationsRead(req: operations.CircuitsCircuitTerminationsReadRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsReadResponse>;
    circuitsCircuitTerminationsUpdate(req: operations.CircuitsCircuitTerminationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsUpdateResponse>;
    circuitsCircuitTypesCreate(req: operations.CircuitsCircuitTypesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesCreateResponse>;
    circuitsCircuitTypesDelete(req: operations.CircuitsCircuitTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesDeleteResponse>;
    /**
     * circuitsCircuitTypesList - Call to super to allow for caching
    **/
    circuitsCircuitTypesList(req: operations.CircuitsCircuitTypesListRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesListResponse>;
    circuitsCircuitTypesPartialUpdate(req: operations.CircuitsCircuitTypesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesPartialUpdateResponse>;
    /**
     * circuitsCircuitTypesRead - Call to super to allow for caching
    **/
    circuitsCircuitTypesRead(req: operations.CircuitsCircuitTypesReadRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesReadResponse>;
    circuitsCircuitTypesUpdate(req: operations.CircuitsCircuitTypesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesUpdateResponse>;
    circuitsCircuitsCreate(req: operations.CircuitsCircuitsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsCreateResponse>;
    circuitsCircuitsDelete(req: operations.CircuitsCircuitsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsDeleteResponse>;
    /**
     * circuitsCircuitsList - Call to super to allow for caching
    **/
    circuitsCircuitsList(req: operations.CircuitsCircuitsListRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsListResponse>;
    circuitsCircuitsPartialUpdate(req: operations.CircuitsCircuitsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsPartialUpdateResponse>;
    /**
     * circuitsCircuitsRead - Call to super to allow for caching
    **/
    circuitsCircuitsRead(req: operations.CircuitsCircuitsReadRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsReadResponse>;
    circuitsCircuitsUpdate(req: operations.CircuitsCircuitsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsUpdateResponse>;
    circuitsProvidersCreate(req: operations.CircuitsProvidersCreateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersCreateResponse>;
    circuitsProvidersDelete(req: operations.CircuitsProvidersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersDeleteResponse>;
    /**
     * circuitsProvidersGraphs - A convenience method for rendering graphs for a particular provider.
    **/
    circuitsProvidersGraphs(req: operations.CircuitsProvidersGraphsRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersGraphsResponse>;
    /**
     * circuitsProvidersList - Call to super to allow for caching
    **/
    circuitsProvidersList(req: operations.CircuitsProvidersListRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersListResponse>;
    circuitsProvidersPartialUpdate(req: operations.CircuitsProvidersPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersPartialUpdateResponse>;
    /**
     * circuitsProvidersRead - Call to super to allow for caching
    **/
    circuitsProvidersRead(req: operations.CircuitsProvidersReadRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersReadResponse>;
    circuitsProvidersUpdate(req: operations.CircuitsProvidersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersUpdateResponse>;
    dcimCablesCreate(req: operations.DcimCablesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesCreateResponse>;
    dcimCablesDelete(req: operations.DcimCablesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesDeleteResponse>;
    /**
     * dcimCablesList - Call to super to allow for caching
    **/
    dcimCablesList(req: operations.DcimCablesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesListResponse>;
    dcimCablesPartialUpdate(req: operations.DcimCablesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesPartialUpdateResponse>;
    /**
     * dcimCablesRead - Call to super to allow for caching
    **/
    dcimCablesRead(req: operations.DcimCablesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesReadResponse>;
    dcimCablesUpdate(req: operations.DcimCablesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesUpdateResponse>;
    /**
     * dcimConnectedDeviceList - This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
     * interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
     * via a protocol such as LLDP. Two query parameters must be included in the request:
     *
     * * `peer_device`: The name of the peer device
     * * `peer_interface`: The name of the peer interface
    **/
    dcimConnectedDeviceList(req: operations.DcimConnectedDeviceListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConnectedDeviceListResponse>;
    dcimConsoleConnectionsList(req: operations.DcimConsoleConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleConnectionsListResponse>;
    dcimConsolePortTemplatesCreate(req: operations.DcimConsolePortTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesCreateResponse>;
    dcimConsolePortTemplatesDelete(req: operations.DcimConsolePortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesDeleteResponse>;
    /**
     * dcimConsolePortTemplatesList - Call to super to allow for caching
    **/
    dcimConsolePortTemplatesList(req: operations.DcimConsolePortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesListResponse>;
    dcimConsolePortTemplatesPartialUpdate(req: operations.DcimConsolePortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesPartialUpdateResponse>;
    /**
     * dcimConsolePortTemplatesRead - Call to super to allow for caching
    **/
    dcimConsolePortTemplatesRead(req: operations.DcimConsolePortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesReadResponse>;
    dcimConsolePortTemplatesUpdate(req: operations.DcimConsolePortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesUpdateResponse>;
    dcimConsolePortsCreate(req: operations.DcimConsolePortsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsCreateResponse>;
    dcimConsolePortsDelete(req: operations.DcimConsolePortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsDeleteResponse>;
    /**
     * dcimConsolePortsList - Call to super to allow for caching
    **/
    dcimConsolePortsList(req: operations.DcimConsolePortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsListResponse>;
    dcimConsolePortsPartialUpdate(req: operations.DcimConsolePortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsPartialUpdateResponse>;
    /**
     * dcimConsolePortsRead - Call to super to allow for caching
    **/
    dcimConsolePortsRead(req: operations.DcimConsolePortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsReadResponse>;
    /**
     * dcimConsolePortsTrace - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
    **/
    dcimConsolePortsTrace(req: operations.DcimConsolePortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsTraceResponse>;
    dcimConsolePortsUpdate(req: operations.DcimConsolePortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsUpdateResponse>;
    dcimConsoleServerPortTemplatesCreate(req: operations.DcimConsoleServerPortTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesCreateResponse>;
    dcimConsoleServerPortTemplatesDelete(req: operations.DcimConsoleServerPortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesDeleteResponse>;
    /**
     * dcimConsoleServerPortTemplatesList - Call to super to allow for caching
    **/
    dcimConsoleServerPortTemplatesList(req: operations.DcimConsoleServerPortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesListResponse>;
    dcimConsoleServerPortTemplatesPartialUpdate(req: operations.DcimConsoleServerPortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesPartialUpdateResponse>;
    /**
     * dcimConsoleServerPortTemplatesRead - Call to super to allow for caching
    **/
    dcimConsoleServerPortTemplatesRead(req: operations.DcimConsoleServerPortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesReadResponse>;
    dcimConsoleServerPortTemplatesUpdate(req: operations.DcimConsoleServerPortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesUpdateResponse>;
    dcimConsoleServerPortsCreate(req: operations.DcimConsoleServerPortsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsCreateResponse>;
    dcimConsoleServerPortsDelete(req: operations.DcimConsoleServerPortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsDeleteResponse>;
    /**
     * dcimConsoleServerPortsList - Call to super to allow for caching
    **/
    dcimConsoleServerPortsList(req: operations.DcimConsoleServerPortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsListResponse>;
    dcimConsoleServerPortsPartialUpdate(req: operations.DcimConsoleServerPortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsPartialUpdateResponse>;
    /**
     * dcimConsoleServerPortsRead - Call to super to allow for caching
    **/
    dcimConsoleServerPortsRead(req: operations.DcimConsoleServerPortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsReadResponse>;
    /**
     * dcimConsoleServerPortsTrace - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
    **/
    dcimConsoleServerPortsTrace(req: operations.DcimConsoleServerPortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsTraceResponse>;
    dcimConsoleServerPortsUpdate(req: operations.DcimConsoleServerPortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsUpdateResponse>;
    dcimDeviceBayTemplatesCreate(req: operations.DcimDeviceBayTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesCreateResponse>;
    dcimDeviceBayTemplatesDelete(req: operations.DcimDeviceBayTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesDeleteResponse>;
    /**
     * dcimDeviceBayTemplatesList - Call to super to allow for caching
    **/
    dcimDeviceBayTemplatesList(req: operations.DcimDeviceBayTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesListResponse>;
    dcimDeviceBayTemplatesPartialUpdate(req: operations.DcimDeviceBayTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesPartialUpdateResponse>;
    /**
     * dcimDeviceBayTemplatesRead - Call to super to allow for caching
    **/
    dcimDeviceBayTemplatesRead(req: operations.DcimDeviceBayTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesReadResponse>;
    dcimDeviceBayTemplatesUpdate(req: operations.DcimDeviceBayTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesUpdateResponse>;
    dcimDeviceBaysCreate(req: operations.DcimDeviceBaysCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysCreateResponse>;
    dcimDeviceBaysDelete(req: operations.DcimDeviceBaysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysDeleteResponse>;
    /**
     * dcimDeviceBaysList - Call to super to allow for caching
    **/
    dcimDeviceBaysList(req: operations.DcimDeviceBaysListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysListResponse>;
    dcimDeviceBaysPartialUpdate(req: operations.DcimDeviceBaysPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysPartialUpdateResponse>;
    /**
     * dcimDeviceBaysRead - Call to super to allow for caching
    **/
    dcimDeviceBaysRead(req: operations.DcimDeviceBaysReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysReadResponse>;
    dcimDeviceBaysUpdate(req: operations.DcimDeviceBaysUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysUpdateResponse>;
    dcimDeviceRolesCreate(req: operations.DcimDeviceRolesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesCreateResponse>;
    dcimDeviceRolesDelete(req: operations.DcimDeviceRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesDeleteResponse>;
    /**
     * dcimDeviceRolesList - Call to super to allow for caching
    **/
    dcimDeviceRolesList(req: operations.DcimDeviceRolesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesListResponse>;
    dcimDeviceRolesPartialUpdate(req: operations.DcimDeviceRolesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesPartialUpdateResponse>;
    /**
     * dcimDeviceRolesRead - Call to super to allow for caching
    **/
    dcimDeviceRolesRead(req: operations.DcimDeviceRolesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesReadResponse>;
    dcimDeviceRolesUpdate(req: operations.DcimDeviceRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesUpdateResponse>;
    dcimDeviceTypesCreate(req: operations.DcimDeviceTypesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesCreateResponse>;
    dcimDeviceTypesDelete(req: operations.DcimDeviceTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesDeleteResponse>;
    /**
     * dcimDeviceTypesList - Call to super to allow for caching
    **/
    dcimDeviceTypesList(req: operations.DcimDeviceTypesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesListResponse>;
    dcimDeviceTypesPartialUpdate(req: operations.DcimDeviceTypesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesPartialUpdateResponse>;
    /**
     * dcimDeviceTypesRead - Call to super to allow for caching
    **/
    dcimDeviceTypesRead(req: operations.DcimDeviceTypesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesReadResponse>;
    dcimDeviceTypesUpdate(req: operations.DcimDeviceTypesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesUpdateResponse>;
    dcimDevicesCreate(req: operations.DcimDevicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesCreateResponse>;
    dcimDevicesDelete(req: operations.DcimDevicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesDeleteResponse>;
    /**
     * dcimDevicesGraphs - A convenience method for rendering graphs for a particular Device.
    **/
    dcimDevicesGraphs(req: operations.DcimDevicesGraphsRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesGraphsResponse>;
    /**
     * dcimDevicesList - Call to super to allow for caching
    **/
    dcimDevicesList(req: operations.DcimDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesListResponse>;
    /**
     * dcimDevicesNapalm - Execute a NAPALM method on a Device
    **/
    dcimDevicesNapalm(req: operations.DcimDevicesNapalmRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesNapalmResponse>;
    dcimDevicesPartialUpdate(req: operations.DcimDevicesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesPartialUpdateResponse>;
    /**
     * dcimDevicesRead - Call to super to allow for caching
    **/
    dcimDevicesRead(req: operations.DcimDevicesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesReadResponse>;
    dcimDevicesUpdate(req: operations.DcimDevicesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesUpdateResponse>;
    dcimFrontPortTemplatesCreate(req: operations.DcimFrontPortTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesCreateResponse>;
    dcimFrontPortTemplatesDelete(req: operations.DcimFrontPortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesDeleteResponse>;
    /**
     * dcimFrontPortTemplatesList - Call to super to allow for caching
    **/
    dcimFrontPortTemplatesList(req: operations.DcimFrontPortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesListResponse>;
    dcimFrontPortTemplatesPartialUpdate(req: operations.DcimFrontPortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesPartialUpdateResponse>;
    /**
     * dcimFrontPortTemplatesRead - Call to super to allow for caching
    **/
    dcimFrontPortTemplatesRead(req: operations.DcimFrontPortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesReadResponse>;
    dcimFrontPortTemplatesUpdate(req: operations.DcimFrontPortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesUpdateResponse>;
    dcimFrontPortsCreate(req: operations.DcimFrontPortsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsCreateResponse>;
    dcimFrontPortsDelete(req: operations.DcimFrontPortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsDeleteResponse>;
    /**
     * dcimFrontPortsList - Call to super to allow for caching
    **/
    dcimFrontPortsList(req: operations.DcimFrontPortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsListResponse>;
    dcimFrontPortsPartialUpdate(req: operations.DcimFrontPortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsPartialUpdateResponse>;
    /**
     * dcimFrontPortsRead - Call to super to allow for caching
    **/
    dcimFrontPortsRead(req: operations.DcimFrontPortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsReadResponse>;
    /**
     * dcimFrontPortsTrace - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
    **/
    dcimFrontPortsTrace(req: operations.DcimFrontPortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsTraceResponse>;
    dcimFrontPortsUpdate(req: operations.DcimFrontPortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsUpdateResponse>;
    dcimInterfaceConnectionsList(req: operations.DcimInterfaceConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceConnectionsListResponse>;
    dcimInterfaceTemplatesCreate(req: operations.DcimInterfaceTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesCreateResponse>;
    dcimInterfaceTemplatesDelete(req: operations.DcimInterfaceTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesDeleteResponse>;
    /**
     * dcimInterfaceTemplatesList - Call to super to allow for caching
    **/
    dcimInterfaceTemplatesList(req: operations.DcimInterfaceTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesListResponse>;
    dcimInterfaceTemplatesPartialUpdate(req: operations.DcimInterfaceTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesPartialUpdateResponse>;
    /**
     * dcimInterfaceTemplatesRead - Call to super to allow for caching
    **/
    dcimInterfaceTemplatesRead(req: operations.DcimInterfaceTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesReadResponse>;
    dcimInterfaceTemplatesUpdate(req: operations.DcimInterfaceTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesUpdateResponse>;
    dcimInterfacesCreate(req: operations.DcimInterfacesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesCreateResponse>;
    dcimInterfacesDelete(req: operations.DcimInterfacesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesDeleteResponse>;
    /**
     * dcimInterfacesGraphs - A convenience method for rendering graphs for a particular interface.
    **/
    dcimInterfacesGraphs(req: operations.DcimInterfacesGraphsRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesGraphsResponse>;
    /**
     * dcimInterfacesList - Call to super to allow for caching
    **/
    dcimInterfacesList(req: operations.DcimInterfacesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesListResponse>;
    dcimInterfacesPartialUpdate(req: operations.DcimInterfacesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesPartialUpdateResponse>;
    /**
     * dcimInterfacesRead - Call to super to allow for caching
    **/
    dcimInterfacesRead(req: operations.DcimInterfacesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesReadResponse>;
    /**
     * dcimInterfacesTrace - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
    **/
    dcimInterfacesTrace(req: operations.DcimInterfacesTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesTraceResponse>;
    dcimInterfacesUpdate(req: operations.DcimInterfacesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesUpdateResponse>;
    dcimInventoryItemsCreate(req: operations.DcimInventoryItemsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsCreateResponse>;
    dcimInventoryItemsDelete(req: operations.DcimInventoryItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsDeleteResponse>;
    /**
     * dcimInventoryItemsList - Call to super to allow for caching
    **/
    dcimInventoryItemsList(req: operations.DcimInventoryItemsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsListResponse>;
    dcimInventoryItemsPartialUpdate(req: operations.DcimInventoryItemsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsPartialUpdateResponse>;
    /**
     * dcimInventoryItemsRead - Call to super to allow for caching
    **/
    dcimInventoryItemsRead(req: operations.DcimInventoryItemsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsReadResponse>;
    dcimInventoryItemsUpdate(req: operations.DcimInventoryItemsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsUpdateResponse>;
    dcimManufacturersCreate(req: operations.DcimManufacturersCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersCreateResponse>;
    dcimManufacturersDelete(req: operations.DcimManufacturersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersDeleteResponse>;
    /**
     * dcimManufacturersList - Call to super to allow for caching
    **/
    dcimManufacturersList(req: operations.DcimManufacturersListRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersListResponse>;
    dcimManufacturersPartialUpdate(req: operations.DcimManufacturersPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersPartialUpdateResponse>;
    /**
     * dcimManufacturersRead - Call to super to allow for caching
    **/
    dcimManufacturersRead(req: operations.DcimManufacturersReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersReadResponse>;
    dcimManufacturersUpdate(req: operations.DcimManufacturersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersUpdateResponse>;
    dcimPlatformsCreate(req: operations.DcimPlatformsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsCreateResponse>;
    dcimPlatformsDelete(req: operations.DcimPlatformsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsDeleteResponse>;
    /**
     * dcimPlatformsList - Call to super to allow for caching
    **/
    dcimPlatformsList(req: operations.DcimPlatformsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsListResponse>;
    dcimPlatformsPartialUpdate(req: operations.DcimPlatformsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsPartialUpdateResponse>;
    /**
     * dcimPlatformsRead - Call to super to allow for caching
    **/
    dcimPlatformsRead(req: operations.DcimPlatformsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsReadResponse>;
    dcimPlatformsUpdate(req: operations.DcimPlatformsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsUpdateResponse>;
    dcimPowerConnectionsList(req: operations.DcimPowerConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerConnectionsListResponse>;
    dcimPowerFeedsCreate(req: operations.DcimPowerFeedsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsCreateResponse>;
    dcimPowerFeedsDelete(req: operations.DcimPowerFeedsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsDeleteResponse>;
    /**
     * dcimPowerFeedsList - Call to super to allow for caching
    **/
    dcimPowerFeedsList(req: operations.DcimPowerFeedsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsListResponse>;
    dcimPowerFeedsPartialUpdate(req: operations.DcimPowerFeedsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsPartialUpdateResponse>;
    /**
     * dcimPowerFeedsRead - Call to super to allow for caching
    **/
    dcimPowerFeedsRead(req: operations.DcimPowerFeedsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsReadResponse>;
    dcimPowerFeedsUpdate(req: operations.DcimPowerFeedsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsUpdateResponse>;
    dcimPowerOutletTemplatesCreate(req: operations.DcimPowerOutletTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesCreateResponse>;
    dcimPowerOutletTemplatesDelete(req: operations.DcimPowerOutletTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesDeleteResponse>;
    /**
     * dcimPowerOutletTemplatesList - Call to super to allow for caching
    **/
    dcimPowerOutletTemplatesList(req: operations.DcimPowerOutletTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesListResponse>;
    dcimPowerOutletTemplatesPartialUpdate(req: operations.DcimPowerOutletTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesPartialUpdateResponse>;
    /**
     * dcimPowerOutletTemplatesRead - Call to super to allow for caching
    **/
    dcimPowerOutletTemplatesRead(req: operations.DcimPowerOutletTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesReadResponse>;
    dcimPowerOutletTemplatesUpdate(req: operations.DcimPowerOutletTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesUpdateResponse>;
    dcimPowerOutletsCreate(req: operations.DcimPowerOutletsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsCreateResponse>;
    dcimPowerOutletsDelete(req: operations.DcimPowerOutletsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsDeleteResponse>;
    /**
     * dcimPowerOutletsList - Call to super to allow for caching
    **/
    dcimPowerOutletsList(req: operations.DcimPowerOutletsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsListResponse>;
    dcimPowerOutletsPartialUpdate(req: operations.DcimPowerOutletsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsPartialUpdateResponse>;
    /**
     * dcimPowerOutletsRead - Call to super to allow for caching
    **/
    dcimPowerOutletsRead(req: operations.DcimPowerOutletsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsReadResponse>;
    /**
     * dcimPowerOutletsTrace - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
    **/
    dcimPowerOutletsTrace(req: operations.DcimPowerOutletsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsTraceResponse>;
    dcimPowerOutletsUpdate(req: operations.DcimPowerOutletsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsUpdateResponse>;
    dcimPowerPanelsCreate(req: operations.DcimPowerPanelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsCreateResponse>;
    dcimPowerPanelsDelete(req: operations.DcimPowerPanelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsDeleteResponse>;
    /**
     * dcimPowerPanelsList - Call to super to allow for caching
    **/
    dcimPowerPanelsList(req: operations.DcimPowerPanelsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsListResponse>;
    dcimPowerPanelsPartialUpdate(req: operations.DcimPowerPanelsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsPartialUpdateResponse>;
    /**
     * dcimPowerPanelsRead - Call to super to allow for caching
    **/
    dcimPowerPanelsRead(req: operations.DcimPowerPanelsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsReadResponse>;
    dcimPowerPanelsUpdate(req: operations.DcimPowerPanelsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsUpdateResponse>;
    dcimPowerPortTemplatesCreate(req: operations.DcimPowerPortTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesCreateResponse>;
    dcimPowerPortTemplatesDelete(req: operations.DcimPowerPortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesDeleteResponse>;
    /**
     * dcimPowerPortTemplatesList - Call to super to allow for caching
    **/
    dcimPowerPortTemplatesList(req: operations.DcimPowerPortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesListResponse>;
    dcimPowerPortTemplatesPartialUpdate(req: operations.DcimPowerPortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesPartialUpdateResponse>;
    /**
     * dcimPowerPortTemplatesRead - Call to super to allow for caching
    **/
    dcimPowerPortTemplatesRead(req: operations.DcimPowerPortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesReadResponse>;
    dcimPowerPortTemplatesUpdate(req: operations.DcimPowerPortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesUpdateResponse>;
    dcimPowerPortsCreate(req: operations.DcimPowerPortsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsCreateResponse>;
    dcimPowerPortsDelete(req: operations.DcimPowerPortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsDeleteResponse>;
    /**
     * dcimPowerPortsList - Call to super to allow for caching
    **/
    dcimPowerPortsList(req: operations.DcimPowerPortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsListResponse>;
    dcimPowerPortsPartialUpdate(req: operations.DcimPowerPortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsPartialUpdateResponse>;
    /**
     * dcimPowerPortsRead - Call to super to allow for caching
    **/
    dcimPowerPortsRead(req: operations.DcimPowerPortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsReadResponse>;
    /**
     * dcimPowerPortsTrace - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
    **/
    dcimPowerPortsTrace(req: operations.DcimPowerPortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsTraceResponse>;
    dcimPowerPortsUpdate(req: operations.DcimPowerPortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsUpdateResponse>;
    dcimRackGroupsCreate(req: operations.DcimRackGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsCreateResponse>;
    dcimRackGroupsDelete(req: operations.DcimRackGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsDeleteResponse>;
    /**
     * dcimRackGroupsList - Call to super to allow for caching
    **/
    dcimRackGroupsList(req: operations.DcimRackGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsListResponse>;
    dcimRackGroupsPartialUpdate(req: operations.DcimRackGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsPartialUpdateResponse>;
    /**
     * dcimRackGroupsRead - Call to super to allow for caching
    **/
    dcimRackGroupsRead(req: operations.DcimRackGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsReadResponse>;
    dcimRackGroupsUpdate(req: operations.DcimRackGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsUpdateResponse>;
    dcimRackReservationsCreate(req: operations.DcimRackReservationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsCreateResponse>;
    dcimRackReservationsDelete(req: operations.DcimRackReservationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsDeleteResponse>;
    /**
     * dcimRackReservationsList - Call to super to allow for caching
    **/
    dcimRackReservationsList(req: operations.DcimRackReservationsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsListResponse>;
    dcimRackReservationsPartialUpdate(req: operations.DcimRackReservationsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsPartialUpdateResponse>;
    /**
     * dcimRackReservationsRead - Call to super to allow for caching
    **/
    dcimRackReservationsRead(req: operations.DcimRackReservationsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsReadResponse>;
    dcimRackReservationsUpdate(req: operations.DcimRackReservationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsUpdateResponse>;
    dcimRackRolesCreate(req: operations.DcimRackRolesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesCreateResponse>;
    dcimRackRolesDelete(req: operations.DcimRackRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesDeleteResponse>;
    /**
     * dcimRackRolesList - Call to super to allow for caching
    **/
    dcimRackRolesList(req: operations.DcimRackRolesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesListResponse>;
    dcimRackRolesPartialUpdate(req: operations.DcimRackRolesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesPartialUpdateResponse>;
    /**
     * dcimRackRolesRead - Call to super to allow for caching
    **/
    dcimRackRolesRead(req: operations.DcimRackRolesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesReadResponse>;
    dcimRackRolesUpdate(req: operations.DcimRackRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesUpdateResponse>;
    dcimRacksCreate(req: operations.DcimRacksCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksCreateResponse>;
    dcimRacksDelete(req: operations.DcimRacksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksDeleteResponse>;
    /**
     * dcimRacksElevation - Rack elevation representing the list of rack units. Also supports rendering the elevation as an SVG.
    **/
    dcimRacksElevation(req: operations.DcimRacksElevationRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksElevationResponse>;
    /**
     * dcimRacksList - Call to super to allow for caching
    **/
    dcimRacksList(req: operations.DcimRacksListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksListResponse>;
    dcimRacksPartialUpdate(req: operations.DcimRacksPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksPartialUpdateResponse>;
    /**
     * dcimRacksRead - Call to super to allow for caching
    **/
    dcimRacksRead(req: operations.DcimRacksReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksReadResponse>;
    dcimRacksUpdate(req: operations.DcimRacksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksUpdateResponse>;
    dcimRearPortTemplatesCreate(req: operations.DcimRearPortTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesCreateResponse>;
    dcimRearPortTemplatesDelete(req: operations.DcimRearPortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesDeleteResponse>;
    /**
     * dcimRearPortTemplatesList - Call to super to allow for caching
    **/
    dcimRearPortTemplatesList(req: operations.DcimRearPortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesListResponse>;
    dcimRearPortTemplatesPartialUpdate(req: operations.DcimRearPortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesPartialUpdateResponse>;
    /**
     * dcimRearPortTemplatesRead - Call to super to allow for caching
    **/
    dcimRearPortTemplatesRead(req: operations.DcimRearPortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesReadResponse>;
    dcimRearPortTemplatesUpdate(req: operations.DcimRearPortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesUpdateResponse>;
    dcimRearPortsCreate(req: operations.DcimRearPortsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsCreateResponse>;
    dcimRearPortsDelete(req: operations.DcimRearPortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsDeleteResponse>;
    /**
     * dcimRearPortsList - Call to super to allow for caching
    **/
    dcimRearPortsList(req: operations.DcimRearPortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsListResponse>;
    dcimRearPortsPartialUpdate(req: operations.DcimRearPortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsPartialUpdateResponse>;
    /**
     * dcimRearPortsRead - Call to super to allow for caching
    **/
    dcimRearPortsRead(req: operations.DcimRearPortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsReadResponse>;
    /**
     * dcimRearPortsTrace - Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
    **/
    dcimRearPortsTrace(req: operations.DcimRearPortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsTraceResponse>;
    dcimRearPortsUpdate(req: operations.DcimRearPortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsUpdateResponse>;
    dcimRegionsCreate(req: operations.DcimRegionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsCreateResponse>;
    dcimRegionsDelete(req: operations.DcimRegionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsDeleteResponse>;
    /**
     * dcimRegionsList - Call to super to allow for caching
    **/
    dcimRegionsList(req: operations.DcimRegionsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsListResponse>;
    dcimRegionsPartialUpdate(req: operations.DcimRegionsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsPartialUpdateResponse>;
    /**
     * dcimRegionsRead - Call to super to allow for caching
    **/
    dcimRegionsRead(req: operations.DcimRegionsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsReadResponse>;
    dcimRegionsUpdate(req: operations.DcimRegionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsUpdateResponse>;
    dcimSitesCreate(req: operations.DcimSitesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesCreateResponse>;
    dcimSitesDelete(req: operations.DcimSitesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesDeleteResponse>;
    /**
     * dcimSitesGraphs - A convenience method for rendering graphs for a particular site.
    **/
    dcimSitesGraphs(req: operations.DcimSitesGraphsRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesGraphsResponse>;
    /**
     * dcimSitesList - Call to super to allow for caching
    **/
    dcimSitesList(req: operations.DcimSitesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesListResponse>;
    dcimSitesPartialUpdate(req: operations.DcimSitesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesPartialUpdateResponse>;
    /**
     * dcimSitesRead - Call to super to allow for caching
    **/
    dcimSitesRead(req: operations.DcimSitesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesReadResponse>;
    dcimSitesUpdate(req: operations.DcimSitesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesUpdateResponse>;
    dcimVirtualChassisCreate(req: operations.DcimVirtualChassisCreateRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisCreateResponse>;
    dcimVirtualChassisDelete(req: operations.DcimVirtualChassisDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisDeleteResponse>;
    /**
     * dcimVirtualChassisList - Call to super to allow for caching
    **/
    dcimVirtualChassisList(req: operations.DcimVirtualChassisListRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisListResponse>;
    dcimVirtualChassisPartialUpdate(req: operations.DcimVirtualChassisPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisPartialUpdateResponse>;
    /**
     * dcimVirtualChassisRead - Call to super to allow for caching
    **/
    dcimVirtualChassisRead(req: operations.DcimVirtualChassisReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisReadResponse>;
    dcimVirtualChassisUpdate(req: operations.DcimVirtualChassisUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisUpdateResponse>;
    extrasCustomFieldChoicesList(config?: AxiosRequestConfig): Promise<operations.ExtrasCustomFieldChoicesListResponse>;
    extrasCustomFieldChoicesRead(req: operations.ExtrasCustomFieldChoicesReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasCustomFieldChoicesReadResponse>;
    extrasConfigContextsCreate(req: operations.ExtrasConfigContextsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsCreateResponse>;
    extrasConfigContextsDelete(req: operations.ExtrasConfigContextsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsDeleteResponse>;
    /**
     * extrasConfigContextsList - Call to super to allow for caching
    **/
    extrasConfigContextsList(req: operations.ExtrasConfigContextsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsListResponse>;
    extrasConfigContextsPartialUpdate(req: operations.ExtrasConfigContextsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsPartialUpdateResponse>;
    /**
     * extrasConfigContextsRead - Call to super to allow for caching
    **/
    extrasConfigContextsRead(req: operations.ExtrasConfigContextsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsReadResponse>;
    extrasConfigContextsUpdate(req: operations.ExtrasConfigContextsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsUpdateResponse>;
    extrasExportTemplatesCreate(req: operations.ExtrasExportTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesCreateResponse>;
    extrasExportTemplatesDelete(req: operations.ExtrasExportTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesDeleteResponse>;
    /**
     * extrasExportTemplatesList - Call to super to allow for caching
    **/
    extrasExportTemplatesList(req: operations.ExtrasExportTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesListResponse>;
    extrasExportTemplatesPartialUpdate(req: operations.ExtrasExportTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesPartialUpdateResponse>;
    /**
     * extrasExportTemplatesRead - Call to super to allow for caching
    **/
    extrasExportTemplatesRead(req: operations.ExtrasExportTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesReadResponse>;
    extrasExportTemplatesUpdate(req: operations.ExtrasExportTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesUpdateResponse>;
    extrasGraphsCreate(req: operations.ExtrasGraphsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsCreateResponse>;
    extrasGraphsDelete(req: operations.ExtrasGraphsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsDeleteResponse>;
    /**
     * extrasGraphsList - Call to super to allow for caching
    **/
    extrasGraphsList(req: operations.ExtrasGraphsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsListResponse>;
    extrasGraphsPartialUpdate(req: operations.ExtrasGraphsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsPartialUpdateResponse>;
    /**
     * extrasGraphsRead - Call to super to allow for caching
    **/
    extrasGraphsRead(req: operations.ExtrasGraphsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsReadResponse>;
    extrasGraphsUpdate(req: operations.ExtrasGraphsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsUpdateResponse>;
    extrasImageAttachmentsCreate(req: operations.ExtrasImageAttachmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsCreateResponse>;
    extrasImageAttachmentsDelete(req: operations.ExtrasImageAttachmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsDeleteResponse>;
    /**
     * extrasImageAttachmentsList - Call to super to allow for caching
    **/
    extrasImageAttachmentsList(req: operations.ExtrasImageAttachmentsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsListResponse>;
    extrasImageAttachmentsPartialUpdate(req: operations.ExtrasImageAttachmentsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsPartialUpdateResponse>;
    /**
     * extrasImageAttachmentsRead - Call to super to allow for caching
    **/
    extrasImageAttachmentsRead(req: operations.ExtrasImageAttachmentsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsReadResponse>;
    extrasImageAttachmentsUpdate(req: operations.ExtrasImageAttachmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsUpdateResponse>;
    /**
     * extrasObjectChangesList - Retrieve a list of recent changes.
    **/
    extrasObjectChangesList(req: operations.ExtrasObjectChangesListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasObjectChangesListResponse>;
    /**
     * extrasObjectChangesRead - Retrieve a list of recent changes.
    **/
    extrasObjectChangesRead(req: operations.ExtrasObjectChangesReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasObjectChangesReadResponse>;
    /**
     * extrasReportsList - Compile all reports and their related results (if any). Result data is deferred in the list view.
    **/
    extrasReportsList(config?: AxiosRequestConfig): Promise<operations.ExtrasReportsListResponse>;
    /**
     * extrasReportsRead - Retrieve a single Report identified as "<module>.<report>".
    **/
    extrasReportsRead(req: operations.ExtrasReportsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasReportsReadResponse>;
    /**
     * extrasReportsRun - Run a Report and create a new ReportResult, overwriting any previous result for the Report.
    **/
    extrasReportsRun(req: operations.ExtrasReportsRunRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasReportsRunResponse>;
    extrasScriptsList(config?: AxiosRequestConfig): Promise<operations.ExtrasScriptsListResponse>;
    extrasScriptsRead(req: operations.ExtrasScriptsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasScriptsReadResponse>;
    extrasTagsCreate(req: operations.ExtrasTagsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsCreateResponse>;
    extrasTagsDelete(req: operations.ExtrasTagsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsDeleteResponse>;
    /**
     * extrasTagsList - Call to super to allow for caching
    **/
    extrasTagsList(req: operations.ExtrasTagsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsListResponse>;
    extrasTagsPartialUpdate(req: operations.ExtrasTagsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsPartialUpdateResponse>;
    /**
     * extrasTagsRead - Call to super to allow for caching
    **/
    extrasTagsRead(req: operations.ExtrasTagsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsReadResponse>;
    extrasTagsUpdate(req: operations.ExtrasTagsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsUpdateResponse>;
    ipamAggregatesCreate(req: operations.IpamAggregatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesCreateResponse>;
    ipamAggregatesDelete(req: operations.IpamAggregatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesDeleteResponse>;
    /**
     * ipamAggregatesList - Call to super to allow for caching
    **/
    ipamAggregatesList(req: operations.IpamAggregatesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesListResponse>;
    ipamAggregatesPartialUpdate(req: operations.IpamAggregatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesPartialUpdateResponse>;
    /**
     * ipamAggregatesRead - Call to super to allow for caching
    **/
    ipamAggregatesRead(req: operations.IpamAggregatesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesReadResponse>;
    ipamAggregatesUpdate(req: operations.IpamAggregatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesUpdateResponse>;
    ipamIpAddressesCreate(req: operations.IpamIpAddressesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesCreateResponse>;
    ipamIpAddressesDelete(req: operations.IpamIpAddressesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesDeleteResponse>;
    /**
     * ipamIpAddressesList - Call to super to allow for caching
    **/
    ipamIpAddressesList(req: operations.IpamIpAddressesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesListResponse>;
    ipamIpAddressesPartialUpdate(req: operations.IpamIpAddressesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesPartialUpdateResponse>;
    /**
     * ipamIpAddressesRead - Call to super to allow for caching
    **/
    ipamIpAddressesRead(req: operations.IpamIpAddressesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesReadResponse>;
    ipamIpAddressesUpdate(req: operations.IpamIpAddressesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesUpdateResponse>;
    /**
     * ipamPrefixesAvailableIpsCreate - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
     * returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
     * however results will not be paginated.
     *
     * The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
     * invoked in parallel, which results in a race condition where multiple insertions can occur.
    **/
    ipamPrefixesAvailableIpsCreate(req: operations.IpamPrefixesAvailableIpsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailableIpsCreateResponse>;
    /**
     * ipamPrefixesAvailableIpsRead - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
     * returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
     * however results will not be paginated.
     *
     * The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
     * invoked in parallel, which results in a race condition where multiple insertions can occur.
    **/
    ipamPrefixesAvailableIpsRead(req: operations.IpamPrefixesAvailableIpsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailableIpsReadResponse>;
    /**
     * ipamPrefixesAvailablePrefixesCreate - A convenience method for returning available child prefixes within a parent.
     *
     * The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
     * invoked in parallel, which results in a race condition where multiple insertions can occur.
    **/
    ipamPrefixesAvailablePrefixesCreate(req: operations.IpamPrefixesAvailablePrefixesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailablePrefixesCreateResponse>;
    /**
     * ipamPrefixesAvailablePrefixesRead - A convenience method for returning available child prefixes within a parent.
     *
     * The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
     * invoked in parallel, which results in a race condition where multiple insertions can occur.
    **/
    ipamPrefixesAvailablePrefixesRead(req: operations.IpamPrefixesAvailablePrefixesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailablePrefixesReadResponse>;
    ipamPrefixesCreate(req: operations.IpamPrefixesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesCreateResponse>;
    ipamPrefixesDelete(req: operations.IpamPrefixesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesDeleteResponse>;
    /**
     * ipamPrefixesList - Call to super to allow for caching
    **/
    ipamPrefixesList(req: operations.IpamPrefixesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesListResponse>;
    ipamPrefixesPartialUpdate(req: operations.IpamPrefixesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesPartialUpdateResponse>;
    /**
     * ipamPrefixesRead - Call to super to allow for caching
    **/
    ipamPrefixesRead(req: operations.IpamPrefixesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesReadResponse>;
    ipamPrefixesUpdate(req: operations.IpamPrefixesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesUpdateResponse>;
    ipamRirsCreate(req: operations.IpamRirsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsCreateResponse>;
    ipamRirsDelete(req: operations.IpamRirsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsDeleteResponse>;
    /**
     * ipamRirsList - Call to super to allow for caching
    **/
    ipamRirsList(req: operations.IpamRirsListRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsListResponse>;
    ipamRirsPartialUpdate(req: operations.IpamRirsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsPartialUpdateResponse>;
    /**
     * ipamRirsRead - Call to super to allow for caching
    **/
    ipamRirsRead(req: operations.IpamRirsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsReadResponse>;
    ipamRirsUpdate(req: operations.IpamRirsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsUpdateResponse>;
    ipamRolesCreate(req: operations.IpamRolesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesCreateResponse>;
    ipamRolesDelete(req: operations.IpamRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesDeleteResponse>;
    /**
     * ipamRolesList - Call to super to allow for caching
    **/
    ipamRolesList(req: operations.IpamRolesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesListResponse>;
    ipamRolesPartialUpdate(req: operations.IpamRolesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesPartialUpdateResponse>;
    /**
     * ipamRolesRead - Call to super to allow for caching
    **/
    ipamRolesRead(req: operations.IpamRolesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesReadResponse>;
    ipamRolesUpdate(req: operations.IpamRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesUpdateResponse>;
    ipamServicesCreate(req: operations.IpamServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesCreateResponse>;
    ipamServicesDelete(req: operations.IpamServicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesDeleteResponse>;
    /**
     * ipamServicesList - Call to super to allow for caching
    **/
    ipamServicesList(req: operations.IpamServicesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesListResponse>;
    ipamServicesPartialUpdate(req: operations.IpamServicesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesPartialUpdateResponse>;
    /**
     * ipamServicesRead - Call to super to allow for caching
    **/
    ipamServicesRead(req: operations.IpamServicesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesReadResponse>;
    ipamServicesUpdate(req: operations.IpamServicesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesUpdateResponse>;
    ipamVlanGroupsCreate(req: operations.IpamVlanGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsCreateResponse>;
    ipamVlanGroupsDelete(req: operations.IpamVlanGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsDeleteResponse>;
    /**
     * ipamVlanGroupsList - Call to super to allow for caching
    **/
    ipamVlanGroupsList(req: operations.IpamVlanGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsListResponse>;
    ipamVlanGroupsPartialUpdate(req: operations.IpamVlanGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsPartialUpdateResponse>;
    /**
     * ipamVlanGroupsRead - Call to super to allow for caching
    **/
    ipamVlanGroupsRead(req: operations.IpamVlanGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsReadResponse>;
    ipamVlanGroupsUpdate(req: operations.IpamVlanGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsUpdateResponse>;
    ipamVlansCreate(req: operations.IpamVlansCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansCreateResponse>;
    ipamVlansDelete(req: operations.IpamVlansDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansDeleteResponse>;
    /**
     * ipamVlansList - Call to super to allow for caching
    **/
    ipamVlansList(req: operations.IpamVlansListRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansListResponse>;
    ipamVlansPartialUpdate(req: operations.IpamVlansPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansPartialUpdateResponse>;
    /**
     * ipamVlansRead - Call to super to allow for caching
    **/
    ipamVlansRead(req: operations.IpamVlansReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansReadResponse>;
    ipamVlansUpdate(req: operations.IpamVlansUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansUpdateResponse>;
    ipamVrfsCreate(req: operations.IpamVrfsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsCreateResponse>;
    ipamVrfsDelete(req: operations.IpamVrfsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsDeleteResponse>;
    /**
     * ipamVrfsList - Call to super to allow for caching
    **/
    ipamVrfsList(req: operations.IpamVrfsListRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsListResponse>;
    ipamVrfsPartialUpdate(req: operations.IpamVrfsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsPartialUpdateResponse>;
    /**
     * ipamVrfsRead - Call to super to allow for caching
    **/
    ipamVrfsRead(req: operations.IpamVrfsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsReadResponse>;
    ipamVrfsUpdate(req: operations.IpamVrfsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsUpdateResponse>;
    /**
     * secretsGenerateRsaKeyPairList - This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.
     *
     * {
     *         "public_key": "<public key>",
     *         "private_key": "<private key>"
     *     }
    **/
    secretsGenerateRsaKeyPairList(config?: AxiosRequestConfig): Promise<operations.SecretsGenerateRsaKeyPairListResponse>;
    /**
     * secretsGetSessionKeyCreate - Retrieve a temporary session key to use for encrypting and decrypting secrets via the API. The user's private RSA
     * key is POSTed with the name `private_key`. An example:
     *
     *     curl -v -X POST -H "Authorization: Token <token>" -H "Accept: application/json; indent=4" \
     *     --data-urlencode "private_key@<filename>" https://netbox/api/secrets/get-session-key/
     *
     * This request will yield a base64-encoded session key to be included in an `X-Session-Key` header in future requests:
     *
     *     {
     *         "session_key": "+8t4SI6XikgVmB5+/urhozx9O5qCQANyOk1MNe6taRf="
     *     }
     *
     * This endpoint accepts one optional parameter: `preserve_key`. If True and a session key exists, the existing session
     * key will be returned instead of a new one.
    **/
    secretsGetSessionKeyCreate(config?: AxiosRequestConfig): Promise<operations.SecretsGetSessionKeyCreateResponse>;
    secretsSecretRolesCreate(req: operations.SecretsSecretRolesCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesCreateResponse>;
    secretsSecretRolesDelete(req: operations.SecretsSecretRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesDeleteResponse>;
    /**
     * secretsSecretRolesList - Call to super to allow for caching
    **/
    secretsSecretRolesList(req: operations.SecretsSecretRolesListRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesListResponse>;
    secretsSecretRolesPartialUpdate(req: operations.SecretsSecretRolesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesPartialUpdateResponse>;
    /**
     * secretsSecretRolesRead - Call to super to allow for caching
    **/
    secretsSecretRolesRead(req: operations.SecretsSecretRolesReadRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesReadResponse>;
    secretsSecretRolesUpdate(req: operations.SecretsSecretRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesUpdateResponse>;
    secretsSecretsCreate(req: operations.SecretsSecretsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsCreateResponse>;
    secretsSecretsDelete(req: operations.SecretsSecretsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsDeleteResponse>;
    secretsSecretsList(req: operations.SecretsSecretsListRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsListResponse>;
    secretsSecretsPartialUpdate(req: operations.SecretsSecretsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsPartialUpdateResponse>;
    secretsSecretsRead(req: operations.SecretsSecretsReadRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsReadResponse>;
    secretsSecretsUpdate(req: operations.SecretsSecretsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsUpdateResponse>;
    tenancyTenantGroupsCreate(req: operations.TenancyTenantGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsCreateResponse>;
    tenancyTenantGroupsDelete(req: operations.TenancyTenantGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsDeleteResponse>;
    /**
     * tenancyTenantGroupsList - Call to super to allow for caching
    **/
    tenancyTenantGroupsList(req: operations.TenancyTenantGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsListResponse>;
    tenancyTenantGroupsPartialUpdate(req: operations.TenancyTenantGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsPartialUpdateResponse>;
    /**
     * tenancyTenantGroupsRead - Call to super to allow for caching
    **/
    tenancyTenantGroupsRead(req: operations.TenancyTenantGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsReadResponse>;
    tenancyTenantGroupsUpdate(req: operations.TenancyTenantGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsUpdateResponse>;
    tenancyTenantsCreate(req: operations.TenancyTenantsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsCreateResponse>;
    tenancyTenantsDelete(req: operations.TenancyTenantsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsDeleteResponse>;
    /**
     * tenancyTenantsList - Call to super to allow for caching
    **/
    tenancyTenantsList(req: operations.TenancyTenantsListRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsListResponse>;
    tenancyTenantsPartialUpdate(req: operations.TenancyTenantsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsPartialUpdateResponse>;
    /**
     * tenancyTenantsRead - Call to super to allow for caching
    **/
    tenancyTenantsRead(req: operations.TenancyTenantsReadRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsReadResponse>;
    tenancyTenantsUpdate(req: operations.TenancyTenantsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsUpdateResponse>;
    virtualizationClusterGroupsCreate(req: operations.VirtualizationClusterGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsCreateResponse>;
    virtualizationClusterGroupsDelete(req: operations.VirtualizationClusterGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsDeleteResponse>;
    /**
     * virtualizationClusterGroupsList - Call to super to allow for caching
    **/
    virtualizationClusterGroupsList(req: operations.VirtualizationClusterGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsListResponse>;
    virtualizationClusterGroupsPartialUpdate(req: operations.VirtualizationClusterGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsPartialUpdateResponse>;
    /**
     * virtualizationClusterGroupsRead - Call to super to allow for caching
    **/
    virtualizationClusterGroupsRead(req: operations.VirtualizationClusterGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsReadResponse>;
    virtualizationClusterGroupsUpdate(req: operations.VirtualizationClusterGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsUpdateResponse>;
    virtualizationClusterTypesCreate(req: operations.VirtualizationClusterTypesCreateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesCreateResponse>;
    virtualizationClusterTypesDelete(req: operations.VirtualizationClusterTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesDeleteResponse>;
    /**
     * virtualizationClusterTypesList - Call to super to allow for caching
    **/
    virtualizationClusterTypesList(req: operations.VirtualizationClusterTypesListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesListResponse>;
    virtualizationClusterTypesPartialUpdate(req: operations.VirtualizationClusterTypesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesPartialUpdateResponse>;
    /**
     * virtualizationClusterTypesRead - Call to super to allow for caching
    **/
    virtualizationClusterTypesRead(req: operations.VirtualizationClusterTypesReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesReadResponse>;
    virtualizationClusterTypesUpdate(req: operations.VirtualizationClusterTypesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesUpdateResponse>;
    virtualizationClustersCreate(req: operations.VirtualizationClustersCreateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersCreateResponse>;
    virtualizationClustersDelete(req: operations.VirtualizationClustersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersDeleteResponse>;
    /**
     * virtualizationClustersList - Call to super to allow for caching
    **/
    virtualizationClustersList(req: operations.VirtualizationClustersListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersListResponse>;
    virtualizationClustersPartialUpdate(req: operations.VirtualizationClustersPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersPartialUpdateResponse>;
    /**
     * virtualizationClustersRead - Call to super to allow for caching
    **/
    virtualizationClustersRead(req: operations.VirtualizationClustersReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersReadResponse>;
    virtualizationClustersUpdate(req: operations.VirtualizationClustersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersUpdateResponse>;
    virtualizationInterfacesCreate(req: operations.VirtualizationInterfacesCreateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesCreateResponse>;
    virtualizationInterfacesDelete(req: operations.VirtualizationInterfacesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesDeleteResponse>;
    /**
     * virtualizationInterfacesList - Call to super to allow for caching
    **/
    virtualizationInterfacesList(req: operations.VirtualizationInterfacesListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesListResponse>;
    virtualizationInterfacesPartialUpdate(req: operations.VirtualizationInterfacesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesPartialUpdateResponse>;
    /**
     * virtualizationInterfacesRead - Call to super to allow for caching
    **/
    virtualizationInterfacesRead(req: operations.VirtualizationInterfacesReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesReadResponse>;
    virtualizationInterfacesUpdate(req: operations.VirtualizationInterfacesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesUpdateResponse>;
    virtualizationVirtualMachinesCreate(req: operations.VirtualizationVirtualMachinesCreateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesCreateResponse>;
    virtualizationVirtualMachinesDelete(req: operations.VirtualizationVirtualMachinesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesDeleteResponse>;
    /**
     * virtualizationVirtualMachinesList - Call to super to allow for caching
    **/
    virtualizationVirtualMachinesList(req: operations.VirtualizationVirtualMachinesListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesListResponse>;
    virtualizationVirtualMachinesPartialUpdate(req: operations.VirtualizationVirtualMachinesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesPartialUpdateResponse>;
    /**
     * virtualizationVirtualMachinesRead - Call to super to allow for caching
    **/
    virtualizationVirtualMachinesRead(req: operations.VirtualizationVirtualMachinesReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesReadResponse>;
    virtualizationVirtualMachinesUpdate(req: operations.VirtualizationVirtualMachinesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesUpdateResponse>;
}
export {};
