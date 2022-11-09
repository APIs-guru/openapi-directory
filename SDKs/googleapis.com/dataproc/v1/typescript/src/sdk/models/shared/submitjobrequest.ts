import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


// SubmitJobRequest
/** 
 * A request to submit a job.
**/
export class SubmitJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job?: Job;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
