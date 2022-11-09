import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextSpan
/** 
 * Represents an output piece of text.
**/
export class TextSpan extends SpeakeasyBase {
  @Metadata({ data: "json, name=beginOffset" })
  beginOffset?: number;

  @Metadata({ data: "json, name=content" })
  content?: string;
}
