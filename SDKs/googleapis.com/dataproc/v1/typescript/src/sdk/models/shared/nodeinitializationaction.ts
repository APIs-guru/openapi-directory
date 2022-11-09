import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeInitializationAction
/** 
 * Specifies an executable to run on a fully configured node and a timeout period for executable completion.
**/
export class NodeInitializationAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=executableFile" })
  executableFile?: string;

  @Metadata({ data: "json, name=executionTimeout" })
  executionTimeout?: string;
}
