import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetLoadBalancersSortEnum {
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


export class GetLoadBalancersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetLoadBalancersSortEnum;
}


export class GetLoadBalancersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLoadBalancersQueryParams;
}

export enum GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}


// GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=max_assigned_certificates" })
  maxAssignedCertificates: number;

  @Metadata({ data: "json, name=max_connections" })
  maxConnections: number;

  @Metadata({ data: "json, name=max_services" })
  maxServices: number;

  @Metadata({ data: "json, name=max_targets" })
  maxTargets: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=prices", elemType: operations.GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices })
  prices: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices[];
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLocation extends SpeakeasyBase {
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


export class GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=network" })
  network?: number;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersProtection
/** 
 * Protection configuration for the Resource
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4
/** 
 * IP address (v4)
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6
/** 
 * IP address (v6)
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet
/** 
 * Public network information
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=ipv4" })
  ipv4: GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4;

  @Metadata({ data: "json, name=ipv6" })
  ipv6: GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=response" })
  response?: string;

  @Metadata({ data: "json, name=status_codes" })
  statusCodes?: string[];

  @Metadata({ data: "json, name=tls" })
  tls?: boolean;
}

export enum GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=http" })
  http?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @Metadata({ data: "json, name=interval" })
  interval: number;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=retries" })
  retries: number;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates" })
  certificates?: number[];

  @Metadata({ data: "json, name=cookie_lifetime" })
  cookieLifetime: number;

  @Metadata({ data: "json, name=cookie_name" })
  cookieName: string;

  @Metadata({ data: "json, name=redirect_http" })
  redirectHttp?: boolean;

  @Metadata({ data: "json, name=sticky_sessions" })
  stickySessions?: boolean;
}

export enum GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
,    Https = "https"
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @Metadata({ data: "json, name=health_check" })
  healthCheck: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @Metadata({ data: "json, name=http" })
  http?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp;

  @Metadata({ data: "json, name=listen_port" })
  listenPort: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum;

  @Metadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus[];

  @Metadata({ data: "json, name=server" })
  server?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
,    Ip = "ip"
}


export class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus })
  healthStatus?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus[];

  @Metadata({ data: "json, name=ip" })
  ip?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp;

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer;

  @Metadata({ data: "json, name=targets", elemType: operations.GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets })
  targets?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets[];

  @Metadata({ data: "json, name=type" })
  type: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class GetLoadBalancers200ApplicationJsonLoadBalancers extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm: GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=included_traffic" })
  includedTraffic: number;

  @Metadata({ data: "json, name=ingoing_traffic" })
  ingoingTraffic: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=load_balancer_type" })
  loadBalancerType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType;

  @Metadata({ data: "json, name=location" })
  location: GetLoadBalancers200ApplicationJsonLoadBalancersLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @Metadata({ data: "json, name=private_net", elemType: operations.GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet })
  privateNet: GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet[];

  @Metadata({ data: "json, name=protection" })
  protection: GetLoadBalancers200ApplicationJsonLoadBalancersProtection;

  @Metadata({ data: "json, name=public_net" })
  publicNet: GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet;

  @Metadata({ data: "json, name=services", elemType: operations.GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService })
  services: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService[];

  @Metadata({ data: "json, name=targets", elemType: operations.GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget })
  targets: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget[];
}


export class GetLoadBalancers200ApplicationJsonMetaPagination extends SpeakeasyBase {
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


export class GetLoadBalancers200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetLoadBalancers200ApplicationJsonMetaPagination;
}


export class GetLoadBalancers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=load_balancers", elemType: operations.GetLoadBalancers200ApplicationJsonLoadBalancers })
  loadBalancers: GetLoadBalancers200ApplicationJsonLoadBalancers[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetLoadBalancers200ApplicationJsonMeta;
}


export class GetLoadBalancersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLoadBalancers200ApplicationJsonObject?: GetLoadBalancers200ApplicationJson;

  @Metadata()
  statusCode: number;
}
