import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoadBalancerTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


// GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly;
}


export class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices })
  prices: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices[];
}


export class GetLoadBalancerTypes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=load_balancer_types", elemType: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes })
  loadBalancerTypes: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes[];
}


export class GetLoadBalancerTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLoadBalancerTypesQueryParams;
}


export class GetLoadBalancerTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLoadBalancerTypes200ApplicationJsonObject?: GetLoadBalancerTypes200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
