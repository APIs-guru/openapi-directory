import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Range } from "./range";


// DeleteContentRangeRequest
/** 
 * Deletes content from the document.
**/
export class DeleteContentRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: Range;
}
