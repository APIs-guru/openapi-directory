import { SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";
import { SourceLocation } from "./sourcelocation";
import { StackFrame } from "./stackframe";
import { StatusMessage } from "./statusmessage";
export declare enum BreakpointActionEnum {
    Capture = "CAPTURE",
    Log = "LOG"
}
export declare enum BreakpointLogLevelEnum {
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}
export declare enum BreakpointStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StateCanaryPendingAgents = "STATE_CANARY_PENDING_AGENTS",
    StateCanaryActive = "STATE_CANARY_ACTIVE",
    StateRollingToAll = "STATE_ROLLING_TO_ALL",
    StateIsFinal = "STATE_IS_FINAL"
}
/**
 * ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
**/
export declare class Breakpoint extends SpeakeasyBase {
    action?: BreakpointActionEnum;
    canaryExpireTime?: string;
    condition?: string;
    createTime?: string;
    evaluatedExpressions?: Variable[];
    expressions?: string[];
    finalTime?: string;
    id?: string;
    isFinalState?: boolean;
    labels?: Map<string, string>;
    location?: SourceLocation;
    logLevel?: BreakpointLogLevelEnum;
    logMessageFormat?: string;
    stackFrames?: StackFrame[];
    state?: BreakpointStateEnum;
    status?: StatusMessage;
    userEmail?: string;
    variableTable?: Variable[];
}
