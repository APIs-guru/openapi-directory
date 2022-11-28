import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetLoadBalancersSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
export declare class GetLoadBalancersQueryParams extends SpeakeasyBase {
    labelSelector?: string;
    name?: string;
    sort?: GetLoadBalancersSortEnum;
}
export declare enum GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm extends SpeakeasyBase {
    type: GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum;
}
/**
 * Hourly costs for a Resource in this Location
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Resource in this Location
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly;
    priceMonthly: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly;
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    maxAssignedCertificates: number;
    maxConnections: number;
    maxServices: number;
    maxTargets: number;
    name: string;
    prices: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices[];
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet extends SpeakeasyBase {
    ip?: string;
    network?: number;
}
/**
 * Protection configuration for the Resource
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersProtection extends SpeakeasyBase {
    delete: boolean;
}
/**
 * IP address (v4)
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4 extends SpeakeasyBase {
    dnsPtr?: string;
    ip?: string;
}
/**
 * IP address (v6)
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 extends SpeakeasyBase {
    dnsPtr?: string;
    ip?: string;
}
/**
 * Public network information
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet extends SpeakeasyBase {
    enabled: boolean;
    ipv4: GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4;
    ipv6: GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6;
}
/**
 * Additional configuration for protocol http
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    domain: string;
    path: string;
    response?: string;
    statusCodes?: string[];
    tls?: boolean;
}
export declare enum GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    http?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    interval: number;
    port: number;
    protocol: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    retries: number;
    timeout: number;
}
/**
 * Configuration option for protocols http and https
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp extends SpeakeasyBase {
    certificates?: number[];
    cookieLifetime: number;
    cookieName: string;
    redirectHttp?: boolean;
    stickySessions?: boolean;
}
export declare enum GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService extends SpeakeasyBase {
    destinationPort: number;
    healthCheck: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck;
    http?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp;
    listenPort: number;
    protocol: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum;
    proxyprotocol: boolean;
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp extends SpeakeasyBase {
    ip: string;
}
/**
 * Label selector and a list of selected targets
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Server where the traffic should be routed through
**/
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    id: number;
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: string;
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    id: number;
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus[];
    server?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
export declare enum GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget extends SpeakeasyBase {
    healthStatus?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus[];
    ip?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp;
    labelSelector?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector;
    server?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer;
    targets?: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets[];
    type: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum;
    usePrivateIp?: boolean;
}
export declare class GetLoadBalancers200ApplicationJsonLoadBalancers extends SpeakeasyBase {
    algorithm: GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm;
    created: string;
    id: number;
    includedTraffic: number;
    ingoingTraffic: number;
    labels: Map<string, string>;
    loadBalancerType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType;
    location: GetLoadBalancers200ApplicationJsonLoadBalancersLocation;
    name: string;
    outgoingTraffic: number;
    privateNet: GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet[];
    protection: GetLoadBalancers200ApplicationJsonLoadBalancersProtection;
    publicNet: GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet;
    services: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService[];
    targets: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget[];
}
export declare class GetLoadBalancers200ApplicationJsonMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetLoadBalancers200ApplicationJsonMeta extends SpeakeasyBase {
    pagination: GetLoadBalancers200ApplicationJsonMetaPagination;
}
export declare class GetLoadBalancers200ApplicationJson extends SpeakeasyBase {
    loadBalancers: GetLoadBalancers200ApplicationJsonLoadBalancers[];
    meta?: GetLoadBalancers200ApplicationJsonMeta;
}
export declare class GetLoadBalancersRequest extends SpeakeasyBase {
    queryParams: GetLoadBalancersQueryParams;
}
export declare class GetLoadBalancersResponse extends SpeakeasyBase {
    contentType: string;
    getLoadBalancers200ApplicationJsonObject?: GetLoadBalancers200ApplicationJson;
    statusCode: number;
}
