import { SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";
/**
 * Response containing the cursor corresponding to a publish or event time in a topic partition.
**/
export declare class ComputeTimeCursorResponse extends SpeakeasyBase {
    cursor?: Cursor;
}
