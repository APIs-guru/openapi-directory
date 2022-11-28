import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionCursor } from "./partitioncursor";
/**
 * Response for ListPartitionCursors
**/
export declare class ListPartitionCursorsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    partitionCursors?: PartitionCursor[];
}
