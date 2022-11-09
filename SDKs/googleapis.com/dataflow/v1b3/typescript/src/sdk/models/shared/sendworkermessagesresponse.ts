import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkerMessageResponse } from "./workermessageresponse";


// SendWorkerMessagesResponse
/** 
 * The response to the worker messages.
**/
export class SendWorkerMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=workerMessageResponses", elemType: shared.WorkerMessageResponse })
  workerMessageResponses?: WorkerMessageResponse[];
}
