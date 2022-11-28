import { SpeakeasyBase } from "../../../internal/utils";
import { MessagePart } from "./messagepart";
/**
 * An email message.
**/
export declare class Message extends SpeakeasyBase {
    historyId?: string;
    id?: string;
    internalDate?: string;
    labelIds?: string[];
    payload?: MessagePart;
    raw?: string;
    sizeEstimate?: number;
    snippet?: string;
    threadId?: string;
}
