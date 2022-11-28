import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Request to send a message to specified target.
**/
export declare class SendMessageRequest extends SpeakeasyBase {
    message?: Message;
    validateOnly?: boolean;
}
