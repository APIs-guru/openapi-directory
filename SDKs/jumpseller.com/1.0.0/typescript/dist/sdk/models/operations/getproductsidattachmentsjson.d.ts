import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdAttachmentsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdAttachmentsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdAttachmentsJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdAttachmentsJsonPathParams;
    queryParams: GetProductsIdAttachmentsJsonQueryParams;
}
export declare class GetProductsIdAttachmentsJsonResponse extends SpeakeasyBase {
    attachments?: shared.Attachment[];
    contentType: string;
    notFound?: any;
    statusCode: number;
}
