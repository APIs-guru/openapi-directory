import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocalizationOptionsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLocalizationOptionsRequest extends SpeakeasyBase {
    security: GetLocalizationOptionsSecurity;
}
export declare class GetLocalizationOptionsResponse extends SpeakeasyBase {
    contentType: string;
    localizationOptions?: shared.LocalizationOption[];
    statusCode: number;
}
