import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerMessage } from "./workermessage";
/**
 * A request for sending worker messages to the service.
**/
export declare class SendWorkerMessagesRequest extends SpeakeasyBase {
    location?: string;
    workerMessages?: WorkerMessage[];
}
