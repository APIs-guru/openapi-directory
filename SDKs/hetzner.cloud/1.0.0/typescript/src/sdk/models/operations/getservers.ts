import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetServersSortEnum {
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

export enum GetServersStatusEnum {
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


export class GetServersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetServersSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetServersStatusEnum;
}


export class GetServers200ApplicationJsonMetaPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_page" })
  lastPage: number;

  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page" })
  previousPage: number;

  @SpeakeasyMetadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetServers200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetServers200ApplicationJsonMetaPagination;
}


export class GetServers200ApplicationJsonServersDatacenterLocation extends SpeakeasyBase {
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


// GetServers200ApplicationJsonServersDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class GetServers200ApplicationJsonServersDatacenterServerTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: number[];

  @SpeakeasyMetadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @SpeakeasyMetadata({ data: "json, name=supported" })
  supported: number[];
}


// GetServers200ApplicationJsonServersDatacenter
/** 
 * Datacenter this Resource is located at
**/
export class GetServers200ApplicationJsonServersDatacenter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: GetServers200ApplicationJsonServersDatacenterLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=server_types" })
  serverTypes: GetServers200ApplicationJsonServersDatacenterServerTypes;
}


// GetServers200ApplicationJsonServersImageCreatedFrom
/** 
 * Information about the Server the Image was created from
**/
export class GetServers200ApplicationJsonServersImageCreatedFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum GetServers200ApplicationJsonServersImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}


// GetServers200ApplicationJsonServersImageProtection
/** 
 * Protection configuration for the Resource
**/
export class GetServers200ApplicationJsonServersImageProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetServers200ApplicationJsonServersImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}

export enum GetServers200ApplicationJsonServersImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}


export class GetServers200ApplicationJsonServersImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bound_to" })
  boundTo: number;

  @SpeakeasyMetadata({ data: "json, name=build_id" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=created_from" })
  createdFrom: GetServers200ApplicationJsonServersImageCreatedFrom;

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
  osFlavor: GetServers200ApplicationJsonServersImageOsFlavorEnum;

  @SpeakeasyMetadata({ data: "json, name=os_version" })
  osVersion: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetServers200ApplicationJsonServersImageProtection;

  @SpeakeasyMetadata({ data: "json, name=rapid_deploy" })
  rapidDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetServers200ApplicationJsonServersImageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetServers200ApplicationJsonServersImageTypeEnum;
}

export enum GetServers200ApplicationJsonServersIsoTypeEnum {
    Public = "public",
    Private = "private"
}


// GetServers200ApplicationJsonServersIso
/** 
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
export class GetServers200ApplicationJsonServersIso extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetServers200ApplicationJsonServersIsoTypeEnum;
}

export enum GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum {
    Spread = "spread"
}


export class GetServers200ApplicationJsonServersPlacementGroupNullable extends SpeakeasyBase {
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
  type: GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum;
}


export class GetServers200ApplicationJsonServersPrivateNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias_ips" })
  aliasIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: number;
}


// GetServers200ApplicationJsonServersProtection
/** 
 * Protection configuration for the Server
**/
export class GetServers200ApplicationJsonServersProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;

  @SpeakeasyMetadata({ data: "json, name=rebuild" })
  rebuild: boolean;
}

export enum GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum {
    Applied = "applied",
    Pending = "pending"
}


export class GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum;
}


// GetServers200ApplicationJsonServersPublicNetIpv4
/** 
 * IP address (v4) and its reverse DNS entry of this Server
**/
export class GetServers200ApplicationJsonServersPublicNetIpv4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


export class GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// GetServers200ApplicationJsonServersPublicNetIpv6
/** 
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
export class GetServers200ApplicationJsonServersPublicNetIpv6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr })
  dnsPtr: GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// GetServers200ApplicationJsonServersPublicNet
/** 
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
export class GetServers200ApplicationJsonServersPublicNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewalls", elemType: GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall })
  firewalls?: GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall[];

  @SpeakeasyMetadata({ data: "json, name=floating_ips" })
  floatingIps: number[];

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4: GetServers200ApplicationJsonServersPublicNetIpv4;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6: GetServers200ApplicationJsonServersPublicNetIpv6;
}

export enum GetServers200ApplicationJsonServersServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}


// GetServers200ApplicationJsonServersServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetServers200ApplicationJsonServersServerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetServers200ApplicationJsonServersServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetServers200ApplicationJsonServersServerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetServers200ApplicationJsonServersServerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetServers200ApplicationJsonServersServerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetServers200ApplicationJsonServersServerTypePricesPriceMonthly;
}

export enum GetServers200ApplicationJsonServersServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}


// GetServers200ApplicationJsonServersServerType
/** 
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
export class GetServers200ApplicationJsonServersServerType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cores" })
  cores: number;

  @SpeakeasyMetadata({ data: "json, name=cpu_type" })
  cpuType: GetServers200ApplicationJsonServersServerTypeCpuTypeEnum;

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

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetServers200ApplicationJsonServersServerTypePrices })
  prices: GetServers200ApplicationJsonServersServerTypePrices[];

  @SpeakeasyMetadata({ data: "json, name=storage_type" })
  storageType: GetServers200ApplicationJsonServersServerTypeStorageTypeEnum;
}

export enum GetServers200ApplicationJsonServersStatusEnum {
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


export class GetServers200ApplicationJsonServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup_window" })
  backupWindow: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=datacenter" })
  datacenter: GetServers200ApplicationJsonServersDatacenter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: GetServers200ApplicationJsonServersImage;

  @SpeakeasyMetadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=iso" })
  iso: GetServers200ApplicationJsonServersIso;

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
  placementGroup?: GetServers200ApplicationJsonServersPlacementGroupNullable;

  @SpeakeasyMetadata({ data: "json, name=primary_disk_size" })
  primaryDiskSize: number;

  @SpeakeasyMetadata({ data: "json, name=private_net", elemType: GetServers200ApplicationJsonServersPrivateNet })
  privateNet: GetServers200ApplicationJsonServersPrivateNet[];

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetServers200ApplicationJsonServersProtection;

  @SpeakeasyMetadata({ data: "json, name=public_net" })
  publicNet: GetServers200ApplicationJsonServersPublicNet;

  @SpeakeasyMetadata({ data: "json, name=rescue_enabled" })
  rescueEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=server_type" })
  serverType: GetServers200ApplicationJsonServersServerType;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetServers200ApplicationJsonServersStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class GetServers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetServers200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=servers", elemType: GetServers200ApplicationJsonServers })
  servers: GetServers200ApplicationJsonServers[];
}


export class GetServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetServersQueryParams;
}


export class GetServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getServers200ApplicationJsonObject?: GetServers200ApplicationJson;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
