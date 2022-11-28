import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerMessage } from "./workermessage";



// SendWorkerMessagesRequest
/** 
 * A request for sending worker messages to the service.
**/
export class SendWorkerMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=workerMessages", elemType: WorkerMessage })
  workerMessages?: WorkerMessage[];
}
