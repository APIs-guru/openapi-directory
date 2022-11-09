import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReceivedMessage } from "./receivedmessage";
/**
 * Response for the `Pull` method.
**/
export declare class PullResponse extends SpeakeasyBase {
    receivedMessages?: ReceivedMessage[];
}
