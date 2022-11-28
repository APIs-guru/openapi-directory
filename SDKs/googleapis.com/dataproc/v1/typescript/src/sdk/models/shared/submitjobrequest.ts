import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./job";



// SubmitJobRequestInput
/** 
 * A request to submit a job.
**/
export class SubmitJobRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: JobInput;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
