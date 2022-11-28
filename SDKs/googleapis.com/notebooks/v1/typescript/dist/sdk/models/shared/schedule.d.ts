import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTemplate } from "./executiontemplate";
import { Execution } from "./execution";
export declare enum ScheduleStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Paused = "PAUSED",
    Disabled = "DISABLED",
    UpdateFailed = "UPDATE_FAILED",
    Initializing = "INITIALIZING",
    Deleting = "DELETING"
}
/**
 * The definition of a schedule.
**/
export declare class ScheduleInput extends SpeakeasyBase {
    cronSchedule?: string;
    description?: string;
    executionTemplate?: ExecutionTemplate;
    state?: ScheduleStateEnum;
    timeZone?: string;
}
/**
 * The definition of a schedule.
**/
export declare class Schedule extends SpeakeasyBase {
    createTime?: string;
    cronSchedule?: string;
    description?: string;
    displayName?: string;
    executionTemplate?: ExecutionTemplate;
    name?: string;
    recentExecutions?: Execution[];
    state?: ScheduleStateEnum;
    timeZone?: string;
    updateTime?: string;
}
