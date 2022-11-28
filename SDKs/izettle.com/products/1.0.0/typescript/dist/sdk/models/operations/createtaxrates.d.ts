import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTaxRatesSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class CreateTaxRatesRequest extends SpeakeasyBase {
    request: shared.TaxRatesCreateRequest;
    security: CreateTaxRatesSecurity;
}
export declare class CreateTaxRatesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    taxRatesResponse?: shared.TaxRatesResponse;
}
