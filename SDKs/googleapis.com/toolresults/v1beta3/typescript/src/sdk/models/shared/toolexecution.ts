import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ToolExitCode } from "./toolexitcode";
import { FileReference } from "./filereference";
import { ToolOutputReference } from "./tooloutputreference";


// ToolExecution
/** 
 * An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
**/
export class ToolExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=commandLineArguments" })
  commandLineArguments?: string[];

  @Metadata({ data: "json, name=exitCode" })
  exitCode?: ToolExitCode;

  @Metadata({ data: "json, name=toolLogs", elemType: shared.FileReference })
  toolLogs?: FileReference[];

  @Metadata({ data: "json, name=toolOutputs", elemType: shared.ToolOutputReference })
  toolOutputs?: ToolOutputReference[];
}
