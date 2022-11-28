import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";



// InstanceAttemptResult
/** 
 * Result of an instance attempt.
**/
export class InstanceAttemptResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;
}
