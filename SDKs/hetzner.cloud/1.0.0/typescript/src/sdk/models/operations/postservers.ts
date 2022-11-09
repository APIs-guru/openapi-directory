import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersCreateServerRequestFirewalls extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewall" })
  firewall?: number;
}


export class PostServersCreateServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=automount" })
  automount?: boolean;

  @Metadata({ data: "json, name=datacenter" })
  datacenter?: string;

  @Metadata({ data: "json, name=firewalls", elemType: operations.PostServersCreateServerRequestFirewalls })
  firewalls?: PostServersCreateServerRequestFirewalls[];

  @Metadata({ data: "json, name=image" })
  image: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=networks" })
  networks?: number[];

  @Metadata({ data: "json, name=server_type" })
  serverType: string;

  @Metadata({ data: "json, name=ssh_keys" })
  sshKeys?: string[];

  @Metadata({ data: "json, name=start_after_create" })
  startAfterCreate?: boolean;

  @Metadata({ data: "json, name=user_data" })
  userData?: string;

  @Metadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class PostServersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersCreateServerRequest;
}


// PostServersCreateServerResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersCreateServerResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersCreateServerResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersCreateServerResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersCreateServerResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersCreateServerResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersCreateServerResponseActionResources })
  resources: PostServersCreateServerResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersCreateServerResponseActionStatusEnum;
}


export class PostServersCreateServerResponseServerDatacenterLocation extends SpeakeasyBase {
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


// PostServersCreateServerResponseServerDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class PostServersCreateServerResponseServerDatacenterServerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: number[];

  @Metadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @Metadata({ data: "json, name=supported" })
  supported: number[];
}


// PostServersCreateServerResponseServerDatacenter
/** 
 * Datacenter this Resource is located at
**/
export class PostServersCreateServerResponseServerDatacenter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=location" })
  location: PostServersCreateServerResponseServerDatacenterLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=server_types" })
  serverTypes: PostServersCreateServerResponseServerDatacenterServerTypes;
}


// PostServersCreateServerResponseServerImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class PostServersCreateServerResponseServerImageCreatedFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}

export enum PostServersCreateServerResponseServerImageOsFlavorEnum {
    Ubuntu = "ubuntu"
,    Centos = "centos"
,    Debian = "debian"
,    Fedora = "fedora"
,    Unknown = "unknown"
}


// PostServersCreateServerResponseServerImageProtection
/** 
 * Protection configuration for the Resource
**/
export class PostServersCreateServerResponseServerImageProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PostServersCreateServerResponseServerImageStatusEnum {
    Available = "available"
,    Creating = "creating"
,    Unavailable = "unavailable"
}

export enum PostServersCreateServerResponseServerImageTypeEnum {
    System = "system"
,    App = "app"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Temporary = "temporary"
}


export class PostServersCreateServerResponseServerImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=bound_to" })
  boundTo: number;

  @Metadata({ data: "json, name=build_id" })
  buildId?: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=created_from" })
  createdFrom: PostServersCreateServerResponseServerImageCreatedFrom;

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
  osFlavor: PostServersCreateServerResponseServerImageOsFlavorEnum;

  @Metadata({ data: "json, name=os_version" })
  osVersion: string;

  @Metadata({ data: "json, name=protection" })
  protection: PostServersCreateServerResponseServerImageProtection;

  @Metadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @Metadata({ data: "json, name=status" })
  status: PostServersCreateServerResponseServerImageStatusEnum;

  @Metadata({ data: "json, name=type" })
  type: PostServersCreateServerResponseServerImageTypeEnum;
}

export enum PostServersCreateServerResponseServerIsoTypeEnum {
    Public = "public"
,    Private = "private"
}


// PostServersCreateServerResponseServerIso
/** 
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export class PostServersCreateServerResponseServerIso extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: PostServersCreateServerResponseServerIsoTypeEnum;
}

export enum PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}


export class PostServersCreateServerResponseServerPlacementGroupNullable extends SpeakeasyBase {
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
  type: PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum;
}


export class PostServersCreateServerResponseServerPrivateNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias_ips" })
  aliasIps?: string[];

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "json, name=network" })
  network?: number;
}


// PostServersCreateServerResponseServerProtection
/** 
 * Protection configuration for the Server
**/
export class PostServersCreateServerResponseServerProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;

  @Metadata({ data: "json, name=rebuild" })
  rebuild: boolean;
}

