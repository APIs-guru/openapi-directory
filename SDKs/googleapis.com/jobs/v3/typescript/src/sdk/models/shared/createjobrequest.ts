import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


// CreateJobRequest
/** 
 * Input only. Create job request.
**/
export class CreateJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job?: Job;
}
