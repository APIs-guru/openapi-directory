import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";



// DeleteContentRangeRequest
/** 
 * Deletes content from the document.
**/
export class DeleteContentRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: Range;
}
