import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Acknowledges that a message has been ingested into the specified HL7v2 store.
**/
export declare class IngestMessageResponse extends SpeakeasyBase {
    hl7Ack?: string;
    message?: Message;
}
