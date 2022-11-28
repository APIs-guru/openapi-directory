import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";



// AttachmentsListResponse
/** 
 * A list of Attachments. This is the response from the server to GET requests on the attachments collection.
**/
export class AttachmentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Attachment })
  items?: Attachment[];

  @SpeakeasyMetadata()
  kind?: string;
}
