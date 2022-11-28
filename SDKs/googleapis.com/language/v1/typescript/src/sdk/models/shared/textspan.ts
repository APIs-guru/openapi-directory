import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextSpan
/** 
 * Represents an output piece of text.
**/
export class TextSpan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;
}
