import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersCreateServerRequestFirewalls extends SpeakeasyBase {
    firewall?: number;
}
export declare class PostServersCreateServerRequest extends SpeakeasyBase {
    automount?: boolean;
    datacenter?: string;
    firewalls?: PostServersCreateServerRequestFirewalls[];
    image: string;
    labels?: Map<string, any>;
    location?: string;
    name: string;
    networks?: number[];
    serverType: string;
    sshKeys?: string[];
    startAfterCreate?: boolean;
    userData?: string;
    volumes?: number[];
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersCreateServerResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersCreateServerResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersCreateServerResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersCreateServerResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersCreateServerResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersCreateServerResponseActionResources[];
    started: string;
    status: PostServersCreateServerResponseActionStatusEnum;
}
export declare class PostServersCreateServerResponseServerDatacenterLocation extends SpeakeasyBase {
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
export declare class PostServersCreateServerResponseServerDatacenterServerTypes extends SpeakeasyBase {
    available: number[];
    availableForMigration: number[];
    supported: number[];
}
/**
 * Datacenter this Resource is located at
**/
export declare class PostServersCreateServerResponseServerDatacenter extends SpeakeasyBase {
    description: string;
    id: number;
    location: PostServersCreateServerResponseServerDatacenterLocation;
    name: string;
    serverTypes: PostServersCreateServerResponseServerDatacenterServerTypes;
}
/**
 * Information about the Server the Image was created from
**/
export declare class PostServersCreateServerResponseServerImageCreatedFrom extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare enum PostServersCreateServerResponseServerImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
**/
export declare class PostServersCreateServerResponseServerImageProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum PostServersCreateServerResponseServerImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
export declare enum PostServersCreateServerResponseServerImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class PostServersCreateServerResponseServerImage extends SpeakeasyBase {
    boundTo: number;
    buildId?: string;
    created: string;
    createdFrom: PostServersCreateServerResponseServerImageCreatedFrom;
    deleted: string;
    deprecated: string;
    description: string;
    diskSize: number;
    id: number;
    imageSize: number;
    labels: Map<string, string>;
    name: string;
    osFlavor: PostServersCreateServerResponseServerImageOsFlavorEnum;
    osVersion: string;
    protection: PostServersCreateServerResponseServerImageProtection;
    rapidDeploy?: boolean;
    status: PostServersCreateServerResponseServerImageStatusEnum;
    type: PostServersCreateServerResponseServerImageTypeEnum;
}
export declare enum PostServersCreateServerResponseServerIsoTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export declare class PostServersCreateServerResponseServerIso extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    name: string;
    type: PostServersCreateServerResponseServerIsoTypeEnum;
}
export declare enum PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}
export declare class PostServersCreateServerResponseServerPlacementGroupNullable extends SpeakeasyBase {
    created: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    servers: number[];
    type: PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum;
}
export declare class PostServersCreateServerResponseServerPrivateNet extends SpeakeasyBase {
    aliasIps?: string[];
    ip?: string;
    macAddress?: string;
    network?: number;
}
/**
 * Protection configuration for the Server
**/
export declare class PostServersCreateServerResponseServerProtection extends SpeakeasyBase {
    delete: boolean;
    rebuild: boolean;
}
export declare enum PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}
export declare class PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
    id?: number;
    status?: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum;
}
/**
 * IP address (v4) and its reverse DNS entry of this Server
**/
export declare class PostServersCreateServerResponseServerPublicNetIpv4 extends SpeakeasyBase {
    blocked: boolean;
    dnsPtr: string;
    ip: string;
}
export declare class PostServersCreateServerResponseServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export declare class PostServersCreateServerResponseServerPublicNetIpv6 extends SpeakeasyBase {
    blocked: boolean;
    dnsPtr: PostServersCreateServerResponseServerPublicNetIpv6DnsPtr[];
    ip: string;
}
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export declare class PostServersCreateServerResponseServerPublicNet extends SpeakeasyBase {
    firewalls?: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall[];
    floatingIps: number[];
    ipv4: PostServersCreateServerResponseServerPublicNetIpv4;
    ipv6: PostServersCreateServerResponseServerPublicNetIpv6;
}
export declare enum PostServersCreateServerResponseServerServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
**/
export declare class PostServersCreateServerResponseServerServerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Server type in this Location
**/
export declare class PostServersCreateServerResponseServerServerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class PostServersCreateServerResponseServerServerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: PostServersCreateServerResponseServerServerTypePricesPriceHourly;
    priceMonthly: PostServersCreateServerResponseServerServerTypePricesPriceMonthly;
}
export declare enum PostServersCreateServerResponseServerServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export declare class PostServersCreateServerResponseServerServerType extends SpeakeasyBase {
    cores: number;
    cpuType: PostServersCreateServerResponseServerServerTypeCpuTypeEnum;
    deprecated: boolean;
    description: string;
    disk: number;
    id: number;
    memory: number;
    name: string;
    prices: PostServersCreateServerResponseServerServerTypePrices[];
    storageType: PostServersCreateServerResponseServerServerTypeStorageTypeEnum;
}
export declare enum PostServersCreateServerResponseServerStatusEnum {
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
export declare class PostServersCreateServerResponseServer extends SpeakeasyBase {
    backupWindow: string;
    created: string;
    datacenter: PostServersCreateServerResponseServerDatacenter;
    id: number;
    image: PostServersCreateServerResponseServerImage;
    includedTraffic: number;
    ingoingTraffic: number;
    iso: PostServersCreateServerResponseServerIso;
    labels: Map<string, string>;
    loadBalancers?: number[];
    locked: boolean;
    name: string;
    outgoingTraffic: number;
    placementGroup?: PostServersCreateServerResponseServerPlacementGroupNullable;
    primaryDiskSize: number;
    privateNet: PostServersCreateServerResponseServerPrivateNet[];
    protection: PostServersCreateServerResponseServerProtection;
    publicNet: PostServersCreateServerResponseServerPublicNet;
    rescueEnabled: boolean;
    serverType: PostServersCreateServerResponseServerServerType;
    status: PostServersCreateServerResponseServerStatusEnum;
    volumes?: number[];
}
export declare class PostServersCreateServerResponse extends SpeakeasyBase {
    action: PostServersCreateServerResponseAction;
    nextActions: PostServersCreateServerResponseAction[];
    rootPassword: string;
    server: PostServersCreateServerResponseServer;
}
export declare class PostServersRequest extends SpeakeasyBase {
    request?: PostServersCreateServerRequest;
}
export declare class PostServersResponse extends SpeakeasyBase {
    contentType: string;
    createServerResponse?: PostServersCreateServerResponse;
    statusCode: number;
}
