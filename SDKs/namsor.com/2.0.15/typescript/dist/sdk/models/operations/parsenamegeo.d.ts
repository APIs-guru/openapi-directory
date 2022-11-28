import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseNameGeoPathParams extends SpeakeasyBase {
    countryIso2: string;
    nameFull: string;
}
export declare class ParseNameGeoSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ParseNameGeoRequest extends SpeakeasyBase {
    pathParams: ParseNameGeoPathParams;
    security: ParseNameGeoSecurity;
}
export declare class ParseNameGeoResponse extends SpeakeasyBase {
    contentType: string;
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
}
