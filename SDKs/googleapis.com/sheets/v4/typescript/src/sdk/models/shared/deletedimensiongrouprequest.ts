import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionRange } from "./dimensionrange";


// DeleteDimensionGroupRequest
/** 
 * Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.
**/
export class DeleteDimensionGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: DimensionRange;
}
