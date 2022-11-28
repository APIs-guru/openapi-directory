import { SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";
/**
 * A pair of a Cursor and the partition it is for.
**/
export declare class PartitionCursor extends SpeakeasyBase {
    cursor?: Cursor;
    partition?: string;
}
