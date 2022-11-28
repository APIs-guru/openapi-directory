import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetLoadBalancersSortEnum {
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


export class GetLoadBalancersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetLoadBalancersSortEnum;
}

export enum GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}


// GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=max_assigned_certificates" })
  maxAssignedCertificates: number;

  @SpeakeasyMetadata({ data: "json, name=max_connections" })
  maxConnections: number;

  @SpeakeasyMetadata({ data: "json, name=max_services" })
  maxServices: number;

  @SpeakeasyMetadata({ data: "json, name=max_targets" })
  maxTargets: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices })
  prices: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices[];
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLocation extends SpeakeasyBase {
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


export class GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: number;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersProtection
/** 
 * Protection configuration for the Resource
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4
/** 
 * IP address (v4)
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6
/** 
 * IP address (v6)
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet
/** 
 * Public network information
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4: GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6: GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: string;

  @SpeakeasyMetadata({ data: "json, name=status_codes" })
  statusCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=tls" })
  tls?: boolean;
}

export enum GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates" })
  certificates?: number[];

  @SpeakeasyMetadata({ data: "json, name=cookie_lifetime" })
  cookieLifetime: number;

  @SpeakeasyMetadata({ data: "json, name=cookie_name" })
  cookieName: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_http" })
  redirectHttp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sticky_sessions" })
  stickySessions?: boolean;
}

export enum GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp;

  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus })
  healthStatus?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp;

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets })
  targets?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm: GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=load_balancer_type" })
  loadBalancerType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: GetLoadBalancers200ApplicationJsonLoadBalancersLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=private_net", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet })
  privateNet: GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet[];

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetLoadBalancers200ApplicationJsonLoadBalancersProtection;

  @SpeakeasyMetadata({ data: "json, name=public_net" })
  publicNet: GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService })
  services: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService[];

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget })
  targets: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget[];
}


export class GetLoadBalancers200ApplicationJsonMetaPagination extends SpeakeasyBase {
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


export class GetLoadBalancers200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetLoadBalancers200ApplicationJsonMetaPagination;
}


export class GetLoadBalancers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=load_balancers", elemType: GetLoadBalancers200ApplicationJsonLoadBalancers })
  loadBalancers: GetLoadBalancers200ApplicationJsonLoadBalancers[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetLoadBalancers200ApplicationJsonMeta;
}


export class GetLoadBalancersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLoadBalancersQueryParams;
}


export class GetLoadBalancersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLoadBalancers200ApplicationJsonObject?: GetLoadBalancers200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
