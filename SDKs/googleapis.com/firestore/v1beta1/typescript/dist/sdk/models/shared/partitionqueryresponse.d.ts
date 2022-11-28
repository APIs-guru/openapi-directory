import { SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";
/**
 * The response for Firestore.PartitionQuery.
**/
export declare class PartitionQueryResponse extends SpeakeasyBase {
    nextPageToken?: string;
    partitions?: Cursor[];
}
