import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceAttemptResult } from "./instanceattemptresult";


// InstanceStatus
/** 
 * Instance represents the status of an instance of a Job.
**/
export class InstanceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionTime" })
  completionTime?: string;

  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=lastAttemptResult" })
  lastAttemptResult?: InstanceAttemptResult;

  @Metadata({ data: "json, name=lastExitCode" })
  lastExitCode?: number;

  @Metadata({ data: "json, name=restarted" })
  restarted?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=succeeded" })
  succeeded?: number;
}
