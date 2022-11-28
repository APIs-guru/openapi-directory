import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";



// ComputeTimeCursorResponse
/** 
 * Response containing the cursor corresponding to a publish or event time in a topic partition.
**/
export class ComputeTimeCursorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: Cursor;
}
