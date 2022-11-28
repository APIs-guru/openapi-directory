import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// ListMessagesResponse
/** 
 * Lists the messages in the specified HL7v2 store.
**/
export class ListMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hl7V2Messages", elemType: Message })
  hl7V2Messages?: Message[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
