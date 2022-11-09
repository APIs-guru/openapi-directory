import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingRate } from "./billingrate";


// BillingRatesListResponse
/** 
 * Billing Rate List Response
**/
export class BillingRatesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingRates", elemType: shared.BillingRate })
  billingRates?: BillingRate[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
