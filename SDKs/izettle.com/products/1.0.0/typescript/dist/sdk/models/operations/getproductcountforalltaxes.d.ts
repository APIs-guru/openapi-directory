import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductCountForAllTaxesSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetProductCountForAllTaxesRequest extends SpeakeasyBase {
    security: GetProductCountForAllTaxesSecurity;
}
export declare class GetProductCountForAllTaxesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxRateProductCountResponse?: shared.TaxRateProductCountResponse;
}
