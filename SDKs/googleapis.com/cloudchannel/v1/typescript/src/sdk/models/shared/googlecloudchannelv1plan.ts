import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1Period } from "./googlecloudchannelv1period";
import { GoogleCloudChannelV1Period } from "./googlecloudchannelv1period";

export enum GoogleCloudChannelV1PlanPaymentPlanEnum {
    PaymentPlanUnspecified = "PAYMENT_PLAN_UNSPECIFIED"
,    Commitment = "COMMITMENT"
,    Flexible = "FLEXIBLE"
,    Free = "FREE"
,    Trial = "TRIAL"
,    Offline = "OFFLINE"
}

export enum GoogleCloudChannelV1PlanPaymentTypeEnum {
    PaymentTypeUnspecified = "PAYMENT_TYPE_UNSPECIFIED"
,    Prepay = "PREPAY"
,    Postpay = "POSTPAY"
}


// GoogleCloudChannelV1Plan
/** 
 * The payment plan for the Offer. Describes how to make a payment.
**/
export class GoogleCloudChannelV1Plan extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingAccount" })
  billingAccount?: string;

  @Metadata({ data: "json, name=paymentCycle" })
  paymentCycle?: GoogleCloudChannelV1Period;

  @Metadata({ data: "json, name=paymentPlan" })
  paymentPlan?: GoogleCloudChannelV1PlanPaymentPlanEnum;

  @Metadata({ data: "json, name=paymentType" })
  paymentType?: GoogleCloudChannelV1PlanPaymentTypeEnum;

  @Metadata({ data: "json, name=trialPeriod" })
  trialPeriod?: GoogleCloudChannelV1Period;
}
