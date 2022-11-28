import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";



// DeleteParagraphBulletsRequest
/** 
 * Deletes bullets from all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
**/
export class DeleteParagraphBulletsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: Range;
}
