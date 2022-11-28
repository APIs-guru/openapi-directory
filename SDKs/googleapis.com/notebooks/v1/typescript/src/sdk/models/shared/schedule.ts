import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTemplate } from "./executiontemplate";
import { Execution } from "./execution";


export enum ScheduleStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Paused = "PAUSED",
    Disabled = "DISABLED",
    UpdateFailed = "UPDATE_FAILED",
    Initializing = "INITIALIZING",
    Deleting = "DELETING"
}


// ScheduleInput
/** 
 * The definition of a schedule.
**/
export class ScheduleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cronSchedule" })
  cronSchedule?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=executionTemplate" })
  executionTemplate?: ExecutionTemplate;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ScheduleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}


// Schedule
/** 
 * The definition of a schedule.
**/
export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=cronSchedule" })
  cronSchedule?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=executionTemplate" })
  executionTemplate?: ExecutionTemplate;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recentExecutions", elemType: Execution })
  recentExecutions?: Execution[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ScheduleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
