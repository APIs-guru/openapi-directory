import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProductsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    locale?: string;
    login: string;
}
export declare class PostProductsJsonRequest extends SpeakeasyBase {
    queryParams: PostProductsJsonQueryParams;
    request: shared.ProductEdit;
}
export declare class PostProductsJsonResponse extends SpeakeasyBase {
    contentType: string;
    product?: shared.Product;
    statusCode: number;
}
