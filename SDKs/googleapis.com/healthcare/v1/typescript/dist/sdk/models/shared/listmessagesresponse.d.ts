import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Lists the messages in the specified HL7v2 store.
**/
export declare class ListMessagesResponse extends SpeakeasyBase {
    hl7V2Messages?: Message[];
    nextPageToken?: string;
}
