import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineHttpTarget } from "./appenginehttptarget";
import { HttpTarget } from "./httptarget";
import { PubsubTarget } from "./pubsubtarget";
import { RetryConfig } from "./retryconfig";
import { Status } from "./status";

export enum JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Paused = "PAUSED"
,    Disabled = "DISABLED"
,    UpdateFailed = "UPDATE_FAILED"
}


// Job
/** 
 * Configuration for a job. The maximum allowed size for a job is 1MB.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=appEngineHttpTarget" })
  appEngineHttpTarget?: AppEngineHttpTarget;

  @Metadata({ data: "json, name=attemptDeadline" })
  attemptDeadline?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=httpTarget" })
  httpTarget?: HttpTarget;

  @Metadata({ data: "json, name=lastAttemptTime" })
  lastAttemptTime?: string;

  @Metadata({ data: "json, name=legacyAppEngineCron" })
  legacyAppEngineCron?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pubsubTarget" })
  pubsubTarget?: PubsubTarget;

  @Metadata({ data: "json, name=retryConfig" })
  retryConfig?: RetryConfig;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: JobStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: Status;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=userUpdateTime" })
  userUpdateTime?: string;
}
