import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProductsProductIdFieldsFieldIdJsonPathParams extends SpeakeasyBase {
    fieldId: number;
    productId: number;
}
export declare class DeleteProductsProductIdFieldsFieldIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteProductsProductIdFieldsFieldIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteProductsProductIdFieldsFieldIdJsonPathParams;
    queryParams: DeleteProductsProductIdFieldsFieldIdJsonQueryParams;
}
export declare class DeleteProductsProductIdFieldsFieldIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    messageObject?: any;
    notFound?: any;
    statusCode: number;
}
