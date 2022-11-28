import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
/**
 * The response message for the ListAttachments endpoint.
**/
export declare class ListAttachmentsResponse extends SpeakeasyBase {
    attachments?: Attachment[];
    nextPageToken?: string;
}
