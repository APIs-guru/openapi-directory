import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";


// BatchUpdateJobsRequest
/** 
 * Request to update a batch of jobs.
**/
export class BatchUpdateJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.Job })
  jobs?: Job[];

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
