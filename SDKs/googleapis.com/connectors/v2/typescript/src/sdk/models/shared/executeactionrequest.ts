import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecuteActionRequest
/** 
 * Request message for ActionService.ExecuteAction
**/
export class ExecuteActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;
}
