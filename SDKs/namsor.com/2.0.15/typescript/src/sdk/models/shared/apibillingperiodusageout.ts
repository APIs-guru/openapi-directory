import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiBillingPeriodUsageOut
/** 
 * The current billing period.
**/
export class ApiBillingPeriodUsageOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=billingStatus" })
  billingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=hardLimit" })
  hardLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=periodEnded" })
  periodEnded?: number;

  @SpeakeasyMetadata({ data: "json, name=periodStarted" })
  periodStarted?: number;

  @SpeakeasyMetadata({ data: "json, name=softLimit" })
  softLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=stripeCurrentPeriodEnd" })
  stripeCurrentPeriodEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=stripeCurrentPeriodStart" })
  stripeCurrentPeriodStart?: number;

  @SpeakeasyMetadata({ data: "json, name=subscriptionStarted" })
  subscriptionStarted?: number;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}
