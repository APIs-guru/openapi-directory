import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAttemptResult } from "./instanceattemptresult";



// InstanceStatus
/** 
 * Instance represents the status of an instance of a Job.
**/
export class InstanceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=lastAttemptResult" })
  lastAttemptResult?: InstanceAttemptResult;

  @SpeakeasyMetadata({ data: "json, name=lastExitCode" })
  lastExitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=restarted" })
  restarted?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=succeeded" })
  succeeded?: number;
}
