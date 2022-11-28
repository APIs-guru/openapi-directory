import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetServersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetServersId200ApplicationJsonServerDatacenterLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
/**
 * The Server types the Datacenter can handle
**/
export declare class GetServersId200ApplicationJsonServerDatacenterServerTypes extends SpeakeasyBase {
    available: number[];
    availableForMigration: number[];
    supported: number[];
}
/**
 * Datacenter this Resource is located at
**/
export declare class GetServersId200ApplicationJsonServerDatacenter extends SpeakeasyBase {
    description: string;
    id: number;
    location: GetServersId200ApplicationJsonServerDatacenterLocation;
    name: string;
    serverTypes: GetServersId200ApplicationJsonServerDatacenterServerTypes;
}
/**
 * Information about the Server the Image was created from
**/
export declare class GetServersId200ApplicationJsonServerImageCreatedFrom extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare enum GetServersId200ApplicationJsonServerImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
**/
export declare class GetServersId200ApplicationJsonServerImageProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum GetServersId200ApplicationJsonServerImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
export declare enum GetServersId200ApplicationJsonServerImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class GetServersId200ApplicationJsonServerImage extends SpeakeasyBase {
    boundTo: number;
    buildId?: string;
    created: string;
    createdFrom: GetServersId200ApplicationJsonServerImageCreatedFrom;
    deleted: string;
    deprecated: string;
    description: string;
    diskSize: number;
    id: number;
    imageSize: number;
    labels: Map<string, string>;
    name: string;
    osFlavor: GetServersId200ApplicationJsonServerImageOsFlavorEnum;
    osVersion: string;
    protection: GetServersId200ApplicationJsonServerImageProtection;
    rapidDeploy?: boolean;
    status: GetServersId200ApplicationJsonServerImageStatusEnum;
    type: GetServersId200ApplicationJsonServerImageTypeEnum;
}
export declare enum GetServersId200ApplicationJsonServerIsoTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export declare class GetServersId200ApplicationJsonServerIso extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    name: string;
    type: GetServersId200ApplicationJsonServerIsoTypeEnum;
}
export declare enum GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}
export declare class GetServersId200ApplicationJsonServerPlacementGroupNullable extends SpeakeasyBase {
    created: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    servers: number[];
    type: GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum;
}
export declare class GetServersId200ApplicationJsonServerPrivateNet extends SpeakeasyBase {
    aliasIps?: string[];
    ip?: string;
    macAddress?: string;
    network?: number;
}
/**
 * Protection configuration for the Server
**/
export declare class GetServersId200ApplicationJsonServerProtection extends SpeakeasyBase {
    delete: boolean;
    rebuild: boolean;
}
export declare enum GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}
export declare class GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
    id?: number;
    status?: GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum;
}
/**
 * IP address (v4) and its reverse DNS entry of this Server
**/
export declare class GetServersId200ApplicationJsonServerPublicNetIpv4 extends SpeakeasyBase {
    blocked: boolean;
    dnsPtr: string;
    ip: string;
}
export declare class GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export declare class GetServersId200ApplicationJsonServerPublicNetIpv6 extends SpeakeasyBase {
    blocked: boolean;
    dnsPtr: GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[];
    ip: string;
}
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export declare class GetServersId200ApplicationJsonServerPublicNet extends SpeakeasyBase {
    firewalls?: GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[];
    floatingIps: number[];
    ipv4: GetServersId200ApplicationJsonServerPublicNetIpv4;
    ipv6: GetServersId200ApplicationJsonServerPublicNetIpv6;
}
export declare enum GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
**/
export declare class GetServersId200ApplicationJsonServerServerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Server type in this Location
**/
export declare class GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetServersId200ApplicationJsonServerServerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetServersId200ApplicationJsonServerServerTypePricesPriceHourly;
    priceMonthly: GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly;
}
export declare enum GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export declare class GetServersId200ApplicationJsonServerServerType extends SpeakeasyBase {
    cores: number;
    cpuType: GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum;
    deprecated: boolean;
    description: string;
    disk: number;
    id: number;
    memory: number;
    name: string;
    prices: GetServersId200ApplicationJsonServerServerTypePrices[];
    storageType: GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum;
}
export declare enum GetServersId200ApplicationJsonServerStatusEnum {
    Running = "running",
    Initializing = "initializing",
    Starting = "starting",
    Stopping = "stopping",
    Off = "off",
    Deleting = "deleting",
    Migrating = "migrating",
    Rebuilding = "rebuilding",
    Unknown = "unknown"
}
export declare class GetServersId200ApplicationJsonServer extends SpeakeasyBase {
    backupWindow: string;
    created: string;
    datacenter: GetServersId200ApplicationJsonServerDatacenter;
    id: number;
    image: GetServersId200ApplicationJsonServerImage;
    includedTraffic: number;
    ingoingTraffic: number;
    iso: GetServersId200ApplicationJsonServerIso;
    labels: Map<string, string>;
    loadBalancers?: number[];
    locked: boolean;
    name: string;
    outgoingTraffic: number;
    placementGroup?: GetServersId200ApplicationJsonServerPlacementGroupNullable;
    primaryDiskSize: number;
    privateNet: GetServersId200ApplicationJsonServerPrivateNet[];
    protection: GetServersId200ApplicationJsonServerProtection;
    publicNet: GetServersId200ApplicationJsonServerPublicNet;
    rescueEnabled: boolean;
    serverType: GetServersId200ApplicationJsonServerServerType;
    status: GetServersId200ApplicationJsonServerStatusEnum;
    volumes?: number[];
}
export declare class GetServersId200ApplicationJson extends SpeakeasyBase {
    server?: GetServersId200ApplicationJsonServer;
}
export declare class GetServersIdRequest extends SpeakeasyBase {
    pathParams: GetServersIdPathParams;
}
export declare class GetServersIdResponse extends SpeakeasyBase {
    contentType: string;
    getServersId200ApplicationJsonObject?: GetServersId200ApplicationJson;
    statusCode: number;
}
