import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProductsIdOptionsOptionIdJsonPathParams extends SpeakeasyBase {
    id: number;
    optionId: number;
}
export declare class DeleteProductsIdOptionsOptionIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteProductsIdOptionsOptionIdJsonPathParams;
    queryParams: DeleteProductsIdOptionsOptionIdJsonQueryParams;
}
export declare class DeleteProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteProductsIdOptionsOptionIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
