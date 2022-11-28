import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";



// ComputeHeadCursorResponse
/** 
 * Response containing the head cursor for the requested topic and partition.
**/
export class ComputeHeadCursorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headCursor" })
  headCursor?: Cursor;
}
