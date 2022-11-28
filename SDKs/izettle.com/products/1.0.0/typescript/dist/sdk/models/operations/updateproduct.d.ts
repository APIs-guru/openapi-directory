import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProductPathParams extends SpeakeasyBase {
    organizationUuid: string;
    productUuid: string;
}
export declare class UpdateProductHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateProductSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class UpdateProductRequest extends SpeakeasyBase {
    pathParams: UpdateProductPathParams;
    headers: UpdateProductHeaders;
    request: shared.ProductUpdateRequest;
    security: UpdateProductSecurity;
}
export declare class UpdateProductResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
