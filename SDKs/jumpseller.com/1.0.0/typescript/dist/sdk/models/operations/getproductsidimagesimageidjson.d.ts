import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdImagesImageIdJsonPathParams extends SpeakeasyBase {
    id: number;
    imageId: number;
}
export declare class GetProductsIdImagesImageIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdImagesImageIdJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdImagesImageIdJsonPathParams;
    queryParams: GetProductsIdImagesImageIdJsonQueryParams;
}
export declare class GetProductsIdImagesImageIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    image?: shared.Image;
    notFound?: any;
    statusCode: number;
}
