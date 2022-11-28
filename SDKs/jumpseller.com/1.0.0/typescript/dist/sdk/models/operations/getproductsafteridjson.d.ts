import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsAfterIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsAfterIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    locale?: string;
    login: string;
}
export declare class GetProductsAfterIdJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsAfterIdJsonPathParams;
    queryParams: GetProductsAfterIdJsonQueryParams;
}
export declare class GetProductsAfterIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    products?: shared.Product[];
    statusCode: number;
}
