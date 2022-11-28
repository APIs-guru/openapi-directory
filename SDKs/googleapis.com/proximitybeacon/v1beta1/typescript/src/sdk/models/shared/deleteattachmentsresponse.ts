import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteAttachmentsResponse
/** 
 * Response for a request to delete attachments.
**/
export class DeleteAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numDeleted" })
  numDeleted?: number;
}
