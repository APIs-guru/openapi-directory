import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";


// ListMessagesResponse
/** 
 * Lists the messages in the specified HL7v2 store.
**/
export class ListMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hl7V2Messages", elemType: shared.Message })
  hl7V2Messages?: Message[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
