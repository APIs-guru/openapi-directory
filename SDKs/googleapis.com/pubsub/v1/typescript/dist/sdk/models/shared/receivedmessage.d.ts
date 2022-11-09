import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * A message and its corresponding acknowledgment ID.
**/
export declare class ReceivedMessage extends SpeakeasyBase {
    ackId?: string;
    deliveryAttempt?: number;
    message?: PubsubMessage;
}
