import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProductsIdOptionsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostProductsIdOptionsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostProductsIdOptionsJsonRequest extends SpeakeasyBase {
    pathParams: PostProductsIdOptionsJsonPathParams;
    queryParams: PostProductsIdOptionsJsonQueryParams;
    request: shared.ProductOptionEdit;
}
export declare class PostProductsIdOptionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    productOption?: shared.ProductOption;
    statusCode: number;
}
