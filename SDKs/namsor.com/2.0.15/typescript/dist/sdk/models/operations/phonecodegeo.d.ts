import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneCodeGeoPathParams extends SpeakeasyBase {
    countryIso2: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}
export declare class PhoneCodeGeoSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PhoneCodeGeoRequest extends SpeakeasyBase {
    pathParams: PhoneCodeGeoPathParams;
    security: PhoneCodeGeoSecurity;
}
export declare class PhoneCodeGeoResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;
    statusCode: number;
}
