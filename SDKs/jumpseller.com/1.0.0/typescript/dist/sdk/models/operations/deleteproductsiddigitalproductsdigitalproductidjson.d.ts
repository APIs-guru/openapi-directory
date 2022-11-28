import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams extends SpeakeasyBase {
    digitalProductId: number;
    id: number;
}
export declare class DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams;
    queryParams: DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams;
}
export declare class DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteProductsIdDigitalProductsDigitalProductIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
