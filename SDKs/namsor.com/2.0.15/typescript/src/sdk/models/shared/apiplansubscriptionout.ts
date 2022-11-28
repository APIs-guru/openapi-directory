import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiPlanSubscriptionOut
/** 
 * The API Plan governing the subscription.
**/
export class ApiPlanSubscriptionOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyFactor" })
  currencyFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=planBaseFeesKey" })
  planBaseFeesKey?: string;

  @SpeakeasyMetadata({ data: "json, name=planEnded" })
  planEnded?: number;

  @SpeakeasyMetadata({ data: "json, name=planName" })
  planName?: string;

  @SpeakeasyMetadata({ data: "json, name=planQuota" })
  planQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=planStarted" })
  planStarted?: number;

  @SpeakeasyMetadata({ data: "json, name=planStatus" })
  planStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=priceOverage" })
  priceOverage?: number;

  @SpeakeasyMetadata({ data: "json, name=priceOverageUSD" })
  priceOverageUsd?: number;

  @SpeakeasyMetadata({ data: "json, name=priceUSD" })
  priceUsd?: number;

  @SpeakeasyMetadata({ data: "json, name=priorPlanStarted" })
  priorPlanStarted?: number;

  @SpeakeasyMetadata({ data: "json, name=stripeCustomerId" })
  stripeCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=stripeStatus" })
  stripeStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=stripeSubscription" })
  stripeSubscription?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRate" })
  taxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
