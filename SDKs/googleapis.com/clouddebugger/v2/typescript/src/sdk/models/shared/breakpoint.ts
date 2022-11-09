import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Variable } from "./variable";
import { SourceLocation } from "./sourcelocation";
import { StackFrame } from "./stackframe";
import { StatusMessage } from "./statusmessage";
import { Variable } from "./variable";

export enum BreakpointActionEnum {
    Capture = "CAPTURE"
,    Log = "LOG"
}

export enum BreakpointLogLevelEnum {
    Info = "INFO"
,    Warning = "WARNING"
,    Error = "ERROR"
}

export enum BreakpointStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    StateCanaryPendingAgents = "STATE_CANARY_PENDING_AGENTS"
,    StateCanaryActive = "STATE_CANARY_ACTIVE"
,    StateRollingToAll = "STATE_ROLLING_TO_ALL"
,    StateIsFinal = "STATE_IS_FINAL"
}


// Breakpoint
/** 
 * ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
**/
export class Breakpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: BreakpointActionEnum;

  @Metadata({ data: "json, name=canaryExpireTime" })
  canaryExpireTime?: string;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=evaluatedExpressions", elemType: shared.Variable })
  evaluatedExpressions?: Variable[];

  @Metadata({ data: "json, name=expressions" })
  expressions?: string[];

  @Metadata({ data: "json, name=finalTime" })
  finalTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isFinalState" })
  isFinalState?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=location" })
  location?: SourceLocation;

  @Metadata({ data: "json, name=logLevel" })
  logLevel?: BreakpointLogLevelEnum;

  @Metadata({ data: "json, name=logMessageFormat" })
  logMessageFormat?: string;

  @Metadata({ data: "json, name=stackFrames", elemType: shared.StackFrame })
  stackFrames?: StackFrame[];

  @Metadata({ data: "json, name=state" })
  state?: BreakpointStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: StatusMessage;

  @Metadata({ data: "json, name=userEmail" })
  userEmail?: string;

  @Metadata({ data: "json, name=variableTable", elemType: shared.Variable })
  variableTable?: Variable[];
}
