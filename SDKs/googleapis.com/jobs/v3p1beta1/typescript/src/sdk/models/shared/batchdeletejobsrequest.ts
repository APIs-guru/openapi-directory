import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDeleteJobsRequest
/** 
 * Input only. Batch delete jobs request.
**/
export class BatchDeleteJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;
}
