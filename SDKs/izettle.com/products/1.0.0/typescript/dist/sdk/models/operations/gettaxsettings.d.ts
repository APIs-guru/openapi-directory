import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaxSettingsSecurity extends SpeakeasyBase {
    zettleOauth?: shared.SchemeZettleOauth;
    zettleApiKey?: shared.SchemeZettleApiKey;
}
export declare class GetTaxSettingsRequest extends SpeakeasyBase {
    security: GetTaxSettingsSecurity;
}
export declare class GetTaxSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxSettingsResponse?: shared.TaxSettingsResponse;
}
