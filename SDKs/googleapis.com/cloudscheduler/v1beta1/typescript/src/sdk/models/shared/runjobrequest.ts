import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RunJobRequest
/** 
 * Request message for forcing a job to run now using RunJob.
**/
export class RunJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=legacyAppEngineCron" })
  legacyAppEngineCron?: boolean;
}
