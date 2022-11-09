import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum;
}


// PostLoadBalancersCreateLoadBalancerRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PostLoadBalancersCreateLoadBalancerRequestLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelkey" })
  labelkey?: string;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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

export enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=http" })
  http?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @Metadata({ data: "json, name=interval" })
  interval: number;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=retries" })
  retries: number;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp extends SpeakeasyBase {
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

export enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
,    Https = "https"
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @Metadata({ data: "json, name=health_check" })
  healthCheck: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @Metadata({ data: "json, name=http" })
  http?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp;

  @Metadata({ data: "json, name=listen_port" })
  listenPort: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum;

  @Metadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus[];

  @Metadata({ data: "json, name=server" })
  server?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
,    Ip = "ip"
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus })
  healthStatus?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus[];

  @Metadata({ data: "json, name=ip" })
  ip?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp;

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer;

  @Metadata({ data: "json, name=targets", elemType: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets })
  targets?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets[];

  @Metadata({ data: "json, name=type" })
  type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class PostLoadBalancersCreateLoadBalancerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm;

  @Metadata({ data: "json, name=labels" })
  labels?: PostLoadBalancersCreateLoadBalancerRequestLabels;

  @Metadata({ data: "json, name=load_balancer_type" })
  loadBalancerType: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=network" })
  network?: number;

  @Metadata({ data: "json, name=network_zone" })
  networkZone?: string;

  @Metadata({ data: "json, name=public_interface" })
  publicInterface?: boolean;

  @Metadata({ data: "json, name=services", elemType: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService })
  services?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService[];

  @Metadata({ data: "json, name=targets", elemType: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget })
  targets?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget[];
}


export class PostLoadBalancersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersCreateLoadBalancerRequest;
}


// PostLoadBalancers201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancers201ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancers201ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancers201ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancers201ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancers201ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancers201ApplicationJsonActionResources })
  resources: PostLoadBalancers201ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancers201ApplicationJsonActionStatusEnum;
}

export enum PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}


// PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=prices", elemType: operations.PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices })
  prices: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices[];
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLocation extends SpeakeasyBase {
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


export class PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=network" })
  network?: number;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerProtection
/** 
 * Protection configuration for the Resource
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4
/** 
 * IP address (v4)
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6
/** 
 * IP address (v6)
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet
/** 
 * Public network information
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=ipv4" })
  ipv4: PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4;

  @Metadata({ data: "json, name=ipv6" })
  ipv6: PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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

export enum PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=http" })
  http?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @Metadata({ data: "json, name=interval" })
  interval: number;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=retries" })
  retries: number;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp extends SpeakeasyBase {
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

export enum PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
,    Https = "https"
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @Metadata({ data: "json, name=health_check" })
  healthCheck: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @Metadata({ data: "json, name=http" })
  http?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp;

  @Metadata({ data: "json, name=listen_port" })
  listenPort: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;

  @Metadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[];

  @Metadata({ data: "json, name=server" })
  server?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
,    Ip = "ip"
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=health_status", elemType: operations.PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus })
  healthStatus?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[];

  @Metadata({ data: "json, name=ip" })
  ip?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp;

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;

  @Metadata({ data: "json, name=targets", elemType: operations.PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets })
  targets?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets[];

  @Metadata({ data: "json, name=type" })
  type: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancer extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm: PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm;

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
  loadBalancerType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType;

  @Metadata({ data: "json, name=location" })
  location: PostLoadBalancers201ApplicationJsonLoadBalancerLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @Metadata({ data: "json, name=private_net", elemType: operations.PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet })
  privateNet: PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet[];

  @Metadata({ data: "json, name=protection" })
  protection: PostLoadBalancers201ApplicationJsonLoadBalancerProtection;

  @Metadata({ data: "json, name=public_net" })
  publicNet: PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet;

  @Metadata({ data: "json, name=services", elemType: operations.PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService })
  services: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService[];

  @Metadata({ data: "json, name=targets", elemType: operations.PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget })
  targets: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget[];
}


export class PostLoadBalancers201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancers201ApplicationJsonAction;

  @Metadata({ data: "json, name=load_balancer" })
  loadBalancer: PostLoadBalancers201ApplicationJsonLoadBalancer;
}


export class PostLoadBalancersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postLoadBalancers201ApplicationJsonObject?: PostLoadBalancers201ApplicationJson;

  @Metadata()
  statusCode: number;
}
