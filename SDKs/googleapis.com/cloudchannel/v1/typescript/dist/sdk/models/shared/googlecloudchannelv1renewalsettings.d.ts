import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Period } from "./googlecloudchannelv1period";
export declare enum GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum {
    PaymentPlanUnspecified = "PAYMENT_PLAN_UNSPECIFIED",
    Commitment = "COMMITMENT",
    Flexible = "FLEXIBLE",
    Free = "FREE",
    Trial = "TRIAL",
    Offline = "OFFLINE"
}
/**
 * Renewal settings for renewable Offers.
**/
export declare class GoogleCloudChannelV1RenewalSettings extends SpeakeasyBase {
    enableRenewal?: boolean;
    paymentCycle?: GoogleCloudChannelV1Period;
    paymentPlan?: GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
    resizeUnitCount?: boolean;
}
