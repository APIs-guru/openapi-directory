import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attachment } from "./attachment";


// CreateAttachmentRequest
/** 
 * The request message for the CreateAttachment endpoint.
**/
export class CreateAttachmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachment" })
  attachment?: Attachment;
}
