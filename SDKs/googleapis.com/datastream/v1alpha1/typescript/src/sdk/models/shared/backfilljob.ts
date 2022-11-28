import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";


export enum BackfillJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    NotStarted = "NOT_STARTED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Stopped = "STOPPED",
    Failed = "FAILED",
    Completed = "COMPLETED",
    Unsupported = "UNSUPPORTED"
}

export enum BackfillJobTriggerEnum {
    TriggerUnspecified = "TRIGGER_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}


// BackfillJob
/** 
 * Represents a backfill job on a specific stream object.
**/
export class BackfillJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=lastEndTime" })
  lastEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStartTime" })
  lastStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BackfillJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: BackfillJobTriggerEnum;
}
