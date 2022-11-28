import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingFloatingIp
/** 
 * The cost of one Floating IP per month
**/
export class GetPricing200ApplicationJsonPricingFloatingIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly;
}


// GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly
/** 
 * Monthly costs for a Floating IP type in this Location
**/
export class GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetPricing200ApplicationJsonPricingFloatingIpsPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly;
}

export enum GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}


export class GetPricing200ApplicationJsonPricingFloatingIps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetPricing200ApplicationJsonPricingFloatingIpsPrices })
  prices: GetPricing200ApplicationJsonPricingFloatingIpsPrices[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum;
}


export class GetPricing200ApplicationJsonPricingImagePricePerGbMonth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingImage
/** 
 * The cost of Image per GB/month
**/
export class GetPricing200ApplicationJsonPricingImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price_per_gb_month" })
  pricePerGbMonth: GetPricing200ApplicationJsonPricingImagePricePerGbMonth;
}


// GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly
/** 
 * Hourly costs for a Load Balancer type in this network zone
**/
export class GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly
/** 
 * Monthly costs for a Load Balancer type in this network zone
**/
export class GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly;
}


export class GetPricing200ApplicationJsonPricingLoadBalancerTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices })
  prices: GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices[];
}


// GetPricing200ApplicationJsonPricingServerBackup
/** 
 * Will increase base Server costs by specific percentage
**/
export class GetPricing200ApplicationJsonPricingServerBackup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage: string;
}


// GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetPricing200ApplicationJsonPricingServerTypesPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly;
}


export class GetPricing200ApplicationJsonPricingServerTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetPricing200ApplicationJsonPricingServerTypesPrices })
  prices: GetPricing200ApplicationJsonPricingServerTypesPrices[];
}


export class GetPricing200ApplicationJsonPricingTrafficPricePerTb extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingTraffic
/** 
 * The cost of additional traffic per TB
**/
export class GetPricing200ApplicationJsonPricingTraffic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price_per_tb" })
  pricePerTb: GetPricing200ApplicationJsonPricingTrafficPricePerTb;
}


export class GetPricing200ApplicationJsonPricingVolumePricePerGbMonth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetPricing200ApplicationJsonPricingVolume
/** 
 * The cost of Volume per GB/month
**/
export class GetPricing200ApplicationJsonPricingVolume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price_per_gb_month" })
  pricePerGbMonth: GetPricing200ApplicationJsonPricingVolumePricePerGbMonth;
}


export class GetPricing200ApplicationJsonPricing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=floating_ip" })
  floatingIp: GetPricing200ApplicationJsonPricingFloatingIp;

  @SpeakeasyMetadata({ data: "json, name=floating_ips", elemType: GetPricing200ApplicationJsonPricingFloatingIps })
  floatingIps: GetPricing200ApplicationJsonPricingFloatingIps[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: GetPricing200ApplicationJsonPricingImage;

  @SpeakeasyMetadata({ data: "json, name=load_balancer_types", elemType: GetPricing200ApplicationJsonPricingLoadBalancerTypes })
  loadBalancerTypes: GetPricing200ApplicationJsonPricingLoadBalancerTypes[];

  @SpeakeasyMetadata({ data: "json, name=server_backup" })
  serverBackup: GetPricing200ApplicationJsonPricingServerBackup;

  @SpeakeasyMetadata({ data: "json, name=server_types", elemType: GetPricing200ApplicationJsonPricingServerTypes })
  serverTypes: GetPricing200ApplicationJsonPricingServerTypes[];

  @SpeakeasyMetadata({ data: "json, name=traffic" })
  traffic: GetPricing200ApplicationJsonPricingTraffic;

  @SpeakeasyMetadata({ data: "json, name=vat_rate" })
  vatRate: string;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume: GetPricing200ApplicationJsonPricingVolume;
}


export class GetPricing200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pricing" })
  pricing: GetPricing200ApplicationJsonPricing;
}


export class GetPricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPricing200ApplicationJsonObject?: GetPricing200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
