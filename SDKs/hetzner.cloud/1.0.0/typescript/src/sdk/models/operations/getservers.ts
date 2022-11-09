import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetServersSortEnum {
    Id = "id"
,    IdAsc = "id:asc"
,    IdDesc = "id:desc"
,    Name = "name"
,    NameAsc = "name:asc"
,    NameDesc = "name:desc"
,    Created = "created"
,    CreatedAsc = "created:asc"
,    CreatedDesc = "created:desc"
}

export enum GetServersStatusEnum {
    Initializing = "initializing"
,    Starting = "starting"
,    Running = "running"
,    Stopping = "stopping"
,    Off = "off"
,    Deleting = "deleting"
,    Rebuilding = "rebuilding"
,    Migrating = "migrating"
,    Unknown = "unknown"
}


export class GetServersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetServersSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetServersStatusEnum;
}


export class GetServersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetServersQueryParams;
}


export class GetServers200ApplicationJsonMetaPagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_page" })
  lastPage: number;

  @Metadata({ data: "json, name=next_page" })
  nextPage: number;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=per_page" })
  perPage: number;

  @Metadata({ data: "json, name=previous_page" })
  previousPage: number;

  @Metadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetServers200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetServers200ApplicationJsonMetaPagination;
}


export class GetServers200ApplicationJsonServersDatacenterLocation extends SpeakeasyBase {
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


// GetServers200ApplicationJsonServersDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class GetServers200ApplicationJsonServersDatacenterServerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: number[];

  @Metadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @Metadata({ data: "json, name=supported" })
  supported: number[];
}


// GetServers200ApplicationJsonServersDatacenter
/** 
 * Datacenter this Resource is located at
**/
export class GetServers200ApplicationJsonServersDatacenter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=location" })
  location: GetServers200ApplicationJsonServersDatacenterLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=server_types" })
  serverTypes: GetServers200ApplicationJsonServersDatacenterServerTypes;
}


// GetServers200ApplicationJsonServersImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class GetServers200ApplicationJsonServersImageCreatedFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}

export enum GetServers200ApplicationJsonServersImageOsFlavorEnum {
    Ubuntu = "ubuntu"
,    Centos = "centos"
,    Debian = "debian"
,    Fedora = "fedora"
,    Unknown = "unknown"
}


// GetServers200ApplicationJsonServersImageProtection
/** 
 * Protection configuration for the Resource
**/
export class GetServers200ApplicationJsonServersImageProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetServers200ApplicationJsonServersImageStatusEnum {
    Available = "available"
,    Creating = "creating"
,    Unavailable = "unavailable"
}

export enum GetServers200ApplicationJsonServersImageTypeEnum {
    System = "system"
,    App = "app"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Temporary = "temporary"
}


export class GetServers200ApplicationJsonServersImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=bound_to" })
  boundTo: number;

  @Metadata({ data: "json, name=build_id" })
  buildId?: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=created_from" })
  createdFrom: GetServers200ApplicationJsonServersImageCreatedFrom;

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
  osFlavor: GetServers200ApplicationJsonServersImageOsFlavorEnum;

  @Metadata({ data: "json, name=os_version" })
  osVersion: string;

  @Metadata({ data: "json, name=protection" })
  protection: GetServers200ApplicationJsonServersImageProtection;

  @Metadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @Metadata({ data: "json, name=status" })
  status: GetServers200ApplicationJsonServersImageStatusEnum;

  @Metadata({ data: "json, name=type" })
  type: GetServers200ApplicationJsonServersImageTypeEnum;
}

export enum GetServers200ApplicationJsonServersIsoTypeEnum {
    Public = "public"
,    Private = "private"
}


// GetServers200ApplicationJsonServersIso
/** 
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export class GetServers200ApplicationJsonServersIso extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: GetServers200ApplicationJsonServersIsoTypeEnum;
}

export enum GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum {
    Spread = "spread"
}


export class GetServers200ApplicationJsonServersPlacementGroupNullable extends SpeakeasyBase {
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
  type: GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum;
}


export class GetServers200ApplicationJsonServersPrivateNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias_ips" })
  aliasIps?: string[];

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "json, name=network" })
  network?: number;
}


// GetServers200ApplicationJsonServersProtection
/** 
 * Protection configuration for the Server
**/
export class GetServers200ApplicationJsonServersProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;

  @Metadata({ data: "json, name=rebuild" })
  rebuild: boolean;
}

