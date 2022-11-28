import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionRequest
/** 
 * A request to run the function in a script. The script is identified by the specified `script_id`. Executing a function on a script returns results based on the implementation of the script.
**/
export class ExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devMode" })
  devMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=function" })
  function?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: any[];

  @SpeakeasyMetadata({ data: "json, name=sessionState" })
  sessionState?: string;
}
