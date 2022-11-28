import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdVariantsVariantIdJsonPathParams extends SpeakeasyBase {
    id: number;
    variantId: number;
}
export declare class GetProductsIdVariantsVariantIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdVariantsVariantIdJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdVariantsVariantIdJsonPathParams;
    queryParams: GetProductsIdVariantsVariantIdJsonQueryParams;
}
export declare class GetProductsIdVariantsVariantIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    statusCode: number;
    variant?: shared.Variant;
}
