import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutServersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutServersIdUpdateServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PutServersId200ApplicationJsonServerDatacenterLocation extends SpeakeasyBase {
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


// PutServersId200ApplicationJsonServerDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class PutServersId200ApplicationJsonServerDatacenterServerTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: number[];

  @SpeakeasyMetadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @SpeakeasyMetadata({ data: "json, name=supported" })
  supported: number[];
}


// PutServersId200ApplicationJsonServerDatacenter
/** 
 * Datacenter this Resource is located at
**/
export class PutServersId200ApplicationJsonServerDatacenter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: PutServersId200ApplicationJsonServerDatacenterLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=server_types" })
  serverTypes: PutServersId200ApplicationJsonServerDatacenterServerTypes;
}


// PutServersId200ApplicationJsonServerImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class PutServersId200ApplicationJsonServerImageCreatedFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum PutServersId200ApplicationJsonServerImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}


// PutServersId200ApplicationJsonServerImageProtection
/** 
 * Protection configuration for the Resource
**/
export class PutServersId200ApplicationJsonServerImageProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PutServersId200ApplicationJsonServerImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}

export enum PutServersId200ApplicationJsonServerImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}


export class PutServersId200ApplicationJsonServerImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bound_to" })
  boundTo: number;

  @SpeakeasyMetadata({ data: "json, name=build_id" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=created_from" })
  createdFrom: PutServersId200ApplicationJsonServerImageCreatedFrom;

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
  osFlavor: PutServersId200ApplicationJsonServerImageOsFlavorEnum;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PutServersId200ApplicationJsonServerImageProtection;

  @SpeakeasyMetadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PutServersId200ApplicationJsonServerImageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PutServersId200ApplicationJsonServerImageTypeEnum;
}

export enum PutServersId200ApplicationJsonServerIsoTypeEnum {
    Public = "public",
    Private = "private"
}


// PutServersId200ApplicationJsonServerIso
/** 
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export class PutServersId200ApplicationJsonServerIso extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PutServersId200ApplicationJsonServerIsoTypeEnum;
}

export enum PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}


export class PutServersId200ApplicationJsonServerPlacementGroupNullable extends SpeakeasyBase {
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
  type: PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum;
}


export class PutServersId200ApplicationJsonServerPrivateNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias_ips" })
  aliasIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: number;
}


// PutServersId200ApplicationJsonServerProtection
/** 
 * Protection configuration for the Server
**/
export class PutServersId200ApplicationJsonServerProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;

  @SpeakeasyMetadata({ data: "json, name=rebuild" })
  rebuild: boolean;
}

export enum PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}


export class PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum;
}


// PutServersId200ApplicationJsonServerPublicNetIpv4
/** 
 * IP address (v4) and its reverse DNS entry of this Server
**/
export class PutServersId200ApplicationJsonServerPublicNetIpv4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


export class PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PutServersId200ApplicationJsonServerPublicNetIpv6
/** 
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export class PutServersId200ApplicationJsonServerPublicNetIpv6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr })
  dnsPtr: PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PutServersId200ApplicationJsonServerPublicNet
/** 
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export class PutServersId200ApplicationJsonServerPublicNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewalls", elemType: PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall })
  firewalls?: PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[];

  @SpeakeasyMetadata({ data: "json, name=floating_ips" })
  floatingIps: number[];

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4: PutServersId200ApplicationJsonServerPublicNetIpv4;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6: PutServersId200ApplicationJsonServerPublicNetIpv6;
}

export enum PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}


// PutServersId200ApplicationJsonServerServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class PutServersId200ApplicationJsonServerServerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class PutServersId200ApplicationJsonServerServerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: PutServersId200ApplicationJsonServerServerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly;
}

export enum PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}


// PutServersId200ApplicationJsonServerServerType
/** 
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export class PutServersId200ApplicationJsonServerServerType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cores" })
  cores: number;

  @SpeakeasyMetadata({ data: "json, name=cpu_type" })
  cpuType: PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum;

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

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: PutServersId200ApplicationJsonServerServerTypePrices })
  prices: PutServersId200ApplicationJsonServerServerTypePrices[];

  @SpeakeasyMetadata({ data: "json, name=storage_type" })
  storageType: PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum;
}

export enum PutServersId200ApplicationJsonServerStatusEnum {
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


export class PutServersId200ApplicationJsonServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup_window" })
  backupWindow: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=datacenter" })
  datacenter: PutServersId200ApplicationJsonServerDatacenter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: PutServersId200ApplicationJsonServerImage;

  @SpeakeasyMetadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=iso" })
  iso: PutServersId200ApplicationJsonServerIso;

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
  placementGroup?: PutServersId200ApplicationJsonServerPlacementGroupNullable;

  @SpeakeasyMetadata({ data: "json, name=primary_disk_size" })
  primaryDiskSize: number;

  @SpeakeasyMetadata({ data: "json, name=private_net", elemType: PutServersId200ApplicationJsonServerPrivateNet })
  privateNet: PutServersId200ApplicationJsonServerPrivateNet[];

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PutServersId200ApplicationJsonServerProtection;

  @SpeakeasyMetadata({ data: "json, name=public_net" })
  publicNet: PutServersId200ApplicationJsonServerPublicNet;

  @SpeakeasyMetadata({ data: "json, name=rescue_enabled" })
  rescueEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=server_type" })
  serverType: PutServersId200ApplicationJsonServerServerType;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PutServersId200ApplicationJsonServerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class PutServersId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PutServersId200ApplicationJsonServer;
}


export class PutServersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutServersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutServersIdUpdateServerRequest;
}


export class PutServersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putServersId200ApplicationJsonObject?: PutServersId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
