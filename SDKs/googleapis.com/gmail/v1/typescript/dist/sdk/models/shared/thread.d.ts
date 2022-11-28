import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * A collection of messages representing a conversation.
**/
export declare class Thread extends SpeakeasyBase {
    historyId?: string;
    id?: string;
    messages?: Message[];
    snippet?: string;
}
