import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CallbackCompletionRequest
/** 
 * Any information to send back to Workflows when completing an action callback.
**/
export class CallbackCompletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputFields" })
  outputFields: Map<string, string>;
}
