import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
/**
 * A list of Attachments. This is the response from the server to GET requests on the attachments collection.
**/
export declare class AttachmentsListResponse extends SpeakeasyBase {
    items?: Attachment[];
    kind?: string;
}
