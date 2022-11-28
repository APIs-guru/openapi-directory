import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaxRatePathParams extends SpeakeasyBase {
    taxRateUuid: string;
}
export declare class GetTaxRateSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetTaxRateRequest extends SpeakeasyBase {
    pathParams: GetTaxRatePathParams;
    security: GetTaxRateSecurity;
}
export declare class GetTaxRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxRate?: shared.TaxRate;
}
