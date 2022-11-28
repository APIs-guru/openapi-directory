import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLoadBalancerTypesIdPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Hourly costs for a Resource in this Location
**/
export declare class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Resource in this Location
**/
export declare class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly;
    priceMonthly: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly;
}
export declare class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    maxAssignedCertificates: number;
    maxConnections: number;
    maxServices: number;
    maxTargets: number;
    name: string;
    prices: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices[];
}
export declare class GetLoadBalancerTypesId200ApplicationJson extends SpeakeasyBase {
    loadBalancerType?: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType;
}
export declare class GetLoadBalancerTypesIdRequest extends SpeakeasyBase {
    pathParams: GetLoadBalancerTypesIdPathParams;
}
export declare class GetLoadBalancerTypesIdResponse extends SpeakeasyBase {
    contentType: string;
    getLoadBalancerTypesId200ApplicationJsonObject?: GetLoadBalancerTypesId200ApplicationJson;
    statusCode: number;
}
