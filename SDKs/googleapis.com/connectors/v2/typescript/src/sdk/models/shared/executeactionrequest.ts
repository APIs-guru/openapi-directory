import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecuteActionRequest
/** 
 * Request message for ActionService.ExecuteAction
**/
export class ExecuteActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;
}
