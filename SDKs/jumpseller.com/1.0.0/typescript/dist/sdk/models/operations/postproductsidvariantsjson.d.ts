import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProductsIdVariantsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostProductsIdVariantsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostProductsIdVariantsJsonRequest extends SpeakeasyBase {
    pathParams: PostProductsIdVariantsJsonPathParams;
    queryParams: PostProductsIdVariantsJsonQueryParams;
    request: shared.VariantEdit;
}
export declare class PostProductsIdVariantsJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    statusCode: number;
    variant?: shared.Variant;
}
