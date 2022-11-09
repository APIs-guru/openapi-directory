import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attachment } from "./attachment";


// ListAttachmentsResponse
/** 
 * The response message for the ListAttachments endpoint.
**/
export class ListAttachmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.Attachment })
  attachments?: Attachment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
