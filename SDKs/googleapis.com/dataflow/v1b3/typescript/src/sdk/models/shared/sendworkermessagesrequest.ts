import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkerMessage } from "./workermessage";


// SendWorkerMessagesRequest
/** 
 * A request for sending worker messages to the service.
**/
export class SendWorkerMessagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=workerMessages", elemType: shared.WorkerMessage })
  workerMessages?: WorkerMessage[];
}
