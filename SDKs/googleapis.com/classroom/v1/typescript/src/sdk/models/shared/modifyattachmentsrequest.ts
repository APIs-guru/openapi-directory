import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";



// ModifyAttachmentsRequest
/** 
 * Request to modify the attachments of a student submission.
**/
export class ModifyAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addAttachments", elemType: Attachment })
  addAttachments?: Attachment[];
}
