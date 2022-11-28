import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShellTask
/** 
 * A task which consists of a shell command for the worker to execute.
**/
export class ShellTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string;

  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;
}
