import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextParagraph
/** 
 * A paragraph of text. Formatted text supported.
**/
export class TextParagraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;
}
