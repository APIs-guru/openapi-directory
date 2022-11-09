import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetServersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServersIdPathParams;
}


export class GetServersId200ApplicationJsonServerDatacenterLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=latitude" })
  latitude: number;

  @Metadata({ data: "json, name=longitude" })
  longitude: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;
}


// GetServersId200ApplicationJsonServerDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class GetServersId200ApplicationJsonServerDatacenterServerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: number[];

  @Metadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @Metadata({ data: "json, name=supported" })
  supported: number[];
}


// GetServersId200ApplicationJsonServerDatacenter
/** 
 * Datacenter this Resource is located at
**/
export class GetServersId200ApplicationJsonServerDatacenter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=location" })
  location: GetServersId200ApplicationJsonServerDatacenterLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=server_types" })
  serverTypes: GetServersId200ApplicationJsonServerDatacenterServerTypes;
}


// GetServersId200ApplicationJsonServerImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class GetServersId200ApplicationJsonServerImageCreatedFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}

export enum GetServersId200ApplicationJsonServerImageOsFlavorEnum {
    Ubuntu = "ubuntu"
,    Centos = "centos"
,    Debian = "debian"
,    Fedora = "fedora"
,    Unknown = "unknown"
}


// GetServersId200ApplicationJsonServerImageProtection
/** 
 * Protection configuration for the Resource
**/
export class GetServersId200ApplicationJsonServerImageProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetServersId200ApplicationJsonServerImageStatusEnum {
    Available = "available"
,    Creating = "creating"
,    Unavailable = "unavailable"
}

export enum GetServersId200ApplicationJsonServerImageTypeEnum {
    System = "system"
,    App = "app"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Temporary = "temporary"
}


export class GetServersId200ApplicationJsonServerImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=bound_to" })
  boundTo: number;

  @Metadata({ data: "json, name=build_id" })
  buildId?: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=created_from" })
  createdFrom: GetServersId200ApplicationJsonServerImageCreatedFrom;

  @Metadata({ data: "json, name=deleted" })
  deleted: string;

  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=disk_size" })
  diskSize: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=image_size" })
  imageSize: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=os_flavor" })
  osFlavor: GetServersId200ApplicationJsonServerImageOsFlavorEnum;

  @Metadata({ data: "json, name=os_version" })
  osVersion: string;

  @Metadata({ data: "json, name=protection" })
  protection: GetServersId200ApplicationJsonServerImageProtection;

  @Metadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @Metadata({ data: "json, name=status" })
  status: GetServersId200ApplicationJsonServerImageStatusEnum;

  @Metadata({ data: "json, name=type" })
  type: GetServersId200ApplicationJsonServerImageTypeEnum;
}

export enum GetServersId200ApplicationJsonServerIsoTypeEnum {
    Public = "public"
,    Private = "private"
}


// GetServersId200ApplicationJsonServerIso
/** 
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export class GetServersId200ApplicationJsonServerIso extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: GetServersId200ApplicationJsonServerIsoTypeEnum;
}

export enum GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}


export class GetServersId200ApplicationJsonServerPlacementGroupNullable extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=servers" })
  servers: number[];

  @Metadata({ data: "json, name=type" })
  type: GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum;
}


export class GetServersId200ApplicationJsonServerPrivateNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias_ips" })
  aliasIps?: string[];

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "json, name=network" })
  network?: number;
}


// GetServersId200ApplicationJsonServerProtection
/** 
 * Protection configuration for the Server
**/
export class GetServersId200ApplicationJsonServerProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;

  @Metadata({ data: "json, name=rebuild" })
  rebuild: boolean;
}

export enum GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied"
,    Pending = "pending"
}


export class GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=status" })
  status?: GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum;
}


// GetServersId200ApplicationJsonServerPublicNetIpv4
/** 
 * IP address (v4) and its reverse DNS entry of this Server
**/
export class GetServersId200ApplicationJsonServerPublicNetIpv4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


