import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProductsIdOptionsOptionIdValuesValueIdJsonPathParams extends SpeakeasyBase {
    id: number;
    optionId: number;
    valueId: number;
}
export declare class DeleteProductsIdOptionsOptionIdValuesValueIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteProductsIdOptionsOptionIdValuesValueIdJsonPathParams;
    queryParams: DeleteProductsIdOptionsOptionIdValuesValueIdJsonQueryParams;
}
export declare class DeleteProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteProductsIdOptionsOptionIdValuesValueIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
