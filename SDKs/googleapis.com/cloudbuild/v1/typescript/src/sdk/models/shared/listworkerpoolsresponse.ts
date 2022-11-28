import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerPool } from "./workerpool";



// ListWorkerPoolsResponse
/** 
 * Response containing existing `WorkerPools`.
**/
export class ListWorkerPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workerPools", elemType: WorkerPool })
  workerPools?: WorkerPool[];
}
