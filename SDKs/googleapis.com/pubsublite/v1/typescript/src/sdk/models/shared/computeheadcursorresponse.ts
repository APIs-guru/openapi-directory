import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cursor } from "./cursor";


// ComputeHeadCursorResponse
/** 
 * Response containing the head cursor for the requested topic and partition.
**/
export class ComputeHeadCursorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=headCursor" })
  headCursor?: Cursor;
}
