import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageInput } from "./message";



// IngestMessageRequestInput
/** 
 * Ingests a message into the specified HL7v2 store.
**/
export class IngestMessageRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: MessageInput;
}
