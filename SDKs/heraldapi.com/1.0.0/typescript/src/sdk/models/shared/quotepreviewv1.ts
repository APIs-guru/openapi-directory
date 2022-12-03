import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuotePreviewV1
/** 
 * A quote preview provides information about a quote within a submission.
**/
export class QuotePreviewV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=quote_id" })
  quoteId: string;
}
