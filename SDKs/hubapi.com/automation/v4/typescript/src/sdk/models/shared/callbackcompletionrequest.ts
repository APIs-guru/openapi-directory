import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CallbackCompletionRequest
/** 
 * Any information to send back to Workflows when completing an action callback.
**/
export class CallbackCompletionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputFields" })
  outputFields: Map<string, string>;
}
