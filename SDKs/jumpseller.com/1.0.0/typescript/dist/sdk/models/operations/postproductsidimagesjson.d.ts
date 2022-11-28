import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProductsIdImagesJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostProductsIdImagesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostProductsIdImagesJsonRequest extends SpeakeasyBase {
    pathParams: PostProductsIdImagesJsonPathParams;
    queryParams: PostProductsIdImagesJsonQueryParams;
    request: shared.ImageEdit;
}
export declare class PostProductsIdImagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    image?: shared.Image;
    statusCode: number;
}
