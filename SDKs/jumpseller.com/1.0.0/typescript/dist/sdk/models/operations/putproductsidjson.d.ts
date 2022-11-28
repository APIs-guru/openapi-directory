import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProductsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutProductsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    locale?: string;
    login: string;
}
export declare class PutProductsIdJsonRequest extends SpeakeasyBase {
    pathParams: PutProductsIdJsonPathParams;
    queryParams: PutProductsIdJsonQueryParams;
    request: shared.ProductEdit;
}
export declare class PutProductsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    product?: shared.Product;
    statusCode: number;
}
