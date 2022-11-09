import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPaymentsResellerSubscriptionV1Amount
/** 
 * Describes the amount unit including the currency code.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Amount extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountMicros" })
  amountMicros?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}
