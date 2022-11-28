import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// CreateJobRequest
/** 
 * Input only. Create job request.
**/
export class CreateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: Job;
}
