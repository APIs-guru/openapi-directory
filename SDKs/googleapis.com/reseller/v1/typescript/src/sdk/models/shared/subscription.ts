import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RenewalSettings } from "./renewalsettings";
import { Seats } from "./seats";



// SubscriptionPlanCommitmentInterval
/** 
 * In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses. 
**/
export class SubscriptionPlanCommitmentInterval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


// SubscriptionPlan
/** 
 * The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.
**/
export class SubscriptionPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitmentInterval" })
  commitmentInterval?: SubscriptionPlanCommitmentInterval;

  @SpeakeasyMetadata({ data: "json, name=isCommitmentPlan" })
  isCommitmentPlan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=planName" })
  planName?: string;
}


// SubscriptionTransferInfo
/** 
 * Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.
**/
export class SubscriptionTransferInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentLegacySkuId" })
  currentLegacySkuId?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumTransferableSeats" })
  minimumTransferableSeats?: number;

  @SpeakeasyMetadata({ data: "json, name=transferabilityExpirationTime" })
  transferabilityExpirationTime?: string;
}


// SubscriptionTrialSettings
/** 
 * The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.
**/
export class SubscriptionTrialSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isInTrial" })
  isInTrial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trialEndTime" })
  trialEndTime?: string;
}


// Subscription
/** 
 * JSON template for a subscription.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingMethod" })
  billingMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=customerDomain" })
  customerDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=dealCode" })
  dealCode?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: SubscriptionPlan;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=renewalSettings" })
  renewalSettings?: RenewalSettings;

  @SpeakeasyMetadata({ data: "json, name=resourceUiUrl" })
  resourceUiUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=seats" })
  seats?: Seats;

  @SpeakeasyMetadata({ data: "json, name=skuId" })
  skuId?: string;

  @SpeakeasyMetadata({ data: "json, name=skuName" })
  skuName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suspensionReasons" })
  suspensionReasons?: string[];

  @SpeakeasyMetadata({ data: "json, name=transferInfo" })
  transferInfo?: SubscriptionTransferInfo;

  @SpeakeasyMetadata({ data: "json, name=trialSettings" })
  trialSettings?: SubscriptionTrialSettings;
}
