import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ToolExitCode
/** 
 * Exit code from a tool execution.
**/
export class ToolExitCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=number" })
  number?: number;
}
