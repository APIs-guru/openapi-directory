import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasImageAttachmentsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasImageAttachmentsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasImageAttachmentsPartialUpdatePathParams;
    request: shared.ImageAttachmentInput;
}
export declare class ExtrasImageAttachmentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    imageAttachment?: shared.ImageAttachment;
    statusCode: number;
}
