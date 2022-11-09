import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttachmentDataRef
/** 
 * A reference to the data of an attachment.
**/
export class AttachmentDataRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
