import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoadBalancerTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetLoadBalancerTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLoadBalancerTypesQueryParams;
}


// GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly;
}


export class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=max_assigned_certificates" })
  maxAssignedCertificates: number;

  @Metadata({ data: "json, name=max_connections" })
  maxConnections: number;

  @Metadata({ data: "json, name=max_services" })
  maxServices: number;

  @Metadata({ data: "json, name=max_targets" })
  maxTargets: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=prices", elemType: operations.GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices })
  prices: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices[];
}


export class GetLoadBalancerTypes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=load_balancer_types", elemType: operations.GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes })
  loadBalancerTypes: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes[];
}


export class GetLoadBalancerTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLoadBalancerTypes200ApplicationJsonObject?: GetLoadBalancerTypes200ApplicationJson;

  @Metadata()
  statusCode: number;
}
