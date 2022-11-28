import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Period } from "./googlecloudchannelv1period";


export enum GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum {
    PaymentPlanUnspecified = "PAYMENT_PLAN_UNSPECIFIED",
    Commitment = "COMMITMENT",
    Flexible = "FLEXIBLE",
    Free = "FREE",
    Trial = "TRIAL",
    Offline = "OFFLINE"
}


// GoogleCloudChannelV1RenewalSettings
/** 
 * Renewal settings for renewable Offers.
**/
export class GoogleCloudChannelV1RenewalSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableRenewal" })
  enableRenewal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paymentCycle" })
  paymentCycle?: GoogleCloudChannelV1Period;

  @SpeakeasyMetadata({ data: "json, name=paymentPlan" })
  paymentPlan?: GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=resizeUnitCount" })
  resizeUnitCount?: boolean;
}
