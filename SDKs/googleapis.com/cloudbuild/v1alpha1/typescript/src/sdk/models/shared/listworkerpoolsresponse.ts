import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkerPool } from "./workerpool";


// ListWorkerPoolsResponse
/** 
 * Response containing existing `WorkerPools`.
**/
export class ListWorkerPoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=workerPools", elemType: shared.WorkerPool })
  workerPools?: WorkerPool[];
}
