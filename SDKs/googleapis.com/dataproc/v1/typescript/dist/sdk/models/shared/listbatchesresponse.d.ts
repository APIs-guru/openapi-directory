import { SpeakeasyBase } from "../../../internal/utils";
import { Batch } from "./batch";
/**
 * A list of batch workloads.
**/
export declare class ListBatchesResponse extends SpeakeasyBase {
    batches?: Batch[];
    nextPageToken?: string;
}
