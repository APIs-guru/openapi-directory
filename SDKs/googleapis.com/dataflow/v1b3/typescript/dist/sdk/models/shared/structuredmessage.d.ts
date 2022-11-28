import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.
**/
export declare class StructuredMessage extends SpeakeasyBase {
    messageKey?: string;
    messageText?: string;
    parameters?: Parameter[];
}
