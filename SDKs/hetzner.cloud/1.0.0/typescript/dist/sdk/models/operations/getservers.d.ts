import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetServersSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
export declare enum GetServersStatusEnum {
    Initializing = "initializing",
    Starting = "starting",
    Running = "running",
    Stopping = "stopping",
    Off = "off",
    Deleting = "deleting",
    Rebuilding = "rebuilding",
    Migrating = "migrating",
    Unknown = "unknown"
}
export declare class GetServersQueryParams extends SpeakeasyBase {
    labelSelector?: string;
    name?: string;
    sort?: GetServersSortEnum;
    status?: GetServersStatusEnum;
}
export declare class GetServers200ApplicationJsonMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetServers200ApplicationJsonMeta extends SpeakeasyBase {
    pagination: GetServers200ApplicationJsonMetaPagination;
}
export declare class GetServers200ApplicationJsonServersDatacenterLocation extends SpeakeasyBase {
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
export declare class GetServers200ApplicationJsonServersDatacenterServerTypes extends SpeakeasyBase {
    available: number[];
    availableForMigration: number[];
    supported: number[];
}
/**
 * Datacenter this Resource is located at
**/
export declare class GetServers200ApplicationJsonServersDatacenter extends SpeakeasyBase {
    description: string;
    id: number;
    location: GetServers200ApplicationJsonServersDatacenterLocation;
    name: string;
    serverTypes: GetServers200ApplicationJsonServersDatacenterServerTypes;
}
/**
 * Information about the Server the Image was created from
**/
export declare class GetServers200ApplicationJsonServersImageCreatedFrom extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare enum GetServers200ApplicationJsonServersImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
**/
export declare class GetServers200ApplicationJsonServersImageProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum GetServers200ApplicationJsonServersImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
export declare enum GetServers200ApplicationJsonServersImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class GetServers200ApplicationJsonServersImage extends SpeakeasyBase {
    boundTo: number;
    buildId?: string;
    created: string;
    createdFrom: GetServers200ApplicationJsonServersImageCreatedFrom;
    deleted: string;
    deprecated: string;
    description: string;
    diskSize: number;
    id: number;
    imageSize: number;
    labels: Map<string, string>;
    name: string;
    osFlavor: GetServers200ApplicationJsonServersImageOsFlavorEnum;
    osVersion: string;
    protection: GetServers200ApplicationJsonServersImageProtection;
    rapidDeploy?: boolean;
    status: GetServers200ApplicationJsonServersImageStatusEnum;
    type: GetServers200ApplicationJsonServersImageTypeEnum;
}
export declare enum GetServers200ApplicationJsonServersIsoTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export declare class GetServers200ApplicationJsonServersIso extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    name: string;
    type: GetServers200ApplicationJsonServersIsoTypeEnum;
}
export declare enum GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum {
    Spread = "spread"
}
export declare class GetServers200ApplicationJsonServersPlacementGroupNullable extends SpeakeasyBase {
    created: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    servers: number[];
    type: GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum;
}
export declare class GetServers200ApplicationJsonServersPrivateNet extends SpeakeasyBase {
    aliasIps?: string[];
    ip?: string;
    macAddress?: string;
    network?: number;
}
/**
 * Protection configuration for the Server
**/
export declare class GetServers200ApplicationJsonServersProtection extends SpeakeasyBase {
    delete: boolean;
    rebuild: boolean;
}
export declare enum GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}
export declare class GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall extends SpeakeasyBase {
    id?: number;
    status?: GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum;
}
/**
 * IP address (v4) and its reverse DNS entry of this Server
**/
export declare class GetServers200ApplicationJsonServersPublicNetIpv4 extends SpeakeasyBase {
    blocked: boolean;
    dnsPtr: string;
    ip: string;
}
export declare class GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export declare class GetServers200ApplicationJsonServersPublicNetIpv6 extends SpeakeasyBase {
    blocked: boolean;
    dnsPtr: GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr[];
    ip: string;
}
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export declare class GetServers200ApplicationJsonServersPublicNet extends SpeakeasyBase {
    firewalls?: GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall[];
    floatingIps: number[];
    ipv4: GetServers200ApplicationJsonServersPublicNetIpv4;
    ipv6: GetServers200ApplicationJsonServersPublicNetIpv6;
}
export declare enum GetServers200ApplicationJsonServersServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
**/
export declare class GetServers200ApplicationJsonServersServerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Server type in this Location
**/
export declare class GetServers200ApplicationJsonServersServerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetServers200ApplicationJsonServersServerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetServers200ApplicationJsonServersServerTypePricesPriceHourly;
    priceMonthly: GetServers200ApplicationJsonServersServerTypePricesPriceMonthly;
}
export declare enum GetServers200ApplicationJsonServersServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export declare class GetServers200ApplicationJsonServersServerType extends SpeakeasyBase {
    cores: number;
    cpuType: GetServers200ApplicationJsonServersServerTypeCpuTypeEnum;
    deprecated: boolean;
    description: string;
    disk: number;
    id: number;
    memory: number;
    name: string;
    prices: GetServers200ApplicationJsonServersServerTypePrices[];
    storageType: GetServers200ApplicationJsonServersServerTypeStorageTypeEnum;
}
export declare enum GetServers200ApplicationJsonServersStatusEnum {
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
export declare class GetServers200ApplicationJsonServers extends SpeakeasyBase {
    backupWindow: string;
    created: string;
    datacenter: GetServers200ApplicationJsonServersDatacenter;
    id: number;
    image: GetServers200ApplicationJsonServersImage;
    includedTraffic: number;
    ingoingTraffic: number;
    iso: GetServers200ApplicationJsonServersIso;
    labels: Map<string, string>;
    loadBalancers?: number[];
    locked: boolean;
    name: string;
    outgoingTraffic: number;
    placementGroup?: GetServers200ApplicationJsonServersPlacementGroupNullable;
    primaryDiskSize: number;
    privateNet: GetServers200ApplicationJsonServersPrivateNet[];
    protection: GetServers200ApplicationJsonServersProtection;
    publicNet: GetServers200ApplicationJsonServersPublicNet;
    rescueEnabled: boolean;
    serverType: GetServers200ApplicationJsonServersServerType;
    status: GetServers200ApplicationJsonServersStatusEnum;
    volumes?: number[];
}
export declare class GetServers200ApplicationJson extends SpeakeasyBase {
    meta?: GetServers200ApplicationJsonMeta;
    servers: GetServers200ApplicationJsonServers[];
}
export declare class GetServersRequest extends SpeakeasyBase {
    queryParams: GetServersQueryParams;
}
export declare class GetServersResponse extends SpeakeasyBase {
    contentType: string;
    getServers200ApplicationJsonObject?: GetServers200ApplicationJson;
    headers: Map<string, string[]>;
    statusCode: number;
}
