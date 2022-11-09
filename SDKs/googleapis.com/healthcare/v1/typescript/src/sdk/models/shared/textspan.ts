import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextSpan
/** 
 * A span of text in the provided document.
**/
export class TextSpan extends SpeakeasyBase {
  @Metadata({ data: "json, name=beginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=content" })
  content?: string;
}