export class GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// GetServersId200ApplicationJsonServerPublicNetIpv6
/** 
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export class GetServersId200ApplicationJsonServerPublicNetIpv6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=dns_ptr", elemType: operations.GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr })
  dnsPtr: GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[];

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// GetServersId200ApplicationJsonServerPublicNet
/** 
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export class GetServersId200ApplicationJsonServerPublicNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewalls", elemType: operations.GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall })
  firewalls?: GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[];

  @Metadata({ data: "json, name=floating_ips" })
  floatingIps: number[];

  @Metadata({ data: "json, name=ipv4" })
  ipv4: GetServersId200ApplicationJsonServerPublicNetIpv4;

  @Metadata({ data: "json, name=ipv6" })
  ipv6: GetServersId200ApplicationJsonServerPublicNetIpv6;
}

export enum GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum {
    Shared = "shared"
,    Dedicated = "dedicated"
}


// GetServersId200ApplicationJsonServerServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetServersId200ApplicationJsonServerServerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetServersId200ApplicationJsonServerServerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetServersId200ApplicationJsonServerServerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly;
}

export enum GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum {
    Local = "local"
,    Network = "network"
}


// GetServersId200ApplicationJsonServerServerType
/** 
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export class GetServersId200ApplicationJsonServerServerType extends SpeakeasyBase {
  @Metadata({ data: "json, name=cores" })
  cores: number;

  @Metadata({ data: "json, name=cpu_type" })
  cpuType: GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum;

  @Metadata({ data: "json, name=deprecated" })
  deprecated: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=disk" })
  disk: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=memory" })
  memory: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=prices", elemType: operations.GetServersId200ApplicationJsonServerServerTypePrices })
  prices: GetServersId200ApplicationJsonServerServerTypePrices[];

  @Metadata({ data: "json, name=storage_type" })
  storageType: GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum;
}

export enum GetServersId200ApplicationJsonServerStatusEnum {
    Running = "running"
,    Initializing = "initializing"
,    Starting = "starting"
,    Stopping = "stopping"
,    Off = "off"
,    Deleting = "deleting"
,    Migrating = "migrating"
,    Rebuilding = "rebuilding"
,    Unknown = "unknown"
}


export class GetServersId200ApplicationJsonServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup_window" })
  backupWindow: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=datacenter" })
  datacenter: GetServersId200ApplicationJsonServerDatacenter;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=image" })
  image: GetServersId200ApplicationJsonServerImage;

  @Metadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @Metadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @Metadata({ data: "json, name=iso" })
  iso: GetServersId200ApplicationJsonServerIso;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=load_balancers" })
  loadBalancers?: number[];

  @Metadata({ data: "json, name=locked" })
  locked: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @Metadata({ data: "json, name=placement_group" })
  placementGroup?: GetServersId200ApplicationJsonServerPlacementGroupNullable;

  @Metadata({ data: "json, name=primary_disk_size" })
  primaryDiskSize: number;

  @Metadata({ data: "json, name=private_net", elemType: operations.GetServersId200ApplicationJsonServerPrivateNet })
  privateNet: GetServersId200ApplicationJsonServerPrivateNet[];

  @Metadata({ data: "json, name=protection" })
  protection: GetServersId200ApplicationJsonServerProtection;

  @Metadata({ data: "json, name=public_net" })
  publicNet: GetServersId200ApplicationJsonServerPublicNet;

  @Metadata({ data: "json, name=rescue_enabled" })
  rescueEnabled: boolean;

  @Metadata({ data: "json, name=server_type" })
  serverType: GetServersId200ApplicationJsonServerServerType;

  @Metadata({ data: "json, name=status" })
  status: GetServersId200ApplicationJsonServerStatusEnum;

  @Metadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class GetServersId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=server" })
  server?: GetServersId200ApplicationJsonServer;
}


export class GetServersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServersId200ApplicationJsonObject?: GetServersId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
