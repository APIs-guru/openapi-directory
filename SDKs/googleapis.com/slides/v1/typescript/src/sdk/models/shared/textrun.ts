import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";



// TextRun
/** 
 * A TextElement kind that represents a run of text that all has the same styling.
**/
export class TextRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: TextStyle;
}
