import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Batch } from "./batch";


// ListBatchesResponse
/** 
 * A list of batch workloads.
**/
export class ListBatchesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batches", elemType: shared.Batch })
  batches?: Batch[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
