import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasImageAttachmentsListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class ExtrasImageAttachmentsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ImageAttachment[];
}
export declare class ExtrasImageAttachmentsListRequest extends SpeakeasyBase {
    queryParams: ExtrasImageAttachmentsListQueryParams;
}
export declare class ExtrasImageAttachmentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasImageAttachmentsList200ApplicationJsonObject?: ExtrasImageAttachmentsList200ApplicationJson;
}
