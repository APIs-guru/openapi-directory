import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";


// InstanceAttemptResult
/** 
 * Result of an instance attempt.
**/
export class InstanceAttemptResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @Metadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;
}
