import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum;
}


// PostLoadBalancersCreateLoadBalancerRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PostLoadBalancersCreateLoadBalancerRequestLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelkey" })
  labelkey?: string;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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

export enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp extends SpeakeasyBase {
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

export enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp;

  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}


export class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus })
  healthStatus?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp;

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets })
  targets?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class PostLoadBalancersCreateLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: PostLoadBalancersCreateLoadBalancerRequestLabels;

  @SpeakeasyMetadata({ data: "json, name=load_balancer_type" })
  loadBalancerType: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: number;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone?: string;

  @SpeakeasyMetadata({ data: "json, name=public_interface" })
  publicInterface?: boolean;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService })
  services?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService[];

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget })
  targets?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget[];
}


// PostLoadBalancers201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancers201ApplicationJsonActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancers201ApplicationJsonActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancers201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancers201ApplicationJsonAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancers201ApplicationJsonActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancers201ApplicationJsonActionResources })
  resources: PostLoadBalancers201ApplicationJsonActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancers201ApplicationJsonActionStatusEnum;
}

export enum PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}


// PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm
/** 
 * Algorithm of the Load Balancer
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices })
  prices: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices[];
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLocation extends SpeakeasyBase {
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


export class PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: number;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerProtection
/** 
 * Protection configuration for the Resource
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4
/** 
 * IP address (v4)
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6
/** 
 * IP address (v6)
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet
/** 
 * Public network information
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4: PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6: PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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

export enum PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp extends SpeakeasyBase {
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

export enum PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp;

  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
/** 
 * Label selector and a list of selected targets
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
/** 
 * Server where the traffic should be routed through
**/
export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus })
  healthStatus?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}

export enum PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}


export class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health_status", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus })
  healthStatus?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp;

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets })
  targets?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class PostLoadBalancers201ApplicationJsonLoadBalancer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm: PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm;

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
  loadBalancerType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: PostLoadBalancers201ApplicationJsonLoadBalancerLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=outgoing_traffic" })
  outgoingTraffic: number;

  @SpeakeasyMetadata({ data: "json, name=private_net", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet })
  privateNet: PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet[];

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PostLoadBalancers201ApplicationJsonLoadBalancerProtection;

  @SpeakeasyMetadata({ data: "json, name=public_net" })
  publicNet: PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService })
  services: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService[];

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget })
  targets: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget[];
}


export class PostLoadBalancers201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancers201ApplicationJsonAction;

  @SpeakeasyMetadata({ data: "json, name=load_balancer" })
  loadBalancer: PostLoadBalancers201ApplicationJsonLoadBalancer;
}


export class PostLoadBalancersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersCreateLoadBalancerRequest;
}


export class PostLoadBalancersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postLoadBalancers201ApplicationJsonObject?: PostLoadBalancers201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
