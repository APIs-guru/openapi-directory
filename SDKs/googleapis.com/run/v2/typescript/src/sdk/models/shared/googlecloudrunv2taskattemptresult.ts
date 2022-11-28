import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";



// GoogleCloudRunV2TaskAttemptResult
/** 
 * Result of a task attempt.
**/
export class GoogleCloudRunV2TaskAttemptResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;
}
