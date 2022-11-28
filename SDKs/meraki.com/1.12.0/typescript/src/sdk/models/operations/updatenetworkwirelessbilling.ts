import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessBillingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits
/** 
 * The uplink bandwidth settings for the pricing plan.
**/
export class UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}

export enum UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum {
    OneHour = "1 hour",
    OneDay = "1 day",
    OneWeek = "1 week",
    ThirtyDays = "30 days"
}


export class UpdateNetworkWirelessBillingRequestBodyPlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits: UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=timeLimit" })
  timeLimit: UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;
}


export class UpdateNetworkWirelessBillingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=plans", elemType: UpdateNetworkWirelessBillingRequestBodyPlans })
  plans?: UpdateNetworkWirelessBillingRequestBodyPlans[];
}


export class UpdateNetworkWirelessBillingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessBillingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessBillingRequestBody;
}


export class UpdateNetworkWirelessBillingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessBilling200ApplicationJsonObject?: Map<string, any>;
}
