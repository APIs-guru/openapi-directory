import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPaymentsResellerSubscriptionV1Amount
/** 
 * Describes the amount unit including the currency code.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Amount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountMicros" })
  amountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}
