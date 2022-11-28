import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProductsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteProductsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteProductsIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteProductsIdJsonPathParams;
    queryParams: DeleteProductsIdJsonQueryParams;
}
export declare class DeleteProductsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteProductsIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
