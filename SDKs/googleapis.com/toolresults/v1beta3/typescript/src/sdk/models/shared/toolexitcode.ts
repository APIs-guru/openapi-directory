import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ToolExitCode
/** 
 * Exit code from a tool execution.
**/
export class ToolExitCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;
}
