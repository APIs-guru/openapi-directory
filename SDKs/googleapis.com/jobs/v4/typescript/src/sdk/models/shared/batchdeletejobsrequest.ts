import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDeleteJobsRequest
/** 
 * Request to delete a batch of jobs.
**/
export class BatchDeleteJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];
}
