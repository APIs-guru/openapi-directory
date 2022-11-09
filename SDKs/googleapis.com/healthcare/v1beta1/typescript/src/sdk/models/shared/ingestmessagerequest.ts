import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";


// IngestMessageRequest
/** 
 * Ingests a message into the specified HL7v2 store.
**/
export class IngestMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: Message;
}
