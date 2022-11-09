import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionTemplate } from "./executiontemplate";
import { Execution } from "./execution";

export enum ScheduleStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Paused = "PAUSED"
,    Disabled = "DISABLED"
,    UpdateFailed = "UPDATE_FAILED"
,    Initializing = "INITIALIZING"
,    Deleting = "DELETING"
}


// Schedule
/** 
 * The definition of a schedule.
**/
export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=cronSchedule" })
  cronSchedule?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=executionTemplate" })
  executionTemplate?: ExecutionTemplate;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recentExecutions", elemType: shared.Execution })
  recentExecutions?: Execution[];

  @Metadata({ data: "json, name=state" })
  state?: ScheduleStateEnum;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
