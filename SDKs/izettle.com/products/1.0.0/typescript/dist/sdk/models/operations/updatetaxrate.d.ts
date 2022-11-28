import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTaxRatePathParams extends SpeakeasyBase {
    taxRateUuid: string;
}
export declare class UpdateTaxRateSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class UpdateTaxRateRequest extends SpeakeasyBase {
    pathParams: UpdateTaxRatePathParams;
    request: shared.TaxRateUpdateRequest;
    security: UpdateTaxRateSecurity;
}
export declare class UpdateTaxRateResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    taxRate?: shared.TaxRate;
}
