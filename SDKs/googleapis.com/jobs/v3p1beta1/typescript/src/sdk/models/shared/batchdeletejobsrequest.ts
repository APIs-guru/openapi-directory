import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDeleteJobsRequest
/** 
 * Input only. Batch delete jobs request.
**/
export class BatchDeleteJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;
}
