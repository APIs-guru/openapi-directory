import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Parameter } from "./parameter";


// StructuredMessage
/** 
 * A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.
**/
export class StructuredMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageKey" })
  messageKey?: string;

  @Metadata({ data: "json, name=messageText" })
  messageText?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters?: Parameter[];
}
