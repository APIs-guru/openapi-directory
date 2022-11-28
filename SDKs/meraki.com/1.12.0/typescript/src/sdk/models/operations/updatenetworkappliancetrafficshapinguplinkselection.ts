import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum {
    PoorPerformance = "poorPerformance",
    UplinkDown = "uplinkDown"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum {
    VoIp = "VoIP"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum {
    Builtin = "builtin",
    Custom = "custom"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass
/** 
 * Performance class setting for this uplink preference rule
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtinPerformanceClassName" })
  builtinPerformanceClassName?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;

  @SpeakeasyMetadata({ data: "json, name=customPerformanceClassId" })
  customPerformanceClassId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2",
    BestForVoIp = "bestForVoIP",
    LoadBalancing = "loadBalancing",
    DefaultUplink = "defaultUplink"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    ApplicationCategory = "applicationCategory",
    Application = "application",
    Custom = "custom"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination
/** 
 * Destination of this custom type traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: number;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource
/** 
 * Source of this custom type traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: number;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue
/** 
 * Value object of this traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failOverCriterion" })
  failOverCriterion?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;

  @SpeakeasyMetadata({ data: "json, name=performanceClass" })
  performanceClass?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;

  @SpeakeasyMetadata({ data: "json, name=preferredUplink" })
  preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;

  @SpeakeasyMetadata({ data: "json, name=trafficFilters", elemType: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters })
  trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[];
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    Custom = "custom"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination
/** 
 * Destination of this custom type traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Any = "any"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource
/** 
 * Source of this custom type traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: number;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue
/** 
 * Value object of this traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=preferredUplink" })
  preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;

  @SpeakeasyMetadata({ data: "json, name=trafficFilters", elemType: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters })
  trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[];
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeActiveAutoVpnEnabled" })
  activeActiveAutoVpnEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultUplink" })
  defaultUplink?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;

  @SpeakeasyMetadata({ data: "json, name=loadBalancingEnabled" })
  loadBalancingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vpnTrafficUplinkPreferences", elemType: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences })
  vpnTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences[];

  @SpeakeasyMetadata({ data: "json, name=wanTrafficUplinkPreferences", elemType: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences })
  wanTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences[];
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJsonObject?: Map<string, any>;
}
