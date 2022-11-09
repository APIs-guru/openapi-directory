import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextStyle } from "./textstyle";


// TextRun
/** 
 * A TextElement kind that represents a run of text that all has the same styling.
**/
export class TextRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=style" })
  style?: TextStyle;
}
