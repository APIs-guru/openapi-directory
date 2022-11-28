import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



// StructuredMessage
/** 
 * A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.
**/
export class StructuredMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageKey" })
  messageKey?: string;

  @SpeakeasyMetadata({ data: "json, name=messageText" })
  messageText?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: Parameter })
  parameters?: Parameter[];
}
