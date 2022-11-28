import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Batch } from "./batch";



// ListBatchesResponse
/** 
 * A list of batch workloads.
**/
export class ListBatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batches", elemType: Batch })
  batches?: Batch[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
