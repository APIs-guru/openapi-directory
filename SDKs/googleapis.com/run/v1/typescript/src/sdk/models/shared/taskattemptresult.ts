import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";


// TaskAttemptResult
/** 
 * Result of a task attempt.
**/
export class TaskAttemptResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @Metadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;
}
