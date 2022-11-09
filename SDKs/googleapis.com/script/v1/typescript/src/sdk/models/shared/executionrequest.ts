import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionRequest
/** 
 * A request to run the function in a script. The script is identified by the specified `script_id`. Executing a function on a script returns results based on the implementation of the script.
**/
export class ExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=devMode" })
  devMode?: boolean;

  @Metadata({ data: "json, name=function" })
  function?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: any[];

  @Metadata({ data: "json, name=sessionState" })
  sessionState?: string;
}
