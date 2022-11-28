import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ScriptProcessesListUserProcessFilterStatusesEnum {
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
export declare enum ScriptProcessesListUserProcessFilterTypesEnum {
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
export declare enum ScriptProcessesListUserProcessFilterUserAccessLevelsEnum {
    UserAccessLevelUnspecified = "USER_ACCESS_LEVEL_UNSPECIFIED",
    None = "NONE",
    Read = "READ",
    Write = "WRITE",
    Owner = "OWNER"
}
export declare class ScriptProcessesListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
    userProcessFilterDeploymentId?: string;
    userProcessFilterEndTime?: string;
    userProcessFilterFunctionName?: string;
    userProcessFilterProjectName?: string;
    userProcessFilterScriptId?: string;
    userProcessFilterStartTime?: string;
    userProcessFilterStatuses?: ScriptProcessesListUserProcessFilterStatusesEnum[];
    userProcessFilterTypes?: ScriptProcessesListUserProcessFilterTypesEnum[];
    userProcessFilterUserAccessLevels?: ScriptProcessesListUserProcessFilterUserAccessLevelsEnum[];
}
export declare class ScriptProcessesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProcessesListRequest extends SpeakeasyBase {
    queryParams: ScriptProcessesListQueryParams;
    security: ScriptProcessesListSecurity;
}
export declare class ScriptProcessesListResponse extends SpeakeasyBase {
    contentType: string;
    listUserProcessesResponse?: shared.ListUserProcessesResponse;
    statusCode: number;
}
