import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuotePriceV1
/** 
 * These prices describe the costs associated with a quote.
**/
export class QuotePriceV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=premium_before_taxes_and_fees" })
  premiumBeforeTaxesAndFees?: number;
}
