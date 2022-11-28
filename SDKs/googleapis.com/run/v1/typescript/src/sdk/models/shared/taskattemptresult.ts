import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";



// TaskAttemptResult
/** 
 * Result of a task attempt.
**/
export class TaskAttemptResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;
}
