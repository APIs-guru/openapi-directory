import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RunJobRequest
/** 
 * Request message for forcing a job to run now using RunJob.
**/
export class RunJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=legacyAppEngineCron" })
  legacyAppEngineCron?: boolean;
}
