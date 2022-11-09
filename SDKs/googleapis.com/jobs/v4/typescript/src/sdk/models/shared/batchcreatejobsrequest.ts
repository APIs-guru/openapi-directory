import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";


// BatchCreateJobsRequest
/** 
 * Request to create a batch of jobs.
**/
export class BatchCreateJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.Job })
  jobs?: Job[];
}
