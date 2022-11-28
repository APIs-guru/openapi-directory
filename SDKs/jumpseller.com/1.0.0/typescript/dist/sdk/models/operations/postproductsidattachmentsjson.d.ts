import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProductsIdAttachmentsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostProductsIdAttachmentsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostProductsIdAttachmentsJsonRequest extends SpeakeasyBase {
    pathParams: PostProductsIdAttachmentsJsonPathParams;
    queryParams: PostProductsIdAttachmentsJsonQueryParams;
    request: shared.AttachmentEdit;
}
export declare class PostProductsIdAttachmentsJsonResponse extends SpeakeasyBase {
    attachment?: shared.Attachment;
    contentType: string;
    statusCode: number;
}
