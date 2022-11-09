import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateFootnoteResponse
/** 
 * The result of creating a footnote.
**/
export class CreateFootnoteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=footnoteId" })
  footnoteId?: string;
}
