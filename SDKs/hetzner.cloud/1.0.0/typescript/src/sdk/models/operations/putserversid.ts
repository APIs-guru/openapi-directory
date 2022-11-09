import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutServersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutServersIdUpdateServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutServersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutServersIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutServersIdUpdateServerRequest;
}


export class PutServersId200ApplicationJsonServerDatacenterLocation extends SpeakeasyBase {
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


// PutServersId200ApplicationJsonServerDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class PutServersId200ApplicationJsonServerDatacenterServerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: number[];

  @Metadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @Metadata({ data: "json, name=supported" })
  supported: number[];
}


// PutServersId200ApplicationJsonServerDatacenter
/** 
 * Datacenter this Resource is located at
**/
export class PutServersId200ApplicationJsonServerDatacenter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=location" })
  location: PutServersId200ApplicationJsonServerDatacenterLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=server_types" })
  serverTypes: PutServersId200ApplicationJsonServerDatacenterServerTypes;
}


// PutServersId200ApplicationJsonServerImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class PutServersId200ApplicationJsonServerImageCreatedFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}

export enum PutServersId200ApplicationJsonServerImageOsFlavorEnum {
    Ubuntu = "ubuntu"
,    Centos = "centos"
,    Debian = "debian"
,    Fedora = "fedora"
,    Unknown = "unknown"
}


// PutServersId200ApplicationJsonServerImageProtection
/** 
 * Protection configuration for the Resource
**/
export class PutServersId200ApplicationJsonServerImageProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PutServersId200ApplicationJsonServerImageStatusEnum {
    Available = "available"
,    Creating = "creating"
,    Unavailable = "unavailable"
}

export enum PutServersId200ApplicationJsonServerImageTypeEnum {
    System = "system"
,    App = "app"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Temporary = "temporary"
}


export class PutServersId200ApplicationJsonServerImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=bound_to" })
  boundTo: number;

  @Metadata({ data: "json, name=build_id" })
  buildId?: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=created_from" })
  createdFrom: PutServersId200ApplicationJsonServerImageCreatedFrom;

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
  osFlavor: PutServersId200ApplicationJsonServerImageOsFlavorEnum;

  @Metadata({ data: "json, name=os_version" })
  osVersion: string;

  @Metadata({ data: "json, name=protection" })
  protection: PutServersId200ApplicationJsonServerImageProtection;

  @Metadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @Metadata({ data: "json, name=status" })
  status: PutServersId200ApplicationJsonServerImageStatusEnum;

  @Metadata({ data: "json, name=type" })
  type: PutServersId200ApplicationJsonServerImageTypeEnum;
}

export enum PutServersId200ApplicationJsonServerIsoTypeEnum {
    Public = "public"
,    Private = "private"
}


// PutServersId200ApplicationJsonServerIso
/** 
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export class PutServersId200ApplicationJsonServerIso extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: PutServersId200ApplicationJsonServerIsoTypeEnum;
}

export enum PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}


export class PutServersId200ApplicationJsonServerPlacementGroupNullable extends SpeakeasyBase {
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
  type: PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum;
}


export class PutServersId200ApplicationJsonServerPrivateNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias_ips" })
  aliasIps?: string[];

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "json, name=network" })
  network?: number;
}


// PutServersId200ApplicationJsonServerProtection
/** 
 * Protection configuration for the Server
**/
export class PutServersId200ApplicationJsonServerProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;

  @Metadata({ data: "json, name=rebuild" })
  rebuild: boolean;
}

export enum PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied"
,    Pending = "pending"
}


export class PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=status" })
  status?: PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum;
}


// PutServersId200ApplicationJsonServerPublicNetIpv4
/** 
 * IP address (v4) and its reverse DNS entry of this Server
**/
export class PutServersId200ApplicationJsonServerPublicNetIpv4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


export class PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PutServersId200ApplicationJsonServerPublicNetIpv6
/** 
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export class PutServersId200ApplicationJsonServerPublicNetIpv6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=dns_ptr", elemType: operations.PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr })
  dnsPtr: PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[];

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PutServersId200ApplicationJsonServerPublicNet
/** 
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export class PutServersId200ApplicationJsonServerPublicNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewalls", elemType: operations.PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall })
  firewalls?: PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[];

  @Metadata({ data: "json, name=floating_ips" })
  floatingIps: number[];

  @Metadata({ data: "json, name=ipv4" })
  ipv4: PutServersId200ApplicationJsonServerPublicNetIpv4;

  @Metadata({ data: "json, name=ipv6" })
  ipv6: PutServersId200ApplicationJsonServerPublicNetIpv6;
}

export enum PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum {
    Shared = "shared"
,    Dedicated = "dedicated"
}


// PutServersId200ApplicationJsonServerServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class PutServersId200ApplicationJsonServerServerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class PutServersId200ApplicationJsonServerServerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: PutServersId200ApplicationJsonServerServerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly;
}

export enum PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum {
    Local = "local"
,    Network = "network"
}


// PutServersId200ApplicationJsonServerServerType
/** 
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export class PutServersId200ApplicationJsonServerServerType extends SpeakeasyBase {
  @Metadata({ data: "json, name=cores" })
  cores: number;

  @Metadata({ data: "json, name=cpu_type" })
  cpuType: PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum;

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

  @Metadata({ data: "json, name=prices", elemType: operations.PutServersId200ApplicationJsonServerServerTypePrices })
  prices: PutServersId200ApplicationJsonServerServerTypePrices[];

  @Metadata({ data: "json, name=storage_type" })
  storageType: PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum;
}

export enum PutServersId200ApplicationJsonServerStatusEnum {
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


export class PutServersId200ApplicationJsonServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup_window" })
  backupWindow: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=datacenter" })
  datacenter: PutServersId200ApplicationJsonServerDatacenter;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=image" })
  image: PutServersId200ApplicationJsonServerImage;

  @Metadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @Metadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @Metadata({ data: "json, name=iso" })
  iso: PutServersId200ApplicationJsonServerIso;

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
  placementGroup?: PutServersId200ApplicationJsonServerPlacementGroupNullable;

  @Metadata({ data: "json, name=primary_disk_size" })
  primaryDiskSize: number;

  @Metadata({ data: "json, name=private_net", elemType: operations.PutServersId200ApplicationJsonServerPrivateNet })
  privateNet: PutServersId200ApplicationJsonServerPrivateNet[];

  @Metadata({ data: "json, name=protection" })
  protection: PutServersId200ApplicationJsonServerProtection;

  @Metadata({ data: "json, name=public_net" })
  publicNet: PutServersId200ApplicationJsonServerPublicNet;

  @Metadata({ data: "json, name=rescue_enabled" })
  rescueEnabled: boolean;

  @Metadata({ data: "json, name=server_type" })
  serverType: PutServersId200ApplicationJsonServerServerType;

  @Metadata({ data: "json, name=status" })
  status: PutServersId200ApplicationJsonServerStatusEnum;

  @Metadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class PutServersId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=server" })
  server?: PutServersId200ApplicationJsonServer;
}


export class PutServersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putServersId200ApplicationJsonObject?: PutServersId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
