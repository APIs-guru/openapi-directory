import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdImagesJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdImagesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdImagesJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdImagesJsonPathParams;
    queryParams: GetProductsIdImagesJsonQueryParams;
}
export declare class GetProductsIdImagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    images?: shared.Image[];
    notFound?: any;
    statusCode: number;
}
