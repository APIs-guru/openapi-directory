import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerMessageResponse } from "./workermessageresponse";



// SendWorkerMessagesResponse
/** 
 * The response to the worker messages.
**/
export class SendWorkerMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workerMessageResponses", elemType: WorkerMessageResponse })
  workerMessageResponses?: WorkerMessageResponse[];
}
