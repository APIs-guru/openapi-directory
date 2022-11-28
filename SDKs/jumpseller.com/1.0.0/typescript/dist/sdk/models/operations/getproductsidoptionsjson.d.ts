import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdOptionsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdOptionsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdOptionsJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdOptionsJsonPathParams;
    queryParams: GetProductsIdOptionsJsonQueryParams;
}
export declare class GetProductsIdOptionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    productOptions?: shared.ProductOption[];
    statusCode: number;
}
