import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingFloatingIp
/** 
 * The cost of one Floating IP per month
**/
export class GetPricing200ApplicationJsonPricingFloatingIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly;
}


// GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly
/** 
 * Monthly costs for a Floating IP type in this Location
**/
export class GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetPricing200ApplicationJsonPricingFloatingIpsPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly;
}

export enum GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum {
    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
}


export class GetPricing200ApplicationJsonPricingFloatingIps extends SpeakeasyBase {
  @Metadata({ data: "json, name=prices", elemType: operations.GetPricing200ApplicationJsonPricingFloatingIpsPrices })
  prices: GetPricing200ApplicationJsonPricingFloatingIpsPrices[];

  @Metadata({ data: "json, name=type" })
  type: GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum;
}


export class GetPricing200ApplicationJsonPricingImagePricePerGbMonth extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingImage
/** 
 * The cost of Image per GB/month
**/
export class GetPricing200ApplicationJsonPricingImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=price_per_gb_month" })
  pricePerGbMonth: GetPricing200ApplicationJsonPricingImagePricePerGbMonth;
}


// GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly
/** 
 * Hourly costs for a Load Balancer type in this network zone
**/
export class GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly
/** 
 * Monthly costs for a Load Balancer type in this network zone
**/
export class GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly;
}


export class GetPricing200ApplicationJsonPricingLoadBalancerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=prices", elemType: operations.GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices })
  prices: GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices[];
}


// GetPricing200ApplicationJsonPricingServerBackup
/** 
 * Will increase base Server costs by specific percentage
**/
export class GetPricing200ApplicationJsonPricingServerBackup extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentage" })
  percentage: string;
}


// GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetPricing200ApplicationJsonPricingServerTypesPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly;
}


export class GetPricing200ApplicationJsonPricingServerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=prices", elemType: operations.GetPricing200ApplicationJsonPricingServerTypesPrices })
  prices: GetPricing200ApplicationJsonPricingServerTypesPrices[];
}


export class GetPricing200ApplicationJsonPricingTrafficPricePerTb extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingTraffic
/** 
 * The cost of additional traffic per TB
**/
export class GetPricing200ApplicationJsonPricingTraffic extends SpeakeasyBase {
  @Metadata({ data: "json, name=price_per_tb" })
  pricePerTb: GetPricing200ApplicationJsonPricingTrafficPricePerTb;
}


export class GetPricing200ApplicationJsonPricingVolumePricePerGbMonth extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingVolume
/** 
 * The cost of Volume per GB/month
**/
export class GetPricing200ApplicationJsonPricingVolume extends SpeakeasyBase {
  @Metadata({ data: "json, name=price_per_gb_month" })
  pricePerGbMonth: GetPricing200ApplicationJsonPricingVolumePricePerGbMonth;
}


export class GetPricing200ApplicationJsonPricing extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=floating_ip" })
  floatingIp: GetPricing200ApplicationJsonPricingFloatingIp;

  @Metadata({ data: "json, name=floating_ips", elemType: operations.GetPricing200ApplicationJsonPricingFloatingIps })
  floatingIps: GetPricing200ApplicationJsonPricingFloatingIps[];

  @Metadata({ data: "json, name=image" })
  image: GetPricing200ApplicationJsonPricingImage;

  @Metadata({ data: "json, name=load_balancer_types", elemType: operations.GetPricing200ApplicationJsonPricingLoadBalancerTypes })
  loadBalancerTypes: GetPricing200ApplicationJsonPricingLoadBalancerTypes[];

  @Metadata({ data: "json, name=server_backup" })
  serverBackup: GetPricing200ApplicationJsonPricingServerBackup;

  @Metadata({ data: "json, name=server_types", elemType: operations.GetPricing200ApplicationJsonPricingServerTypes })
  serverTypes: GetPricing200ApplicationJsonPricingServerTypes[];

  @Metadata({ data: "json, name=traffic" })
  traffic: GetPricing200ApplicationJsonPricingTraffic;

  @Metadata({ data: "json, name=vat_rate" })
  vatRate: string;

  @Metadata({ data: "json, name=volume" })
  volume: GetPricing200ApplicationJsonPricingVolume;
}


export class GetPricing200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=pricing" })
  pricing: GetPricing200ApplicationJsonPricing;
}


export class GetPricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPricing200ApplicationJsonObject?: GetPricing200ApplicationJson;

  @Metadata()
  statusCode: number;
}
