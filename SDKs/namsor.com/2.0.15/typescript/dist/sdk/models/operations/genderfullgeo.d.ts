import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenderFullGeoPathParams extends SpeakeasyBase {
    countryIso2: string;
    fullName: string;
}
export declare class GenderFullGeoSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GenderFullGeoRequest extends SpeakeasyBase {
    pathParams: GenderFullGeoPathParams;
    security: GenderFullGeoSecurity;
}
export declare class GenderFullGeoResponse extends SpeakeasyBase {
    contentType: string;
    personalNameGenderedOut?: shared.PersonalNameGenderedOut;
    statusCode: number;
}
