import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasImageAttachmentsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasImageAttachmentsReadRequest extends SpeakeasyBase {
    pathParams: ExtrasImageAttachmentsReadPathParams;
}
export declare class ExtrasImageAttachmentsReadResponse extends SpeakeasyBase {
    contentType: string;
    imageAttachment?: shared.ImageAttachment;
    statusCode: number;
}
