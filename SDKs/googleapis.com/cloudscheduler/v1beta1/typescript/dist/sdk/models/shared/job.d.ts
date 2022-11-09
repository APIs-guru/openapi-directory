import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineHttpTarget } from "./appenginehttptarget";
import { HttpTarget } from "./httptarget";
import { PubsubTarget } from "./pubsubtarget";
import { RetryConfig } from "./retryconfig";
import { Status } from "./status";
export declare enum JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Paused = "PAUSED",
    Disabled = "DISABLED",
    UpdateFailed = "UPDATE_FAILED"
}
/**
 * Configuration for a job. The maximum allowed size for a job is 1MB.
**/
export declare class Job extends SpeakeasyBase {
    appEngineHttpTarget?: AppEngineHttpTarget;
    attemptDeadline?: string;
    description?: string;
    httpTarget?: HttpTarget;
    lastAttemptTime?: string;
    legacyAppEngineCron?: boolean;
    name?: string;
    pubsubTarget?: PubsubTarget;
    retryConfig?: RetryConfig;
    schedule?: string;
    scheduleTime?: string;
    state?: JobStateEnum;
    status?: Status;
    timeZone?: string;
    userUpdateTime?: string;
}
