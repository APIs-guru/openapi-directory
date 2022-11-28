import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProductsIdOptionsOptionIdValuesJsonPathParams extends SpeakeasyBase {
    id: number;
    optionId: number;
}
export declare class PostProductsIdOptionsOptionIdValuesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostProductsIdOptionsOptionIdValuesJsonRequest extends SpeakeasyBase {
    pathParams: PostProductsIdOptionsOptionIdValuesJsonPathParams;
    queryParams: PostProductsIdOptionsOptionIdValuesJsonQueryParams;
    request: shared.ProductOptionValueEdit;
}
export declare class PostProductsIdOptionsOptionIdValuesJsonResponse extends SpeakeasyBase {
    contentType: string;
    productOptionValue?: shared.ProductOptionValue;
    statusCode: number;
}
