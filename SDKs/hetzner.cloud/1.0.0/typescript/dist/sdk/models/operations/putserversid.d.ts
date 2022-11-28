import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutServersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutServersIdUpdateServerRequest extends SpeakeasyBase {
    labels?: Map<string, any>;
    name?: string;
}
export declare class PutServersId200ApplicationJsonServerDatacenterLocation extends SpeakeasyBase {
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
export declare class PutServersId200ApplicationJsonServerDatacenterServerTypes extends SpeakeasyBase {
    available: number[];
    availableForMigration: number[];
    supported: number[];
}
/**
 * Datacenter this Resource is located at
**/
export declare class PutServersId200ApplicationJsonServerDatacenter extends SpeakeasyBase {
    description: string;
    id: number;
    location: PutServersId200ApplicationJsonServerDatacenterLocation;
    name: string;
    serverTypes: PutServersId200ApplicationJsonServerDatacenterServerTypes;
}
/**
 * Information about the Server the Image was created from
**/
export declare class PutServersId200ApplicationJsonServerImageCreatedFrom extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare enum PutServersId200ApplicationJsonServerImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
**/
export declare class PutServersId200ApplicationJsonServerImageProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum PutServersId200ApplicationJsonServerImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
export declare enum PutServersId200ApplicationJsonServerImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class PutServersId200ApplicationJsonServerImage extends SpeakeasyBase {
    boundTo: number;
    buildId?: string;
    created: string;
    createdFrom: PutServersId200ApplicationJsonServerImageCreatedFrom;
    deleted: string;
    deprecated: string;
    description: string;
    diskSize: number;
    id: number;
    imageSize: number;
    labels: Map<string, string>;
    name: string;
    osFlavor: PutServersId200ApplicationJsonServerImageOsFlavorEnum;
    osVersion: string;
    protection: PutServersId200ApplicationJsonServerImageProtection;
    rapidDeploy?: boolean;
    status: PutServersId200ApplicationJsonServerImageStatusEnum;
    type: PutServersId200ApplicationJsonServerImageTypeEnum;
}
export declare enum PutServersId200ApplicationJsonServerIsoTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export declare class PutServersId200ApplicationJsonServerIso extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    name: string;
    type: PutServersId200ApplicationJsonServerIsoTypeEnum;
}
export declare enum PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}
export declare class PutServersId200ApplicationJsonServerPlacementGroupNullable extends SpeakeasyBase {
    created: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    servers: number[];
    type: PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum;
}
export declare class PutServersId200ApplicationJsonServerPrivateNet extends SpeakeasyBase {
    aliasIps?: string[];
    ip?: string;
    macAddress?: string;
    network?: number;
}
/**
 * Protection configuration for the Server
**/
export declare class PutServersId200ApplicationJsonServerProtection extends SpeakeasyBase {
    delete: boolean;
    rebuild: boolean;
}
export declare enum PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}
export declare class PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
    id?: number;
    status?: PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum;
}
/**
 * IP address (v4) and its reverse DNS entry of this Server
**/
export declare class PutServersId200ApplicationJsonServerPublicNetIpv4 extends SpeakeasyBase {
    blocked: boolean;
    dnsPtr: string;
    ip: string;
}
export declare class PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export declare class PutServersId200ApplicationJsonServerPublicNetIpv6 extends SpeakeasyBase {
    blocked: boolean;
    dnsPtr: PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[];
    ip: string;
}
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export declare class PutServersId200ApplicationJsonServerPublicNet extends SpeakeasyBase {
    firewalls?: PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[];
    floatingIps: number[];
    ipv4: PutServersId200ApplicationJsonServerPublicNetIpv4;
    ipv6: PutServersId200ApplicationJsonServerPublicNetIpv6;
}
export declare enum PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
**/
export declare class PutServersId200ApplicationJsonServerServerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Server type in this Location
**/
export declare class PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class PutServersId200ApplicationJsonServerServerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: PutServersId200ApplicationJsonServerServerTypePricesPriceHourly;
    priceMonthly: PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly;
}
export declare enum PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export declare class PutServersId200ApplicationJsonServerServerType extends SpeakeasyBase {
    cores: number;
    cpuType: PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum;
    deprecated: boolean;
    description: string;
    disk: number;
    id: number;
    memory: number;
    name: string;
    prices: PutServersId200ApplicationJsonServerServerTypePrices[];
    storageType: PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum;
}
export declare enum PutServersId200ApplicationJsonServerStatusEnum {
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
export declare class PutServersId200ApplicationJsonServer extends SpeakeasyBase {
    backupWindow: string;
    created: string;
    datacenter: PutServersId200ApplicationJsonServerDatacenter;
    id: number;
    image: PutServersId200ApplicationJsonServerImage;
    includedTraffic: number;
    ingoingTraffic: number;
    iso: PutServersId200ApplicationJsonServerIso;
    labels: Map<string, string>;
    loadBalancers?: number[];
    locked: boolean;
    name: string;
    outgoingTraffic: number;
    placementGroup?: PutServersId200ApplicationJsonServerPlacementGroupNullable;
    primaryDiskSize: number;
    privateNet: PutServersId200ApplicationJsonServerPrivateNet[];
    protection: PutServersId200ApplicationJsonServerProtection;
    publicNet: PutServersId200ApplicationJsonServerPublicNet;
    rescueEnabled: boolean;
    serverType: PutServersId200ApplicationJsonServerServerType;
    status: PutServersId200ApplicationJsonServerStatusEnum;
    volumes?: number[];
}
export declare class PutServersId200ApplicationJson extends SpeakeasyBase {
    server?: PutServersId200ApplicationJsonServer;
}
export declare class PutServersIdRequest extends SpeakeasyBase {
    pathParams: PutServersIdPathParams;
    request?: PutServersIdUpdateServerRequest;
}
export declare class PutServersIdResponse extends SpeakeasyBase {
    contentType: string;
    putServersId200ApplicationJsonObject?: PutServersId200ApplicationJson;
    statusCode: number;
}
