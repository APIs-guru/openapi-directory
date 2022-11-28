import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetServersId200ApplicationJsonServerDatacenterLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;
}


// GetServersId200ApplicationJsonServerDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class GetServersId200ApplicationJsonServerDatacenterServerTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: number[];

  @SpeakeasyMetadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @SpeakeasyMetadata({ data: "json, name=supported" })
  supported: number[];
}


// GetServersId200ApplicationJsonServerDatacenter
/** 
 * Datacenter this Resource is located at
**/
export class GetServersId200ApplicationJsonServerDatacenter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: GetServersId200ApplicationJsonServerDatacenterLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=server_types" })
  serverTypes: GetServersId200ApplicationJsonServerDatacenterServerTypes;
}


// GetServersId200ApplicationJsonServerImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class GetServersId200ApplicationJsonServerImageCreatedFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum GetServersId200ApplicationJsonServerImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}


// GetServersId200ApplicationJsonServerImageProtection
/** 
 * Protection configuration for the Resource
**/
export class GetServersId200ApplicationJsonServerImageProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetServersId200ApplicationJsonServerImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}

export enum GetServersId200ApplicationJsonServerImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}


export class GetServersId200ApplicationJsonServerImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bound_to" })
  boundTo: number;

  @SpeakeasyMetadata({ data: "json, name=build_id" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=created_from" })
  createdFrom: GetServersId200ApplicationJsonServerImageCreatedFrom;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: string;

  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=disk_size" })
  diskSize: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=image_size" })
  imageSize: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=os_flavor" })
  osFlavor: GetServersId200ApplicationJsonServerImageOsFlavorEnum;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetServersId200ApplicationJsonServerImageProtection;

  @SpeakeasyMetadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetServersId200ApplicationJsonServerImageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetServersId200ApplicationJsonServerImageTypeEnum;
}

export enum GetServersId200ApplicationJsonServerIsoTypeEnum {
    Public = "public",
    Private = "private"
}


// GetServersId200ApplicationJsonServerIso
/** 
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export class GetServersId200ApplicationJsonServerIso extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetServersId200ApplicationJsonServerIsoTypeEnum;
}

export enum GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}


export class GetServersId200ApplicationJsonServerPlacementGroupNullable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=servers" })
  servers: number[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum;
}


export class GetServersId200ApplicationJsonServerPrivateNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias_ips" })
  aliasIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: number;
}


// GetServersId200ApplicationJsonServerProtection
/** 
 * Protection configuration for the Server
**/
export class GetServersId200ApplicationJsonServerProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;

  @SpeakeasyMetadata({ data: "json, name=rebuild" })
  rebuild: boolean;
}

export enum GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}


export class GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum;
}


// GetServersId200ApplicationJsonServerPublicNetIpv4
/** 
 * IP address (v4) and its reverse DNS entry of this Server
**/
export class GetServersId200ApplicationJsonServerPublicNetIpv4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


export class GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// GetServersId200ApplicationJsonServerPublicNetIpv6
/** 
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export class GetServersId200ApplicationJsonServerPublicNetIpv6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr })
  dnsPtr: GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// GetServersId200ApplicationJsonServerPublicNet
/** 
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export class GetServersId200ApplicationJsonServerPublicNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewalls", elemType: GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall })
  firewalls?: GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[];

  @SpeakeasyMetadata({ data: "json, name=floating_ips" })
  floatingIps: number[];

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4: GetServersId200ApplicationJsonServerPublicNetIpv4;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6: GetServersId200ApplicationJsonServerPublicNetIpv6;
}

export enum GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}


// GetServersId200ApplicationJsonServerServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetServersId200ApplicationJsonServerServerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetServersId200ApplicationJsonServerServerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetServersId200ApplicationJsonServerServerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly;
}

export enum GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}


// GetServersId200ApplicationJsonServerServerType
/** 
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export class GetServersId200ApplicationJsonServerServerType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cores" })
  cores: number;

  @SpeakeasyMetadata({ data: "json, name=cpu_type" })
  cpuType: GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetServersId200ApplicationJsonServerServerTypePrices })
  prices: GetServersId200ApplicationJsonServerServerTypePrices[];

  @SpeakeasyMetadata({ data: "json, name=storage_type" })
  storageType: GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum;
}

export enum GetServersId200ApplicationJsonServerStatusEnum {
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


export class GetServersId200ApplicationJsonServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup_window" })
  backupWindow: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=datacenter" })
  datacenter: GetServersId200ApplicationJsonServerDatacenter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: GetServersId200ApplicationJsonServerImage;

  @SpeakeasyMetadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=iso" })
  iso: GetServersId200ApplicationJsonServerIso;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=load_balancers" })
  loadBalancers?: number[];

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=placement_group" })
  placementGroup?: GetServersId200ApplicationJsonServerPlacementGroupNullable;

  @SpeakeasyMetadata({ data: "json, name=primary_disk_size" })
  primaryDiskSize: number;

  @SpeakeasyMetadata({ data: "json, name=private_net", elemType: GetServersId200ApplicationJsonServerPrivateNet })
  privateNet: GetServersId200ApplicationJsonServerPrivateNet[];

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetServersId200ApplicationJsonServerProtection;

  @SpeakeasyMetadata({ data: "json, name=public_net" })
  publicNet: GetServersId200ApplicationJsonServerPublicNet;

  @SpeakeasyMetadata({ data: "json, name=rescue_enabled" })
  rescueEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=server_type" })
  serverType: GetServersId200ApplicationJsonServerServerType;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetServersId200ApplicationJsonServerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class GetServersId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: GetServersId200ApplicationJsonServer;
}


export class GetServersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetServersIdPathParams;
}


export class GetServersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getServersId200ApplicationJsonObject?: GetServersId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
