import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaxRatesSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetTaxRatesRequest extends SpeakeasyBase {
    security: GetTaxRatesSecurity;
}
export declare class GetTaxRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxRatesResponses?: shared.TaxRatesResponse[];
}
