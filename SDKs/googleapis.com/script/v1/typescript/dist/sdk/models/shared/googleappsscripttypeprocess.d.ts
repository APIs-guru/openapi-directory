import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsScriptTypeProcessProcessStatusEnum {
    ProcessStatusUnspecified = "PROCESS_STATUS_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Completed = "COMPLETED",
    Canceled = "CANCELED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Unknown = "UNKNOWN",
    Delayed = "DELAYED"
}
export declare enum GoogleAppsScriptTypeProcessProcessTypeEnum {
    ProcessTypeUnspecified = "PROCESS_TYPE_UNSPECIFIED",
    AddOn = "ADD_ON",
    ExecutionApi = "EXECUTION_API",
    TimeDriven = "TIME_DRIVEN",
    Trigger = "TRIGGER",
    Webapp = "WEBAPP",
    Editor = "EDITOR",
    SimpleTrigger = "SIMPLE_TRIGGER",
    Menu = "MENU",
    BatchTask = "BATCH_TASK"
}
export declare enum GoogleAppsScriptTypeProcessUserAccessLevelEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED",
    None = "NONE",
    Read = "READ",
    Write = "WRITE",
    Owner = "OWNER"
}
/**
 * Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.
**/
export declare class GoogleAppsScriptTypeProcess extends SpeakeasyBase {
    duration?: string;
    functionName?: string;
    processStatus?: GoogleAppsScriptTypeProcessProcessStatusEnum;
    processType?: GoogleAppsScriptTypeProcessProcessTypeEnum;
    projectName?: string;
    startTime?: string;
    userAccessLevel?: GoogleAppsScriptTypeProcessUserAccessLevelEnum;
}
