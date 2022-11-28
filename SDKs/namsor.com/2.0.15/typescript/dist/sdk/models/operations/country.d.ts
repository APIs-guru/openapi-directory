import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CountryPathParams extends SpeakeasyBase {
    personalNameFull: string;
}
export declare class CountrySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CountryRequest extends SpeakeasyBase {
    pathParams: CountryPathParams;
    security: CountrySecurity;
}
export declare class CountryResponse extends SpeakeasyBase {
    contentType: string;
    personalNameGeoOut?: shared.PersonalNameGeoOut;
    statusCode: number;
}
