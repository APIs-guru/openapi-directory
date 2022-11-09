import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cursor } from "./cursor";


// ComputeTimeCursorResponse
/** 
 * Response containing the cursor corresponding to a publish or event time in a topic partition.
**/
export class ComputeTimeCursorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: Cursor;
}
