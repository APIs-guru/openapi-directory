import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiPlanSubscriptionOut
/** 
 * The API Plan governing the subscription.
**/
export class ApiPlanSubscriptionOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=currencyFactor" })
  currencyFactor?: number;

  @Metadata({ data: "json, name=planBaseFeesKey" })
  planBaseFeesKey?: string;

  @Metadata({ data: "json, name=planEnded" })
  planEnded?: number;

  @Metadata({ data: "json, name=planName" })
  planName?: string;

  @Metadata({ data: "json, name=planQuota" })
  planQuota?: number;

  @Metadata({ data: "json, name=planStarted" })
  planStarted?: number;

  @Metadata({ data: "json, name=planStatus" })
  planStatus?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=priceOverage" })
  priceOverage?: number;

  @Metadata({ data: "json, name=priceOverageUSD" })
  priceOverageUsd?: number;

  @Metadata({ data: "json, name=priceUSD" })
  priceUsd?: number;

  @Metadata({ data: "json, name=priorPlanStarted" })
  priorPlanStarted?: number;

  @Metadata({ data: "json, name=stripeCustomerId" })
  stripeCustomerId?: string;

  @Metadata({ data: "json, name=stripeStatus" })
  stripeStatus?: string;

  @Metadata({ data: "json, name=stripeSubscription" })
  stripeSubscription?: string;

  @Metadata({ data: "json, name=taxRate" })
  taxRate?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
