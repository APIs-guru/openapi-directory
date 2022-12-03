import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationWriteV1 } from "./applicationwritev1";
import { QuotePreviewV1 } from "./quotepreviewv1";



// SubmissionV1
/** 
 * A submission is a set of information submitted by a producer to institutions in order to get quotes.
**/
export class SubmissionV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application: ApplicationWriteV1;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=producer_id" })
  producerId: string;

  @SpeakeasyMetadata({ data: "json, name=quote_previews", elemType: QuotePreviewV1 })
  quotePreviews: QuotePreviewV1[];
}
