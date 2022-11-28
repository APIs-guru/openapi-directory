import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoadBalancersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices })
  prices: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[];
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLocation extends SpeakeasyBase {
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


export class GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: number;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerProtection
/** 
 * Protection configuration for the Resource
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4
/** 
 * IP address (v4)
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6
/** 
 * IP address (v6)
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet
/** 
 * Public network information
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4: GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6: GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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

export enum GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp extends SpeakeasyBase {
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

export enum GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp;

  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus })
  healthStatus?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp;

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets })
  targets?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class GetLoadBalancersId200ApplicationJsonLoadBalancer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm: GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm;

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
  loadBalancerType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: GetLoadBalancersId200ApplicationJsonLoadBalancerLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=private_net", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet })
  privateNet: GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[];

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetLoadBalancersId200ApplicationJsonLoadBalancerProtection;

  @SpeakeasyMetadata({ data: "json, name=public_net" })
  publicNet: GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService })
  services: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[];

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget })
  targets: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[];
}


export class GetLoadBalancersId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=load_balancer" })
  loadBalancer: GetLoadBalancersId200ApplicationJsonLoadBalancer;
}


export class GetLoadBalancersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLoadBalancersIdPathParams;
}


export class GetLoadBalancersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLoadBalancersId200ApplicationJsonObject?: GetLoadBalancersId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
