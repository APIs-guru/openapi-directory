import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutLoadBalancersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutLoadBalancersIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices })
  prices: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[];
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLocation extends SpeakeasyBase {
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


export class PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: number;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerProtection
/** 
 * Protection configuration for the Resource
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4
/** 
 * IP address (v4)
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6
/** 
 * IP address (v6)
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet
/** 
 * Public network information
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4: PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6: PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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

export enum PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp extends SpeakeasyBase {
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

export enum PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp;

  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus })
  healthStatus?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp;

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets })
  targets?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class PutLoadBalancersId200ApplicationJsonLoadBalancer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm: PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm;

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
  loadBalancerType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: PutLoadBalancersId200ApplicationJsonLoadBalancerLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=private_net", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet })
  privateNet: PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[];

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PutLoadBalancersId200ApplicationJsonLoadBalancerProtection;

  @SpeakeasyMetadata({ data: "json, name=public_net" })
  publicNet: PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService })
  services: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[];

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget })
  targets: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[];
}


export class PutLoadBalancersId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=load_balancer" })
  loadBalancer: PutLoadBalancersId200ApplicationJsonLoadBalancer;
}


export class PutLoadBalancersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutLoadBalancersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutLoadBalancersIdRequestBody;
}


export class PutLoadBalancersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putLoadBalancersId200ApplicationJsonObject?: PutLoadBalancersId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
