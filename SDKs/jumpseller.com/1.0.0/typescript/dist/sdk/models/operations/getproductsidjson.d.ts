import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    locale?: string;
    login: string;
}
export declare class GetProductsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdJsonPathParams;
    queryParams: GetProductsIdJsonQueryParams;
}
export declare class GetProductsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    product?: shared.Product;
    statusCode: number;
}
