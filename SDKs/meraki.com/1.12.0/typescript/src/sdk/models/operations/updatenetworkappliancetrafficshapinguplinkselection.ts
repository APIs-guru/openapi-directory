import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum {
    Wan1 = "wan1"
,    Wan2 = "wan2"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum {
    PoorPerformance = "poorPerformance"
,    UplinkDown = "uplinkDown"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum {
    VoIp = "VoIP"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum {
    Builtin = "builtin"
,    Custom = "custom"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass
/** 
 * Performance class setting for this uplink preference rule
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass extends SpeakeasyBase {
  @Metadata({ data: "json, name=builtinPerformanceClassName" })
  builtinPerformanceClassName?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;

  @Metadata({ data: "json, name=customPerformanceClassId" })
  customPerformanceClassId?: string;

  @Metadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum {
    Wan1 = "wan1"
,    Wan2 = "wan2"
,    BestForVoIp = "bestForVoIP"
,    LoadBalancing = "loadBalancing"
,    DefaultUplink = "defaultUplink"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    ApplicationCategory = "applicationCategory"
,    Application = "application"
,    Custom = "custom"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination
/** 
 * Destination of this custom type traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidr" })
  cidr?: string;

  @Metadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @Metadata({ data: "json, name=host" })
  host?: number;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Any = "any"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource
/** 
 * Source of this custom type traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidr" })
  cidr?: string;

  @Metadata({ data: "json, name=host" })
  host?: number;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue
/** 
 * Value object of this traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;

  @Metadata({ data: "json, name=source" })
  source?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=failOverCriterion" })
  failOverCriterion?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;

  @Metadata({ data: "json, name=performanceClass" })
  performanceClass?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;

  @Metadata({ data: "json, name=preferredUplink" })
  preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;

  @Metadata({ data: "json, name=trafficFilters", elemType: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters })
  trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[];
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum {
    Wan1 = "wan1"
,    Wan2 = "wan2"
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    Custom = "custom"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination
/** 
 * Destination of this custom type traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidr" })
  cidr?: string;

  @Metadata({ data: "json, name=port" })
  port?: string;
}

export enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Any = "any"
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource
/** 
 * Source of this custom type traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidr" })
  cidr?: string;

  @Metadata({ data: "json, name=host" })
  host?: number;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue
/** 
 * Value object of this traffic filter
**/
export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;

  @Metadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;

  @Metadata({ data: "json, name=source" })
  source: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=preferredUplink" })
  preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;

  @Metadata({ data: "json, name=trafficFilters", elemType: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters })
  trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[];
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeActiveAutoVpnEnabled" })
  activeActiveAutoVpnEnabled?: boolean;

  @Metadata({ data: "json, name=defaultUplink" })
  defaultUplink?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;

  @Metadata({ data: "json, name=loadBalancingEnabled" })
  loadBalancingEnabled?: boolean;

  @Metadata({ data: "json, name=vpnTrafficUplinkPreferences", elemType: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences })
  vpnTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences[];

  @Metadata({ data: "json, name=wanTrafficUplinkPreferences", elemType: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences })
  wanTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences[];
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJsonObject?: Map<string, any>;
}
