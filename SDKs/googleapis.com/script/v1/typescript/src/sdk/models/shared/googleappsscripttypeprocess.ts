import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsScriptTypeProcessProcessStatusEnum {
    ProcessStatusUnspecified = "PROCESS_STATUS_UNSPECIFIED"
,    Running = "RUNNING"
,    Paused = "PAUSED"
,    Completed = "COMPLETED"
,    Canceled = "CANCELED"
,    Failed = "FAILED"
,    TimedOut = "TIMED_OUT"
,    Unknown = "UNKNOWN"
,    Delayed = "DELAYED"
}

export enum GoogleAppsScriptTypeProcessProcessTypeEnum {
    ProcessTypeUnspecified = "PROCESS_TYPE_UNSPECIFIED"
,    AddOn = "ADD_ON"
,    ExecutionApi = "EXECUTION_API"
,    TimeDriven = "TIME_DRIVEN"
,    Trigger = "TRIGGER"
,    Webapp = "WEBAPP"
,    Editor = "EDITOR"
,    SimpleTrigger = "SIMPLE_TRIGGER"
,    Menu = "MENU"
,    BatchTask = "BATCH_TASK"
}

export enum GoogleAppsScriptTypeProcessUserAccessLevelEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED"
,    None = "NONE"
,    Read = "READ"
,    Write = "WRITE"
,    Owner = "OWNER"
}


// GoogleAppsScriptTypeProcess
/** 
 * Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.
**/
export class GoogleAppsScriptTypeProcess extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=functionName" })
  functionName?: string;

  @Metadata({ data: "json, name=processStatus" })
  processStatus?: GoogleAppsScriptTypeProcessProcessStatusEnum;

  @Metadata({ data: "json, name=processType" })
  processType?: GoogleAppsScriptTypeProcessProcessTypeEnum;

  @Metadata({ data: "json, name=projectName" })
  projectName?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=userAccessLevel" })
  userAccessLevel?: GoogleAppsScriptTypeProcessUserAccessLevelEnum;
}
