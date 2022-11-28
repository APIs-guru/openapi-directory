import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProductsIdFieldsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostProductsIdFieldsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostProductsIdFieldsJsonRequest extends SpeakeasyBase {
    pathParams: PostProductsIdFieldsJsonPathParams;
    queryParams: PostProductsIdFieldsJsonQueryParams;
    request: shared.AddProductCustomField;
}
export declare class PostProductsIdFieldsJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    product?: shared.Product;
    statusCode: number;
}
