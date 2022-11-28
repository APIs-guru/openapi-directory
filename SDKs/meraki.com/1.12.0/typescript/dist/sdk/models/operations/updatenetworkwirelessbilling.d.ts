import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessBillingPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * The uplink bandwidth settings for the pricing plan.
**/
export declare class UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
export declare enum UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum {
    OneHour = "1 hour",
    OneDay = "1 day",
    OneWeek = "1 week",
    ThirtyDays = "30 days"
}
export declare class UpdateNetworkWirelessBillingRequestBodyPlans extends SpeakeasyBase {
    bandwidthLimits: UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;
    id?: string;
    price: number;
    timeLimit: UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;
}
export declare class UpdateNetworkWirelessBillingRequestBody extends SpeakeasyBase {
    currency?: string;
    plans?: UpdateNetworkWirelessBillingRequestBodyPlans[];
}
export declare class UpdateNetworkWirelessBillingRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessBillingPathParams;
    request?: UpdateNetworkWirelessBillingRequestBody;
}
export declare class UpdateNetworkWirelessBillingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessBilling200ApplicationJsonObject?: Map<string, any>;
}
