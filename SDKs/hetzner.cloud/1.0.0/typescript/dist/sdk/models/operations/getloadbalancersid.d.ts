import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLoadBalancersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm extends SpeakeasyBase {
    type: GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum;
}
/**
 * Hourly costs for a Resource in this Location
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Resource in this Location
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;
    priceMonthly: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    maxAssignedCertificates: number;
    maxConnections: number;
    maxServices: number;
    maxTargets: number;
    name: string;
    prices: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[];
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet extends SpeakeasyBase {
    ip?: string;
    network?: number;
}
/**
 * Protection configuration for the Resource
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerProtection extends SpeakeasyBase {
    delete: boolean;
}
/**
 * IP address (v4)
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
    dnsPtr?: string;
    ip?: string;
}
/**
 * IP address (v6)
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
    dnsPtr?: string;
    ip?: string;
}
/**
 * Public network information
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet extends SpeakeasyBase {
    enabled: boolean;
    ipv4: GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4;
    ipv6: GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6;
}
/**
 * Additional configuration for protocol http
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    domain: string;
    path: string;
    response?: string;
    statusCodes?: string[];
    tls?: boolean;
}
export declare enum GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    http?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    interval: number;
    port: number;
    protocol: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    retries: number;
    timeout: number;
}
/**
 * Configuration option for protocols http and https
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp extends SpeakeasyBase {
    certificates?: number[];
    cookieLifetime: number;
    cookieName: string;
    redirectHttp?: boolean;
    stickySessions?: boolean;
}
export declare enum GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService extends SpeakeasyBase {
    destinationPort: number;
    healthCheck: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;
    http?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp;
    listenPort: number;
    protocol: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;
    proxyprotocol: boolean;
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
    ip: string;
}
/**
 * Label selector and a list of selected targets
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Server where the traffic should be routed through
**/
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    id: number;
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    id: number;
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[];
    server?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
export declare enum GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
    healthStatus?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[];
    ip?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp;
    labelSelector?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;
    server?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;
    targets?: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[];
    type: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;
    usePrivateIp?: boolean;
}
export declare class GetLoadBalancersId200ApplicationJsonLoadBalancer extends SpeakeasyBase {
    algorithm: GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm;
    created: string;
    id: number;
    includedTraffic: number;
    ingoingTraffic: number;
    labels: Map<string, string>;
    loadBalancerType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType;
    location: GetLoadBalancersId200ApplicationJsonLoadBalancerLocation;
    name: string;
    outgoingTraffic: number;
    privateNet: GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[];
    protection: GetLoadBalancersId200ApplicationJsonLoadBalancerProtection;
    publicNet: GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet;
    services: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[];
    targets: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[];
}
export declare class GetLoadBalancersId200ApplicationJson extends SpeakeasyBase {
    loadBalancer: GetLoadBalancersId200ApplicationJsonLoadBalancer;
}
export declare class GetLoadBalancersIdRequest extends SpeakeasyBase {
    pathParams: GetLoadBalancersIdPathParams;
}
export declare class GetLoadBalancersIdResponse extends SpeakeasyBase {
    contentType: string;
    getLoadBalancersId200ApplicationJsonObject?: GetLoadBalancersId200ApplicationJson;
    statusCode: number;
}
