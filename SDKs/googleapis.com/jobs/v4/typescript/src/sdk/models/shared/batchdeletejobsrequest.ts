import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDeleteJobsRequest
/** 
 * Request to delete a batch of jobs.
**/
export class BatchDeleteJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: string[];
}
