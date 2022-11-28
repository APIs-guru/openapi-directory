import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./job";



// BatchCreateJobsRequestInput
/** 
 * Request to create a batch of jobs.
**/
export class BatchCreateJobsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: JobInput })
  jobs?: JobInput[];
}
