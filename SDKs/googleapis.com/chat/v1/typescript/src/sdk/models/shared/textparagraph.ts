import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextParagraph
/** 
 * A paragraph of text. Formatted text supported.
**/
export class TextParagraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
