import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    limit?: number;
    locale?: string;
    login: string;
    page?: number;
}
export declare class GetProductsJsonRequest extends SpeakeasyBase {
    queryParams: GetProductsJsonQueryParams;
}
export declare class GetProductsJsonResponse extends SpeakeasyBase {
    contentType: string;
    products?: shared.Product[];
    statusCode: number;
}
