import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParagraphStyle } from "./paragraphstyle";
import { Range } from "./range";



// UpdateParagraphStyleRequest
/** 
 * Update the styling of all paragraphs that overlap with the given range.
**/
export class UpdateParagraphStyleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=paragraphStyle" })
  paragraphStyle?: ParagraphStyle;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: Range;
}
