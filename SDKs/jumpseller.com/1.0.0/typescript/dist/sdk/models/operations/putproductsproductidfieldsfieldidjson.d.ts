import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProductsProductIdFieldsFieldIdJsonPathParams extends SpeakeasyBase {
    fieldId: number;
    productId: number;
}
export declare class PutProductsProductIdFieldsFieldIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutProductsProductIdFieldsFieldIdJsonRequest extends SpeakeasyBase {
    pathParams: PutProductsProductIdFieldsFieldIdJsonPathParams;
    queryParams: PutProductsProductIdFieldsFieldIdJsonQueryParams;
}
export declare class PutProductsProductIdFieldsFieldIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    productCustomField?: shared.ProductCustomField;
    statusCode: number;
}
