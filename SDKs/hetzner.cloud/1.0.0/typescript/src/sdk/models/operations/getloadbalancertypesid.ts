import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoadBalancerTypesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly;
}


export class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices })
  prices: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices[];
}


export class GetLoadBalancerTypesId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=load_balancer_type" })
  loadBalancerType?: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType;
}


export class GetLoadBalancerTypesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLoadBalancerTypesIdPathParams;
}


export class GetLoadBalancerTypesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLoadBalancerTypesId200ApplicationJsonObject?: GetLoadBalancerTypesId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
