import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSpan } from "./timespan";
import { Volume } from "./volume";
export declare enum BuildStepStatusEnum {
    StatusUnknown = "STATUS_UNKNOWN",
    Pending = "PENDING",
    Queued = "QUEUED",
    Working = "WORKING",
    Success = "SUCCESS",
    Failure = "FAILURE",
    InternalError = "INTERNAL_ERROR",
    Timeout = "TIMEOUT",
    Cancelled = "CANCELLED",
    Expired = "EXPIRED"
}
/**
 * A step in the build pipeline.
**/
export declare class BuildStep extends SpeakeasyBase {
    allowExitCodes?: number[];
    allowFailure?: boolean;
    args?: string[];
    dir?: string;
    entrypoint?: string;
    env?: string[];
    exitCode?: number;
    id?: string;
    name?: string;
    pullTiming?: TimeSpan;
    script?: string;
    secretEnv?: string[];
    status?: BuildStepStatusEnum;
    timeout?: string;
    timing?: TimeSpan;
    volumes?: Volume[];
    waitFor?: string[];
}
/**
 * A step in the build pipeline.
**/
export declare class BuildStepInput extends SpeakeasyBase {
    allowExitCodes?: number[];
    allowFailure?: boolean;
    args?: string[];
    dir?: string;
    entrypoint?: string;
    env?: string[];
    id?: string;
    name?: string;
    pullTiming?: TimeSpan;
    script?: string;
    secretEnv?: string[];
    timeout?: string;
    timing?: TimeSpan;
    volumes?: Volume[];
    waitFor?: string[];
}
