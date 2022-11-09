import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Attachment } from "./attachment";
/**
 * Request to modify the attachments of a student submission.
**/
export declare class ModifyAttachmentsRequest extends SpeakeasyBase {
    addAttachments?: Attachment[];
}
