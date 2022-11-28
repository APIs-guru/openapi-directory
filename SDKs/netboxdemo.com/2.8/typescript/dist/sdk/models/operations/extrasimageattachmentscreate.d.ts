import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasImageAttachmentsCreateRequest extends SpeakeasyBase {
    request: shared.ImageAttachmentInput;
}
export declare class ExtrasImageAttachmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    imageAttachment?: shared.ImageAttachment;
    statusCode: number;
}
