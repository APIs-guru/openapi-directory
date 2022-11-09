import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoadBalancersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetLoadBalancersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLoadBalancersIdPathParams;
}

export enum GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=prices", elemType: operations.GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices })
  prices: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[];
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLocation extends SpeakeasyBase {
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


export class GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=network" })
  network?: number;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerProtection
/** 
 * Protection configuration for the Resource
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4
/** 
 * IP address (v4)
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6
/** 
 * IP address (v6)
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet
/** 
 * Public network information
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=ipv4" })
  ipv4: GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4;

  @Metadata({ data: "json, name=ipv6" })
  ipv6: GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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

export enum GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=http" })
  http?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @Metadata({ data: "json, name=interval" })
  interval: number;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=retries" })
  retries: number;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp extends SpeakeasyBase {
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

export enum GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
,    Https = "https"
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @Metadata({ data: "json, name=health_check" })
  healthCheck: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @Metadata({ data: "json, name=http" })
  http?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp;

  @Metadata({ data: "json, name=listen_port" })
  listenPort: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;

  @Metadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[];

  @Metadata({ data: "json, name=server" })
  server?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
,    Ip = "ip"
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus })
  healthStatus?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[];

  @Metadata({ data: "json, name=ip" })
  ip?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp;

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;

  @Metadata({ data: "json, name=targets", elemType: operations.GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets })
  targets?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[];

  @Metadata({ data: "json, name=type" })
  type: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancer extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm: GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm;

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
  loadBalancerType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType;

  @Metadata({ data: "json, name=location" })
  location: GetLoadBalancersId200ApplicationJsonLoadBalancerLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @Metadata({ data: "json, name=private_net", elemType: operations.GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet })
  privateNet: GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[];

  @Metadata({ data: "json, name=protection" })
  protection: GetLoadBalancersId200ApplicationJsonLoadBalancerProtection;

  @Metadata({ data: "json, name=public_net" })
  publicNet: GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet;

  @Metadata({ data: "json, name=services", elemType: operations.GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService })
  services: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[];

  @Metadata({ data: "json, name=targets", elemType: operations.GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget })
  targets: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[];
}


export class GetLoadBalancersId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=load_balancer" })
  loadBalancer: GetLoadBalancersId200ApplicationJsonLoadBalancer;
}


export class GetLoadBalancersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLoadBalancersId200ApplicationJsonObject?: GetLoadBalancersId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
