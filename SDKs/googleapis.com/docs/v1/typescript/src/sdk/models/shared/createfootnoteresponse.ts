import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateFootnoteResponse
/** 
 * The result of creating a footnote.
**/
export class CreateFootnoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=footnoteId" })
  footnoteId?: string;
}
