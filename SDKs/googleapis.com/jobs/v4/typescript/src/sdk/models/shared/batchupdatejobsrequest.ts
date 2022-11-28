import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./job";



// BatchUpdateJobsRequestInput
/** 
 * Request to update a batch of jobs.
**/
export class BatchUpdateJobsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: JobInput })
  jobs?: JobInput[];

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
