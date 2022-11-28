import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Period } from "./googlecloudchannelv1period";
export declare enum GoogleCloudChannelV1PlanPaymentPlanEnum {
    PaymentPlanUnspecified = "PAYMENT_PLAN_UNSPECIFIED",
    Commitment = "COMMITMENT",
    Flexible = "FLEXIBLE",
    Free = "FREE",
    Trial = "TRIAL",
    Offline = "OFFLINE"
}
export declare enum GoogleCloudChannelV1PlanPaymentTypeEnum {
    PaymentTypeUnspecified = "PAYMENT_TYPE_UNSPECIFIED",
    Prepay = "PREPAY",
    Postpay = "POSTPAY"
}
/**
 * The payment plan for the Offer. Describes how to make a payment.
**/
export declare class GoogleCloudChannelV1Plan extends SpeakeasyBase {
    billingAccount?: string;
    paymentCycle?: GoogleCloudChannelV1Period;
    paymentPlan?: GoogleCloudChannelV1PlanPaymentPlanEnum;
    paymentType?: GoogleCloudChannelV1PlanPaymentTypeEnum;
    trialPeriod?: GoogleCloudChannelV1Period;
}
