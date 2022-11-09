import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";


// IngestMessageResponse
/** 
 * Acknowledges that a message has been ingested into the specified HL7v2 store.
**/
export class IngestMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hl7Ack" })
  hl7Ack?: string;

  @Metadata({ data: "json, name=message" })
  message?: Message;
}
