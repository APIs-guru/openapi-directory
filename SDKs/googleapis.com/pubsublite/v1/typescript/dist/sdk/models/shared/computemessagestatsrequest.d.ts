import { SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";
/**
 * Compute statistics about a range of messages in a given topic and partition.
**/
export declare class ComputeMessageStatsRequest extends SpeakeasyBase {
    endCursor?: Cursor;
    partition?: string;
    startCursor?: Cursor;
}
