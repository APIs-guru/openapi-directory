import { SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";
/**
 * Response containing the head cursor for the requested topic and partition.
**/
export declare class ComputeHeadCursorResponse extends SpeakeasyBase {
    headCursor?: Cursor;
}
