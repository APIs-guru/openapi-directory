import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentInput } from "./attachment";



// CreateAttachmentRequestInput
/** 
 * The request message for the CreateAttachment endpoint.
**/
export class CreateAttachmentRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment" })
  attachment?: AttachmentInput;
}
