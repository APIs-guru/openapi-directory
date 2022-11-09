import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CallbackCompletionBatchRequest
/** 
 * Any information to send back to Workflows when completing an action callback as part of a batch request.
**/
export class CallbackCompletionBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=callbackId" })
  callbackId: string;

  @Metadata({ data: "json, name=outputFields" })
  outputFields: Map<string, string>;
}
