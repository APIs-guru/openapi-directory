import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutLoadBalancersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutLoadBalancersIdRequestBody extends SpeakeasyBase {
    labels?: Map<string, any>;
    name?: string;
}
export declare enum PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm extends SpeakeasyBase {
    type: PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum;
}
/**
 * Hourly costs for a Resource in this Location
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Resource in this Location
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;
    priceMonthly: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    maxAssignedCertificates: number;
    maxConnections: number;
    maxServices: number;
    maxTargets: number;
    name: string;
    prices: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[];
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet extends SpeakeasyBase {
    ip?: string;
    network?: number;
}
/**
 * Protection configuration for the Resource
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerProtection extends SpeakeasyBase {
    delete: boolean;
}
/**
 * IP address (v4)
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
    dnsPtr?: string;
    ip?: string;
}
/**
 * IP address (v6)
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
    dnsPtr?: string;
    ip?: string;
}
/**
 * Public network information
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet extends SpeakeasyBase {
    enabled: boolean;
    ipv4: PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4;
    ipv6: PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6;
}
/**
 * Additional configuration for protocol http
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    domain: string;
    path: string;
    response?: string;
    statusCodes?: string[];
    tls?: boolean;
}
export declare enum PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    http?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    interval: number;
    port: number;
    protocol: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    retries: number;
    timeout: number;
}
/**
 * Configuration option for protocols http and https
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp extends SpeakeasyBase {
    certificates?: number[];
    cookieLifetime: number;
    cookieName: string;
    redirectHttp?: boolean;
    stickySessions?: boolean;
}
export declare enum PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService extends SpeakeasyBase {
    destinationPort: number;
    healthCheck: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;
    http?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp;
    listenPort: number;
    protocol: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;
    proxyprotocol: boolean;
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
    ip: string;
}
/**
 * Label selector and a list of selected targets
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Server where the traffic should be routed through
**/
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    id: number;
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    id: number;
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[];
    server?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
export declare enum PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
    healthStatus?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[];
    ip?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp;
    labelSelector?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;
    server?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;
    targets?: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[];
    type: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;
    usePrivateIp?: boolean;
}
export declare class PutLoadBalancersId200ApplicationJsonLoadBalancer extends SpeakeasyBase {
    algorithm: PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm;
    created: string;
    id: number;
    includedTraffic: number;
    ingoingTraffic: number;
    labels: Map<string, string>;
    loadBalancerType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType;
    location: PutLoadBalancersId200ApplicationJsonLoadBalancerLocation;
    name: string;
    outgoingTraffic: number;
    privateNet: PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[];
    protection: PutLoadBalancersId200ApplicationJsonLoadBalancerProtection;
    publicNet: PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet;
    services: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[];
    targets: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[];
}
export declare class PutLoadBalancersId200ApplicationJson extends SpeakeasyBase {
    loadBalancer: PutLoadBalancersId200ApplicationJsonLoadBalancer;
}
export declare class PutLoadBalancersIdRequest extends SpeakeasyBase {
    pathParams: PutLoadBalancersIdPathParams;
    request?: PutLoadBalancersIdRequestBody;
}
export declare class PutLoadBalancersIdResponse extends SpeakeasyBase {
    contentType: string;
    putLoadBalancersId200ApplicationJsonObject?: PutLoadBalancersId200ApplicationJson;
    statusCode: number;
}
