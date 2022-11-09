import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attachment } from "./attachment";


// ModifyAttachmentsRequest
/** 
 * Request to modify the attachments of a student submission.
**/
export class ModifyAttachmentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addAttachments", elemType: shared.Attachment })
  addAttachments?: Attachment[];
}
