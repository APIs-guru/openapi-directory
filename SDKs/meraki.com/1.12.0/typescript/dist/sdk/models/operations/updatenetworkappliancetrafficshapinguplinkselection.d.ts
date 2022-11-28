import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum {
    PoorPerformance = "poorPerformance",
    UplinkDown = "uplinkDown"
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum {
    VoIp = "VoIP"
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum {
    Builtin = "builtin",
    Custom = "custom"
}
/**
 * Performance class setting for this uplink preference rule
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass extends SpeakeasyBase {
    builtinPerformanceClassName?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
    customPerformanceClassId?: string;
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2",
    BestForVoIp = "bestForVoIP",
    LoadBalancing = "loadBalancing",
    DefaultUplink = "defaultUplink"
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    ApplicationCategory = "applicationCategory",
    Application = "application",
    Custom = "custom"
}
/**
 * Destination of this custom type traffic filter
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
    cidr?: string;
    fqdn?: string;
    host?: number;
    network?: string;
    port?: string;
    vlan?: number;
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}
/**
 * Source of this custom type traffic filter
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
    cidr?: string;
    host?: number;
    network?: string;
    port?: string;
    vlan?: number;
}
/**
 * Value object of this traffic filter
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
    destination?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
    id?: string;
    protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
    source?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
    value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences extends SpeakeasyBase {
    failOverCriterion?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;
    performanceClass?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;
    preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;
    trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[];
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    Custom = "custom"
}
/**
 * Destination of this custom type traffic filter
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
    cidr?: string;
    port?: string;
}
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Any = "any"
}
/**
 * Source of this custom type traffic filter
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
    cidr?: string;
    host?: number;
    port?: string;
    vlan?: number;
}
/**
 * Value object of this traffic filter
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
    destination: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
    protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
    source: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
    value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences extends SpeakeasyBase {
    preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;
    trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[];
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody extends SpeakeasyBase {
    activeActiveAutoVpnEnabled?: boolean;
    defaultUplink?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;
    loadBalancingEnabled?: boolean;
    vpnTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences[];
    wanTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences[];
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams;
    request?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJsonObject?: Map<string, any>;
}
