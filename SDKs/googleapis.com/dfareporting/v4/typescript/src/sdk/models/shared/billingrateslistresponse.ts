import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingRate } from "./billingrate";



// BillingRatesListResponse
/** 
 * Billing Rate List Response
**/
export class BillingRatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingRates", elemType: BillingRate })
  billingRates?: BillingRate[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
