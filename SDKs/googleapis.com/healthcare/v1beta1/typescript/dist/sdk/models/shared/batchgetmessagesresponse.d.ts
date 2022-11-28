import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Gets multiple messages in a specified HL7v2 store.
**/
export declare class BatchGetMessagesResponse extends SpeakeasyBase {
    messages?: Message[];
}
