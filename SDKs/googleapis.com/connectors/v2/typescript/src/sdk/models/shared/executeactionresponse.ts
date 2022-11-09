import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecuteActionResponse
/** 
 * Response message for ActionService.ExecuteAction
**/
export class ExecuteActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results" })
  results?: Map<string, any>[];
}
