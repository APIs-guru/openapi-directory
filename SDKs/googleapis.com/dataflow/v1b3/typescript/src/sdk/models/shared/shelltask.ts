import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShellTask
/** 
 * A task which consists of a shell command for the worker to execute.
**/
export class ShellTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string;

  @Metadata({ data: "json, name=exitCode" })
  exitCode?: number;
}
