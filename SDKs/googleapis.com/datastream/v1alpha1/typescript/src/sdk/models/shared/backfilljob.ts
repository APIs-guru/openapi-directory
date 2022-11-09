import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";

export enum BackfillJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    NotStarted = "NOT_STARTED"
,    Pending = "PENDING"
,    Active = "ACTIVE"
,    Stopped = "STOPPED"
,    Failed = "FAILED"
,    Completed = "COMPLETED"
,    Unsupported = "UNSUPPORTED"
}

export enum BackfillJobTriggerEnum {
    TriggerUnspecified = "TRIGGER_UNSPECIFIED"
,    Automatic = "AUTOMATIC"
,    Manual = "MANUAL"
}


// BackfillJob
/** 
 * Represents a backfill job on a specific stream object.
**/
export class BackfillJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=lastEndTime" })
  lastEndTime?: string;

  @Metadata({ data: "json, name=lastStartTime" })
  lastStartTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: BackfillJobStateEnum;

  @Metadata({ data: "json, name=trigger" })
  trigger?: BackfillJobTriggerEnum;
}
