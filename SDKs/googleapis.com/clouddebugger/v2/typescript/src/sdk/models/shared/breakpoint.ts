import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";
import { SourceLocation } from "./sourcelocation";
import { StackFrame } from "./stackframe";
import { StatusMessage } from "./statusmessage";


export enum BreakpointActionEnum {
    Capture = "CAPTURE",
    Log = "LOG"
}

export enum BreakpointLogLevelEnum {
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}

export enum BreakpointStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StateCanaryPendingAgents = "STATE_CANARY_PENDING_AGENTS",
    StateCanaryActive = "STATE_CANARY_ACTIVE",
    StateRollingToAll = "STATE_ROLLING_TO_ALL",
    StateIsFinal = "STATE_IS_FINAL"
}


// Breakpoint
/** 
 * ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
**/
export class Breakpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: BreakpointActionEnum;

  @SpeakeasyMetadata({ data: "json, name=canaryExpireTime" })
  canaryExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluatedExpressions", elemType: Variable })
  evaluatedExpressions?: Variable[];

  @SpeakeasyMetadata({ data: "json, name=expressions" })
  expressions?: string[];

  @SpeakeasyMetadata({ data: "json, name=finalTime" })
  finalTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isFinalState" })
  isFinalState?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: SourceLocation;

  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel?: BreakpointLogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=logMessageFormat" })
  logMessageFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=stackFrames", elemType: StackFrame })
  stackFrames?: StackFrame[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BreakpointStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusMessage;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=variableTable", elemType: Variable })
  variableTable?: Variable[];
}
