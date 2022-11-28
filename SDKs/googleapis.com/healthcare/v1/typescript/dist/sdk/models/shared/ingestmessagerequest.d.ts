import { SpeakeasyBase } from "../../../internal/utils";
import { MessageInput } from "./message";
/**
 * Ingests a message into the specified HL7v2 store.
**/
export declare class IngestMessageRequestInput extends SpeakeasyBase {
    message?: MessageInput;
}
