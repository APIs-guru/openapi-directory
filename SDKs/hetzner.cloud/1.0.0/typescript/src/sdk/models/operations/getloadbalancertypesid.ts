import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoadBalancerTypesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetLoadBalancerTypesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLoadBalancerTypesIdPathParams;
}


// GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly
/** 
 * Hourly costs for a Resource in this Location
**/
export class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly
/** 
 * Monthly costs for a Resource in this Location
**/
export class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly;
}


export class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=prices", elemType: operations.GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices })
  prices: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices[];
}


export class GetLoadBalancerTypesId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=load_balancer_type" })
  loadBalancerType?: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType;
}


export class GetLoadBalancerTypesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLoadBalancerTypesId200ApplicationJsonObject?: GetLoadBalancerTypesId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
