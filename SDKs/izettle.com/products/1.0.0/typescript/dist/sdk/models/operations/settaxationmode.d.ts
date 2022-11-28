import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetTaxationModeSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class SetTaxationModeRequest extends SpeakeasyBase {
    request: shared.TaxSettingsUpdateRequest;
    security: SetTaxationModeSecurity;
}
export declare class SetTaxationModeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    taxSettingsResponse?: shared.TaxSettingsResponse;
}
