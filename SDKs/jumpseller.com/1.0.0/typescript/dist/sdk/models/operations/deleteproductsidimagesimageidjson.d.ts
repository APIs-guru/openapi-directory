import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProductsIdImagesImageIdJsonPathParams extends SpeakeasyBase {
    id: number;
    imageId: number;
}
export declare class DeleteProductsIdImagesImageIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteProductsIdImagesImageIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteProductsIdImagesImageIdJsonPathParams;
    queryParams: DeleteProductsIdImagesImageIdJsonQueryParams;
}
export declare class DeleteProductsIdImagesImageIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteProductsIdImagesImageIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
