import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostServersCreateServerRequestFirewalls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewall" })
  firewall?: number;
}


export class PostServersCreateServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automount" })
  automount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=datacenter" })
  datacenter?: string;

  @SpeakeasyMetadata({ data: "json, name=firewalls", elemType: PostServersCreateServerRequestFirewalls })
  firewalls?: PostServersCreateServerRequestFirewalls[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=networks" })
  networks?: number[];

  @SpeakeasyMetadata({ data: "json, name=server_type" })
  serverType: string;

  @SpeakeasyMetadata({ data: "json, name=ssh_keys" })
  sshKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=start_after_create" })
  startAfterCreate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_data" })
  userData?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes" })
  volumes?: number[];
}


// PostServersCreateServerResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersCreateServerResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostServersCreateServerResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersCreateServerResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostServersCreateServerResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostServersCreateServerResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersCreateServerResponseActionResources })
  resources: PostServersCreateServerResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersCreateServerResponseActionStatusEnum;
}


export class PostServersCreateServerResponseServerDatacenterLocation extends SpeakeasyBase {
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


// PostServersCreateServerResponseServerDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class PostServersCreateServerResponseServerDatacenterServerTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: number[];

  @SpeakeasyMetadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @SpeakeasyMetadata({ data: "json, name=supported" })
  supported: number[];
}


// PostServersCreateServerResponseServerDatacenter
/** 
 * Datacenter this Resource is located at
**/
export class PostServersCreateServerResponseServerDatacenter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: PostServersCreateServerResponseServerDatacenterLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=server_types" })
  serverTypes: PostServersCreateServerResponseServerDatacenterServerTypes;
}


// PostServersCreateServerResponseServerImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class PostServersCreateServerResponseServerImageCreatedFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum PostServersCreateServerResponseServerImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}


// PostServersCreateServerResponseServerImageProtection
/** 
 * Protection configuration for the Resource
**/
export class PostServersCreateServerResponseServerImageProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PostServersCreateServerResponseServerImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}

export enum PostServersCreateServerResponseServerImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}


export class PostServersCreateServerResponseServerImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bound_to" })
  boundTo: number;

  @SpeakeasyMetadata({ data: "json, name=build_id" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=created_from" })
  createdFrom: PostServersCreateServerResponseServerImageCreatedFrom;

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
  osFlavor: PostServersCreateServerResponseServerImageOsFlavorEnum;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PostServersCreateServerResponseServerImageProtection;

  @SpeakeasyMetadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersCreateServerResponseServerImageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostServersCreateServerResponseServerImageTypeEnum;
}

export enum PostServersCreateServerResponseServerIsoTypeEnum {
    Public = "public",
    Private = "private"
}


// PostServersCreateServerResponseServerIso
/** 
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export class PostServersCreateServerResponseServerIso extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostServersCreateServerResponseServerIsoTypeEnum;
}

export enum PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum {
    Spread = "spread"
}


export class PostServersCreateServerResponseServerPlacementGroupNullable extends SpeakeasyBase {
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
  type: PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum;
}


export class PostServersCreateServerResponseServerPrivateNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias_ips" })
  aliasIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: number;
}


// PostServersCreateServerResponseServerProtection
/** 
 * Protection configuration for the Server
**/
export class PostServersCreateServerResponseServerProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;

  @SpeakeasyMetadata({ data: "json, name=rebuild" })
  rebuild: boolean;
}

export enum PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}


export class PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum;
}


// PostServersCreateServerResponseServerPublicNetIpv4
/** 
 * IP address (v4) and its reverse DNS entry of this Server
**/
export class PostServersCreateServerResponseServerPublicNetIpv4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


export class PostServersCreateServerResponseServerPublicNetIpv6DnsPtr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostServersCreateServerResponseServerPublicNetIpv6
/** 
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export class PostServersCreateServerResponseServerPublicNetIpv6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: PostServersCreateServerResponseServerPublicNetIpv6DnsPtr })
  dnsPtr: PostServersCreateServerResponseServerPublicNetIpv6DnsPtr[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostServersCreateServerResponseServerPublicNet
/** 
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export class PostServersCreateServerResponseServerPublicNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewalls", elemType: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall })
  firewalls?: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall[];

  @SpeakeasyMetadata({ data: "json, name=floating_ips" })
  floatingIps: number[];

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4: PostServersCreateServerResponseServerPublicNetIpv4;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6: PostServersCreateServerResponseServerPublicNetIpv6;
}

export enum PostServersCreateServerResponseServerServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}


// PostServersCreateServerResponseServerServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class PostServersCreateServerResponseServerServerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// PostServersCreateServerResponseServerServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class PostServersCreateServerResponseServerServerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class PostServersCreateServerResponseServerServerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: PostServersCreateServerResponseServerServerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: PostServersCreateServerResponseServerServerTypePricesPriceMonthly;
}

export enum PostServersCreateServerResponseServerServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}


// PostServersCreateServerResponseServerServerType
/** 
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export class PostServersCreateServerResponseServerServerType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cores" })
  cores: number;

  @SpeakeasyMetadata({ data: "json, name=cpu_type" })
  cpuType: PostServersCreateServerResponseServerServerTypeCpuTypeEnum;

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

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: PostServersCreateServerResponseServerServerTypePrices })
  prices: PostServersCreateServerResponseServerServerTypePrices[];

  @SpeakeasyMetadata({ data: "json, name=storage_type" })
  storageType: PostServersCreateServerResponseServerServerTypeStorageTypeEnum;
}

export enum PostServersCreateServerResponseServerStatusEnum {
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


export class PostServersCreateServerResponseServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup_window" })
  backupWindow: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=datacenter" })
  datacenter: PostServersCreateServerResponseServerDatacenter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: PostServersCreateServerResponseServerImage;

  @SpeakeasyMetadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=iso" })
  iso: PostServersCreateServerResponseServerIso;

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
  placementGroup?: PostServersCreateServerResponseServerPlacementGroupNullable;

  @SpeakeasyMetadata({ data: "json, name=primary_disk_size" })
  primaryDiskSize: number;

  @SpeakeasyMetadata({ data: "json, name=private_net", elemType: PostServersCreateServerResponseServerPrivateNet })
  privateNet: PostServersCreateServerResponseServerPrivateNet[];

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PostServersCreateServerResponseServerProtection;

  @SpeakeasyMetadata({ data: "json, name=public_net" })
  publicNet: PostServersCreateServerResponseServerPublicNet;

  @SpeakeasyMetadata({ data: "json, name=rescue_enabled" })
  rescueEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=server_type" })
  serverType: PostServersCreateServerResponseServerServerType;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersCreateServerResponseServerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class PostServersCreateServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostServersCreateServerResponseAction;

  @SpeakeasyMetadata({ data: "json, name=next_actions", elemType: PostServersCreateServerResponseAction })
  nextActions: PostServersCreateServerResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=root_password" })
  rootPassword: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: PostServersCreateServerResponseServer;
}


export class PostServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostServersCreateServerRequest;
}


export class PostServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createServerResponse?: PostServersCreateServerResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
