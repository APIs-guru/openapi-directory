import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CallbackCompletionBatchRequest
/** 
 * Any information to send back to Workflows when completing an action callback as part of a batch request.
**/
export class CallbackCompletionBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackId" })
  callbackId: string;

  @SpeakeasyMetadata({ data: "json, name=outputFields" })
  outputFields: Map<string, string>;
}
