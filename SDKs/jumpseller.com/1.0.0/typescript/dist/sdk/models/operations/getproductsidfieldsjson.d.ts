import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdFieldsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdFieldsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdFieldsJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdFieldsJsonPathParams;
    queryParams: GetProductsIdFieldsJsonQueryParams;
}
export declare class GetProductsIdFieldsJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    productCustomFields?: shared.ProductCustomField[];
    statusCode: number;
}
