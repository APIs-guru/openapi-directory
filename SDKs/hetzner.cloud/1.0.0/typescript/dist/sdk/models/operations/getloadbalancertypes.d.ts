import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLoadBalancerTypesQueryParams extends SpeakeasyBase {
    name?: string;
}
/**
 * Hourly costs for a Resource in this Location
**/
export declare class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Resource in this Location
**/
export declare class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly;
    priceMonthly: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly;
}
export declare class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    maxAssignedCertificates: number;
    maxConnections: number;
    maxServices: number;
    maxTargets: number;
    name: string;
    prices: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices[];
}
export declare class GetLoadBalancerTypes200ApplicationJson extends SpeakeasyBase {
    loadBalancerTypes: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes[];
}
export declare class GetLoadBalancerTypesRequest extends SpeakeasyBase {
    queryParams: GetLoadBalancerTypesQueryParams;
}
export declare class GetLoadBalancerTypesResponse extends SpeakeasyBase {
    contentType: string;
    getLoadBalancerTypes200ApplicationJsonObject?: GetLoadBalancerTypes200ApplicationJson;
    statusCode: number;
}
