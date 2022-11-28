import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasImageAttachmentsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasImageAttachmentsUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasImageAttachmentsUpdatePathParams;
    request: shared.ImageAttachmentInput;
}
export declare class ExtrasImageAttachmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    imageAttachment?: shared.ImageAttachment;
    statusCode: number;
}
