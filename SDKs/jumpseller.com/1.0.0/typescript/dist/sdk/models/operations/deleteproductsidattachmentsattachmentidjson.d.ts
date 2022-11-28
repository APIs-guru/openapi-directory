import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProductsIdAttachmentsAttachmentIdJsonPathParams extends SpeakeasyBase {
    attachmentId: number;
    id: number;
}
export declare class DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteProductsIdAttachmentsAttachmentIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteProductsIdAttachmentsAttachmentIdJsonPathParams;
    queryParams: DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams;
}
export declare class DeleteProductsIdAttachmentsAttachmentIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteProductsIdAttachmentsAttachmentIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
