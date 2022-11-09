import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutLoadBalancersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutLoadBalancersIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutLoadBalancersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutLoadBalancersIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutLoadBalancersIdRequestBody;
}

export enum PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=prices", elemType: operations.PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices })
  prices: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[];
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLocation extends SpeakeasyBase {
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


export class PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=network" })
  network?: number;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerProtection
/** 
 * Protection configuration for the Resource
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4
/** 
 * IP address (v4)
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6
/** 
 * IP address (v6)
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet
/** 
 * Public network information
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=ipv4" })
  ipv4: PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4;

  @Metadata({ data: "json, name=ipv6" })
  ipv6: PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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

export enum PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=http" })
  http?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @Metadata({ data: "json, name=interval" })
  interval: number;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=retries" })
  retries: number;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp extends SpeakeasyBase {
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

export enum PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
,    Https = "https"
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @Metadata({ data: "json, name=health_check" })
  healthCheck: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @Metadata({ data: "json, name=http" })
  http?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp;

  @Metadata({ data: "json, name=listen_port" })
  listenPort: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;

  @Metadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[];

  @Metadata({ data: "json, name=server" })
  server?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
,    Ip = "ip"
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus })
  healthStatus?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[];

  @Metadata({ data: "json, name=ip" })
  ip?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp;

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;

  @Metadata({ data: "json, name=targets", elemType: operations.PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets })
  targets?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[];

  @Metadata({ data: "json, name=type" })
  type: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancer extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm: PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm;

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
  loadBalancerType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType;

  @Metadata({ data: "json, name=location" })
  location: PutLoadBalancersId200ApplicationJsonLoadBalancerLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @Metadata({ data: "json, name=private_net", elemType: operations.PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet })
  privateNet: PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[];

  @Metadata({ data: "json, name=protection" })
  protection: PutLoadBalancersId200ApplicationJsonLoadBalancerProtection;

  @Metadata({ data: "json, name=public_net" })
  publicNet: PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet;

  @Metadata({ data: "json, name=services", elemType: operations.PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService })
  services: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[];

  @Metadata({ data: "json, name=targets", elemType: operations.PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget })
  targets: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[];
}


export class PutLoadBalancersId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=load_balancer" })
  loadBalancer: PutLoadBalancersId200ApplicationJsonLoadBalancer;
}


export class PutLoadBalancersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putLoadBalancersId200ApplicationJsonObject?: PutLoadBalancersId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
