import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessBillingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits
/** 
 * The uplink bandwidth settings for the pricing plan.
**/
export class UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}

export enum UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum {
    OneHour = "1 hour"
,    OneDay = "1 day"
,    OneWeek = "1 week"
,    ThirtyDays = "30 days"
}


export class UpdateNetworkWirelessBillingRequestBodyPlans extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits: UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=price" })
  price: number;

  @Metadata({ data: "json, name=timeLimit" })
  timeLimit: UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;
}


export class UpdateNetworkWirelessBillingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=plans", elemType: operations.UpdateNetworkWirelessBillingRequestBodyPlans })
  plans?: UpdateNetworkWirelessBillingRequestBodyPlans[];
}


export class UpdateNetworkWirelessBillingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessBillingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessBillingRequestBody;
}


export class UpdateNetworkWirelessBillingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessBilling200ApplicationJsonObject?: Map<string, any>;
}
