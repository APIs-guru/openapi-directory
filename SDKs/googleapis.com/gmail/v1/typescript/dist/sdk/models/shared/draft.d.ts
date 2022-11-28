import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * A draft email in the user's mailbox.
**/
export declare class Draft extends SpeakeasyBase {
    id?: string;
    message?: Message;
}