export enum PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied"
,    Pending = "pending"
}


export class PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=status" })
  status?: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum;
}


// PostServersCreateServerResponseServerPublicNetIpv4
/** 
 * IP address (v4) and its reverse DNS entry of this Server
**/
export class PostServersCreateServerResponseServerPublicNetIpv4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


export class PostServersCreateServerResponseServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PostServersCreateServerResponseServerPublicNetIpv6
/** 
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export class PostServersCreateServerResponseServerPublicNetIpv6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=dns_ptr", elemType: operations.PostServersCreateServerResponseServerPublicNetIpv6DnsPtr })
  dnsPtr: PostServersCreateServerResponseServerPublicNetIpv6DnsPtr[];

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PostServersCreateServerResponseServerPublicNet
/** 
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export class PostServersCreateServerResponseServerPublicNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewalls", elemType: operations.PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall })
  firewalls?: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall[];

  @Metadata({ data: "json, name=floating_ips" })
  floatingIps: number[];

  @Metadata({ data: "json, name=ipv4" })
  ipv4: PostServersCreateServerResponseServerPublicNetIpv4;

  @Metadata({ data: "json, name=ipv6" })
  ipv6: PostServersCreateServerResponseServerPublicNetIpv6;
}

export enum PostServersCreateServerResponseServerServerTypeCpuTypeEnum {
    Shared = "shared"
,    Dedicated = "dedicated"
}


// PostServersCreateServerResponseServerServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class PostServersCreateServerResponseServerServerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// PostServersCreateServerResponseServerServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class PostServersCreateServerResponseServerServerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class PostServersCreateServerResponseServerServerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: PostServersCreateServerResponseServerServerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: PostServersCreateServerResponseServerServerTypePricesPriceMonthly;
}

export enum PostServersCreateServerResponseServerServerTypeStorageTypeEnum {
    Local = "local"
,    Network = "network"
}


// PostServersCreateServerResponseServerServerType
/** 
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export class PostServersCreateServerResponseServerServerType extends SpeakeasyBase {
  @Metadata({ data: "json, name=cores" })
  cores: number;

  @Metadata({ data: "json, name=cpu_type" })
  cpuType: PostServersCreateServerResponseServerServerTypeCpuTypeEnum;

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

  @Metadata({ data: "json, name=prices", elemType: operations.PostServersCreateServerResponseServerServerTypePrices })
  prices: PostServersCreateServerResponseServerServerTypePrices[];

  @Metadata({ data: "json, name=storage_type" })
  storageType: PostServersCreateServerResponseServerServerTypeStorageTypeEnum;
}

export enum PostServersCreateServerResponseServerStatusEnum {
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


export class PostServersCreateServerResponseServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup_window" })
  backupWindow: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=datacenter" })
  datacenter: PostServersCreateServerResponseServerDatacenter;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=image" })
  image: PostServersCreateServerResponseServerImage;

  @Metadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @Metadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @Metadata({ data: "json, name=iso" })
  iso: PostServersCreateServerResponseServerIso;

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
  placementGroup?: PostServersCreateServerResponseServerPlacementGroupNullable;

  @Metadata({ data: "json, name=primary_disk_size" })
  primaryDiskSize: number;

  @Metadata({ data: "json, name=private_net", elemType: operations.PostServersCreateServerResponseServerPrivateNet })
  privateNet: PostServersCreateServerResponseServerPrivateNet[];

  @Metadata({ data: "json, name=protection" })
  protection: PostServersCreateServerResponseServerProtection;

  @Metadata({ data: "json, name=public_net" })
  publicNet: PostServersCreateServerResponseServerPublicNet;

  @Metadata({ data: "json, name=rescue_enabled" })
  rescueEnabled: boolean;

  @Metadata({ data: "json, name=server_type" })
  serverType: PostServersCreateServerResponseServerServerType;

  @Metadata({ data: "json, name=status" })
  status: PostServersCreateServerResponseServerStatusEnum;

  @Metadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class PostServersCreateServerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersCreateServerResponseAction;

  @Metadata({ data: "json, name=next_actions", elemType: operations.PostServersCreateServerResponseAction })
  nextActions: PostServersCreateServerResponseAction[];

  @Metadata({ data: "json, name=root_password" })
  rootPassword: string;

  @Metadata({ data: "json, name=server" })
  server: PostServersCreateServerResponseServer;
}


export class PostServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createServerResponse?: PostServersCreateServerResponse;

  @Metadata()
  statusCode: number;
}
