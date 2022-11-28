import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpTarget } from "./appenginehttptarget";
import { HttpTarget } from "./httptarget";
import { PubsubTarget } from "./pubsubtarget";
import { RetryConfig } from "./retryconfig";
import { Status } from "./status";


export enum JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Paused = "PAUSED",
    Disabled = "DISABLED",
    UpdateFailed = "UPDATE_FAILED"
}


// Job
/** 
 * Configuration for a job. The maximum allowed size for a job is 1MB.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngineHttpTarget" })
  appEngineHttpTarget?: AppEngineHttpTarget;

  @SpeakeasyMetadata({ data: "json, name=attemptDeadline" })
  attemptDeadline?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=httpTarget" })
  httpTarget?: HttpTarget;

  @SpeakeasyMetadata({ data: "json, name=lastAttemptTime" })
  lastAttemptTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubTarget" })
  pubsubTarget?: PubsubTarget;

  @SpeakeasyMetadata({ data: "json, name=retryConfig" })
  retryConfig?: RetryConfig;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=userUpdateTime" })
  userUpdateTime?: string;
}
