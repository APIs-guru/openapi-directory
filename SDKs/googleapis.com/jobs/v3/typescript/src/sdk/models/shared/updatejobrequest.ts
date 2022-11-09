import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


// UpdateJobRequest
/** 
 * Input only. Update job request.
**/
export class UpdateJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job?: Job;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
