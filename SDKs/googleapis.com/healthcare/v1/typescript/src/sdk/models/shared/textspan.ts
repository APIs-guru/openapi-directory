import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextSpan
/** 
 * A span of text in the provided document.
**/
export class TextSpan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beginOffset" })
  beginOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;
}
