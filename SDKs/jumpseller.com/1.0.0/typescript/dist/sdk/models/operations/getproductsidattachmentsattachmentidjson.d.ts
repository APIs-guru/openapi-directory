import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdAttachmentsAttachmentIdJsonPathParams extends SpeakeasyBase {
    attachmentId: number;
    id: number;
}
export declare class GetProductsIdAttachmentsAttachmentIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdAttachmentsAttachmentIdJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdAttachmentsAttachmentIdJsonPathParams;
    queryParams: GetProductsIdAttachmentsAttachmentIdJsonQueryParams;
}
export declare class GetProductsIdAttachmentsAttachmentIdJsonResponse extends SpeakeasyBase {
    attachment?: shared.Attachment;
    contentType: string;
    notFound?: any;
    statusCode: number;
}
