import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RenewalSettings } from "./renewalsettings";
import { Seats } from "./seats";


// SubscriptionPlanCommitmentInterval
/** 
 * In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses. 
**/
export class SubscriptionPlanCommitmentInterval extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}


// SubscriptionPlan
/** 
 * The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.
**/
export class SubscriptionPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitmentInterval" })
  commitmentInterval?: SubscriptionPlanCommitmentInterval;

  @Metadata({ data: "json, name=isCommitmentPlan" })
  isCommitmentPlan?: boolean;

  @Metadata({ data: "json, name=planName" })
  planName?: string;
}


// SubscriptionTransferInfo
/** 
 * Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.
**/
export class SubscriptionTransferInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentLegacySkuId" })
  currentLegacySkuId?: string;

  @Metadata({ data: "json, name=minimumTransferableSeats" })
  minimumTransferableSeats?: number;

  @Metadata({ data: "json, name=transferabilityExpirationTime" })
  transferabilityExpirationTime?: string;
}


// SubscriptionTrialSettings
/** 
 * The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.
**/
export class SubscriptionTrialSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=isInTrial" })
  isInTrial?: boolean;

  @Metadata({ data: "json, name=trialEndTime" })
  trialEndTime?: string;
}


// Subscription
/** 
 * JSON template for a subscription.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingMethod" })
  billingMethod?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=customerDomain" })
  customerDomain?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=dealCode" })
  dealCode?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=plan" })
  plan?: SubscriptionPlan;

  @Metadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @Metadata({ data: "json, name=renewalSettings" })
  renewalSettings?: RenewalSettings;

  @Metadata({ data: "json, name=resourceUiUrl" })
  resourceUiUrl?: string;

  @Metadata({ data: "json, name=seats" })
  seats?: Seats;

  @Metadata({ data: "json, name=skuId" })
  skuId?: string;

  @Metadata({ data: "json, name=skuName" })
  skuName?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=suspensionReasons" })
  suspensionReasons?: string[];

  @Metadata({ data: "json, name=transferInfo" })
  transferInfo?: SubscriptionTransferInfo;

  @Metadata({ data: "json, name=trialSettings" })
  trialSettings?: SubscriptionTrialSettings;
}
