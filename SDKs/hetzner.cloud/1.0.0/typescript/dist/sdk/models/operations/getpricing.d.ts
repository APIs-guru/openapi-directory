import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * The cost of one Floating IP per month
**/
export declare class GetPricing200ApplicationJsonPricingFloatingIp extends SpeakeasyBase {
    priceMonthly: GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly;
}
/**
 * Monthly costs for a Floating IP type in this Location
**/
export declare class GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetPricing200ApplicationJsonPricingFloatingIpsPrices extends SpeakeasyBase {
    location: string;
    priceMonthly: GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly;
}
export declare enum GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class GetPricing200ApplicationJsonPricingFloatingIps extends SpeakeasyBase {
    prices: GetPricing200ApplicationJsonPricingFloatingIpsPrices[];
    type: GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum;
}
export declare class GetPricing200ApplicationJsonPricingImagePricePerGbMonth extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * The cost of Image per GB/month
**/
export declare class GetPricing200ApplicationJsonPricingImage extends SpeakeasyBase {
    pricePerGbMonth: GetPricing200ApplicationJsonPricingImagePricePerGbMonth;
}
/**
 * Hourly costs for a Load Balancer type in this network zone
**/
export declare class GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Load Balancer type in this network zone
**/
export declare class GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly;
    priceMonthly: GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly;
}
export declare class GetPricing200ApplicationJsonPricingLoadBalancerTypes extends SpeakeasyBase {
    id: number;
    name: string;
    prices: GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices[];
}
/**
 * Will increase base Server costs by specific percentage
**/
export declare class GetPricing200ApplicationJsonPricingServerBackup extends SpeakeasyBase {
    percentage: string;
}
/**
 * Hourly costs for a Server type in this Location
**/
export declare class GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Server type in this Location
**/
export declare class GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetPricing200ApplicationJsonPricingServerTypesPrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly;
    priceMonthly: GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly;
}
export declare class GetPricing200ApplicationJsonPricingServerTypes extends SpeakeasyBase {
    id: number;
    name: string;
    prices: GetPricing200ApplicationJsonPricingServerTypesPrices[];
}
export declare class GetPricing200ApplicationJsonPricingTrafficPricePerTb extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * The cost of additional traffic per TB
**/
export declare class GetPricing200ApplicationJsonPricingTraffic extends SpeakeasyBase {
    pricePerTb: GetPricing200ApplicationJsonPricingTrafficPricePerTb;
}
export declare class GetPricing200ApplicationJsonPricingVolumePricePerGbMonth extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * The cost of Volume per GB/month
**/
export declare class GetPricing200ApplicationJsonPricingVolume extends SpeakeasyBase {
    pricePerGbMonth: GetPricing200ApplicationJsonPricingVolumePricePerGbMonth;
}
export declare class GetPricing200ApplicationJsonPricing extends SpeakeasyBase {
    currency: string;
    floatingIp: GetPricing200ApplicationJsonPricingFloatingIp;
    floatingIps: GetPricing200ApplicationJsonPricingFloatingIps[];
    image: GetPricing200ApplicationJsonPricingImage;
    loadBalancerTypes: GetPricing200ApplicationJsonPricingLoadBalancerTypes[];
    serverBackup: GetPricing200ApplicationJsonPricingServerBackup;
    serverTypes: GetPricing200ApplicationJsonPricingServerTypes[];
    traffic: GetPricing200ApplicationJsonPricingTraffic;
    vatRate: string;
    volume: GetPricing200ApplicationJsonPricingVolume;
}
export declare class GetPricing200ApplicationJson extends SpeakeasyBase {
    pricing: GetPricing200ApplicationJsonPricing;
}
export declare class GetPricingResponse extends SpeakeasyBase {
    contentType: string;
    getPricing200ApplicationJsonObject?: GetPricing200ApplicationJson;
    statusCode: number;
}
