import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProductsIdVariantsVariantIdJsonPathParams extends SpeakeasyBase {
    id: number;
    variantId: number;
}
export declare class PutProductsIdVariantsVariantIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutProductsIdVariantsVariantIdJsonRequest extends SpeakeasyBase {
    pathParams: PutProductsIdVariantsVariantIdJsonPathParams;
    queryParams: PutProductsIdVariantsVariantIdJsonQueryParams;
    request: shared.VariantEdit;
}
export declare class PutProductsIdVariantsVariantIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    statusCode: number;
    variant?: shared.Variant;
}