export enum GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied"
,    Pending = "pending"
}


export class GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=status" })
  status?: GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum;
}


// GetServers200ApplicationJsonServersPublicNetIpv4
/** 
 * IP address (v4) and its reverse DNS entry of this Server
**/
export class GetServers200ApplicationJsonServersPublicNetIpv4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


export class GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// GetServers200ApplicationJsonServersPublicNetIpv6
/** 
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export class GetServers200ApplicationJsonServersPublicNetIpv6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=dns_ptr", elemType: operations.GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr })
  dnsPtr: GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr[];

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// GetServers200ApplicationJsonServersPublicNet
/** 
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export class GetServers200ApplicationJsonServersPublicNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewalls", elemType: operations.GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall })
  firewalls?: GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall[];

  @Metadata({ data: "json, name=floating_ips" })
  floatingIps: number[];

  @Metadata({ data: "json, name=ipv4" })
  ipv4: GetServers200ApplicationJsonServersPublicNetIpv4;

  @Metadata({ data: "json, name=ipv6" })
  ipv6: GetServers200ApplicationJsonServersPublicNetIpv6;
}

export enum GetServers200ApplicationJsonServersServerTypeCpuTypeEnum {
    Shared = "shared"
,    Dedicated = "dedicated"
}


// GetServers200ApplicationJsonServersServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetServers200ApplicationJsonServersServerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetServers200ApplicationJsonServersServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetServers200ApplicationJsonServersServerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetServers200ApplicationJsonServersServerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetServers200ApplicationJsonServersServerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetServers200ApplicationJsonServersServerTypePricesPriceMonthly;
}

export enum GetServers200ApplicationJsonServersServerTypeStorageTypeEnum {
    Local = "local"
,    Network = "network"
}


// GetServers200ApplicationJsonServersServerType
/** 
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export class GetServers200ApplicationJsonServersServerType extends SpeakeasyBase {
  @Metadata({ data: "json, name=cores" })
  cores: number;

  @Metadata({ data: "json, name=cpu_type" })
  cpuType: GetServers200ApplicationJsonServersServerTypeCpuTypeEnum;

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

  @Metadata({ data: "json, name=prices", elemType: operations.GetServers200ApplicationJsonServersServerTypePrices })
  prices: GetServers200ApplicationJsonServersServerTypePrices[];

  @Metadata({ data: "json, name=storage_type" })
  storageType: GetServers200ApplicationJsonServersServerTypeStorageTypeEnum;
}

export enum GetServers200ApplicationJsonServersStatusEnum {
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


export class GetServers200ApplicationJsonServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup_window" })
  backupWindow: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=datacenter" })
  datacenter: GetServers200ApplicationJsonServersDatacenter;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=image" })
  image: GetServers200ApplicationJsonServersImage;

  @Metadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @Metadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @Metadata({ data: "json, name=iso" })
  iso: GetServers200ApplicationJsonServersIso;

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
  placementGroup?: GetServers200ApplicationJsonServersPlacementGroupNullable;

  @Metadata({ data: "json, name=primary_disk_size" })
  primaryDiskSize: number;

  @Metadata({ data: "json, name=private_net", elemType: operations.GetServers200ApplicationJsonServersPrivateNet })
  privateNet: GetServers200ApplicationJsonServersPrivateNet[];

  @Metadata({ data: "json, name=protection" })
  protection: GetServers200ApplicationJsonServersProtection;

  @Metadata({ data: "json, name=public_net" })
  publicNet: GetServers200ApplicationJsonServersPublicNet;

  @Metadata({ data: "json, name=rescue_enabled" })
  rescueEnabled: boolean;

  @Metadata({ data: "json, name=server_type" })
  serverType: GetServers200ApplicationJsonServersServerType;

  @Metadata({ data: "json, name=status" })
  status: GetServers200ApplicationJsonServersStatusEnum;

  @Metadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class GetServers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: GetServers200ApplicationJsonMeta;

  @Metadata({ data: "json, name=servers", elemType: operations.GetServers200ApplicationJsonServers })
  servers: GetServers200ApplicationJsonServers[];
}


export class GetServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServers200ApplicationJsonObject?: GetServers200ApplicationJson;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
