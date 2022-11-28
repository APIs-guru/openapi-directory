import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ToolExitCode } from "./toolexitcode";
import { FileReference } from "./filereference";
import { ToolOutputReference } from "./tooloutputreference";



// ToolExecution
/** 
 * An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
**/
export class ToolExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commandLineArguments" })
  commandLineArguments?: string[];

  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: ToolExitCode;

  @SpeakeasyMetadata({ data: "json, name=toolLogs", elemType: FileReference })
  toolLogs?: FileReference[];

  @SpeakeasyMetadata({ data: "json, name=toolOutputs", elemType: ToolOutputReference })
  toolOutputs?: ToolOutputReference[];
}
