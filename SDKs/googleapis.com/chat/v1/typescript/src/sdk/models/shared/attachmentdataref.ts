import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachmentDataRef
/** 
 * A reference to the data of an attachment.
**/
export class AttachmentDataRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
