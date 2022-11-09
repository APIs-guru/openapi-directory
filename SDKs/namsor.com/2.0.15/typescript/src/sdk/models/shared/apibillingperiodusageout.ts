import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiBillingPeriodUsageOut
/** 
 * The current billing period.
**/
export class ApiBillingPeriodUsageOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=billingStatus" })
  billingStatus?: string;

  @Metadata({ data: "json, name=hardLimit" })
  hardLimit?: number;

  @Metadata({ data: "json, name=periodEnded" })
  periodEnded?: number;

  @Metadata({ data: "json, name=periodStarted" })
  periodStarted?: number;

  @Metadata({ data: "json, name=softLimit" })
  softLimit?: number;

  @Metadata({ data: "json, name=stripeCurrentPeriodEnd" })
  stripeCurrentPeriodEnd?: number;

  @Metadata({ data: "json, name=stripeCurrentPeriodStart" })
  stripeCurrentPeriodStart?: number;

  @Metadata({ data: "json, name=subscriptionStarted" })
  subscriptionStarted?: number;

  @Metadata({ data: "json, name=usage" })
  usage?: number;
}
