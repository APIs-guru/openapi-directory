import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";



// ListAttachmentsResponse
/** 
 * The response message for the ListAttachments endpoint.
**/
export class ListAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment })
  attachments?: Attachment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
