import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// UpdateJobRequest
/** 
 * Input only. Update job request.
**/
export class UpdateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: Job;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
