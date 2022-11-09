import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParagraphStyle } from "./paragraphstyle";
import { Range } from "./range";


// UpdateParagraphStyleRequest
/** 
 * Update the styling of all paragraphs that overlap with the given range.
**/
export class UpdateParagraphStyleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=paragraphStyle" })
  paragraphStyle?: ParagraphStyle;

  @Metadata({ data: "json, name=range" })
  range?: Range;
}
