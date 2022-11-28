import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum {
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
export declare enum ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum {
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
export declare enum ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED",
    None = "NONE",
    Read = "READ",
    Write = "WRITE",
    Owner = "OWNER"
}
export declare class ScriptProcessesListScriptProcessesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    scriptId?: string;
    scriptProcessFilterDeploymentId?: string;
    scriptProcessFilterEndTime?: string;
    scriptProcessFilterFunctionName?: string;
    scriptProcessFilterStartTime?: string;
    scriptProcessFilterStatuses?: ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum[];
    scriptProcessFilterTypes?: ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum[];
    scriptProcessFilterUserAccessLevels?: ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ScriptProcessesListScriptProcessesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProcessesListScriptProcessesRequest extends SpeakeasyBase {
    queryParams: ScriptProcessesListScriptProcessesQueryParams;
    security: ScriptProcessesListScriptProcessesSecurity;
}
export declare class ScriptProcessesListScriptProcessesResponse extends SpeakeasyBase {
    contentType: string;
    listScriptProcessesResponse?: shared.ListScriptProcessesResponse;
    statusCode: number;
}
