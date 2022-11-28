import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProductsIdDigitalProductsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostProductsIdDigitalProductsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostProductsIdDigitalProductsJsonRequest extends SpeakeasyBase {
    pathParams: PostProductsIdDigitalProductsJsonPathParams;
    queryParams: PostProductsIdDigitalProductsJsonQueryParams;
    request: shared.DigitalProductEdit;
}
export declare class PostProductsIdDigitalProductsJsonResponse extends SpeakeasyBase {
    contentType: string;
    digitalProduct?: shared.DigitalProduct;
    statusCode: number;
}
