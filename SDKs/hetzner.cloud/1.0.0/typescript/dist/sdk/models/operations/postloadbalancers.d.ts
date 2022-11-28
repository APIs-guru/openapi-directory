import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
**/
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm extends SpeakeasyBase {
    type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum;
}
/**
 * User-defined labels (key-value pairs)
**/
export declare class PostLoadBalancersCreateLoadBalancerRequestLabels extends SpeakeasyBase {
    labelkey?: string;
}
/**
 * Additional configuration for protocol http
**/
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    domain: string;
    path: string;
    response?: string;
    statusCodes?: string[];
    tls?: boolean;
}
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
**/
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    http?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    interval: number;
    port: number;
    protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    retries: number;
    timeout: number;
}
/**
 * Configuration option for protocols http and https
**/
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp extends SpeakeasyBase {
    certificates?: number[];
    cookieLifetime: number;
    cookieName: string;
    redirectHttp?: boolean;
    stickySessions?: boolean;
}
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService extends SpeakeasyBase {
    destinationPort: number;
    healthCheck: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck;
    http?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp;
    listenPort: number;
    protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum;
    proxyprotocol: boolean;
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp extends SpeakeasyBase {
    ip: string;
}
/**
 * Label selector and a list of selected targets
**/
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Server where the traffic should be routed through
**/
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus[];
    server?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget extends SpeakeasyBase {
    healthStatus?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus[];
    ip?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp;
    labelSelector?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector;
    server?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer;
    targets?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets[];
    type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum;
    usePrivateIp?: boolean;
}
export declare class PostLoadBalancersCreateLoadBalancerRequest extends SpeakeasyBase {
    algorithm: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm;
    labels?: PostLoadBalancersCreateLoadBalancerRequestLabels;
    loadBalancerType: string;
    location?: string;
    name: string;
    network?: number;
    networkZone?: string;
    publicInterface?: boolean;
    services?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService[];
    targets?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget[];
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancers201ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancers201ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancers201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancers201ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancers201ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancers201ApplicationJsonActionResources[];
    started: string;
    status: PostLoadBalancers201ApplicationJsonActionStatusEnum;
}
export declare enum PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm extends SpeakeasyBase {
    type: PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum;
}
/**
 * Hourly costs for a Resource in this Location
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Resource in this Location
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;
    priceMonthly: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    maxAssignedCertificates: number;
    maxConnections: number;
    maxServices: number;
    maxTargets: number;
    name: string;
    prices: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices[];
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet extends SpeakeasyBase {
    ip?: string;
    network?: number;
}
/**
 * Protection configuration for the Resource
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerProtection extends SpeakeasyBase {
    delete: boolean;
}
/**
 * IP address (v4)
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
    dnsPtr?: string;
    ip?: string;
}
/**
 * IP address (v6)
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
    dnsPtr?: string;
    ip?: string;
}
/**
 * Public network information
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet extends SpeakeasyBase {
    enabled: boolean;
    ipv4: PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4;
    ipv6: PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6;
}
/**
 * Additional configuration for protocol http
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    domain: string;
    path: string;
    response?: string;
    statusCodes?: string[];
    tls?: boolean;
}
export declare enum PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    http?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    interval: number;
    port: number;
    protocol: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    retries: number;
    timeout: number;
}
/**
 * Configuration option for protocols http and https
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp extends SpeakeasyBase {
    certificates?: number[];
    cookieLifetime: number;
    cookieName: string;
    redirectHttp?: boolean;
    stickySessions?: boolean;
}
export declare enum PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService extends SpeakeasyBase {
    destinationPort: number;
    healthCheck: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;
    http?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp;
    listenPort: number;
    protocol: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;
    proxyprotocol: boolean;
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
    ip: string;
}
/**
 * Label selector and a list of selected targets
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Server where the traffic should be routed through
**/
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[];
    server?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
export declare enum PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
    healthStatus?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[];
    ip?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp;
    labelSelector?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;
    server?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;
    targets?: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets[];
    type: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;
    usePrivateIp?: boolean;
}
export declare class PostLoadBalancers201ApplicationJsonLoadBalancer extends SpeakeasyBase {
    algorithm: PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm;
    created: string;
    id: number;
    includedTraffic: number;
    ingoingTraffic: number;
    labels: Map<string, string>;
    loadBalancerType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType;
    location: PostLoadBalancers201ApplicationJsonLoadBalancerLocation;
    name: string;
    outgoingTraffic: number;
    privateNet: PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet[];
    protection: PostLoadBalancers201ApplicationJsonLoadBalancerProtection;
    publicNet: PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet;
    services: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService[];
    targets: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget[];
}
export declare class PostLoadBalancers201ApplicationJson extends SpeakeasyBase {
    action: PostLoadBalancers201ApplicationJsonAction;
    loadBalancer: PostLoadBalancers201ApplicationJsonLoadBalancer;
}
export declare class PostLoadBalancersRequest extends SpeakeasyBase {
    request?: PostLoadBalancersCreateLoadBalancerRequest;
}
export declare class PostLoadBalancersResponse extends SpeakeasyBase {
    contentType: string;
    postLoadBalancers201ApplicationJsonObject?: PostLoadBalancers201ApplicationJson;
    statusCode: number;
}
