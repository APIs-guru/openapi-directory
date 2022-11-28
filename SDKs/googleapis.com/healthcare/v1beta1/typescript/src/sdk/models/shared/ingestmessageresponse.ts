import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// IngestMessageResponse
/** 
 * Acknowledges that a message has been ingested into the specified HL7v2 store.
**/
export class IngestMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hl7Ack" })
  hl7Ack?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: Message;
}
