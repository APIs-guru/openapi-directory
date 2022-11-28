import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeInitializationAction
/** 
 * Specifies an executable to run on a fully configured node and a timeout period for executable completion.
**/
export class NodeInitializationAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executableFile" })
  executableFile?: string;

  @SpeakeasyMetadata({ data: "json, name=executionTimeout" })
  executionTimeout?: string;
}
