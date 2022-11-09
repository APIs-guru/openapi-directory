import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatMessage } from "./formatmessage";

export enum StatusMessageRefersToEnum {
    Unspecified = "UNSPECIFIED"
,    BreakpointSourceLocation = "BREAKPOINT_SOURCE_LOCATION"
,    BreakpointCondition = "BREAKPOINT_CONDITION"
,    BreakpointExpression = "BREAKPOINT_EXPRESSION"
,    BreakpointAge = "BREAKPOINT_AGE"
,    BreakpointCanaryFailed = "BREAKPOINT_CANARY_FAILED"
,    VariableName = "VARIABLE_NAME"
,    VariableValue = "VARIABLE_VALUE"
}


// StatusMessage
/** 
 * Represents a contextual status message. The message can indicate an error or informational status, and refer to specific parts of the containing object. For example, the `Breakpoint.status` field can indicate an error referring to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
**/
export class StatusMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: FormatMessage;

  @Metadata({ data: "json, name=isError" })
  isError?: boolean;

  @Metadata({ data: "json, name=refersTo" })
  refersTo?: StatusMessageRefersToEnum;
}
