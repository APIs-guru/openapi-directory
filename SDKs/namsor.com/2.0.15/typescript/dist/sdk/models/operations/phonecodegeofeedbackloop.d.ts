import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneCodeGeoFeedbackLoopPathParams extends SpeakeasyBase {
    countryIso2: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    phoneNumberE164: string;
}
export declare class PhoneCodeGeoFeedbackLoopSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PhoneCodeGeoFeedbackLoopRequest extends SpeakeasyBase {
    pathParams: PhoneCodeGeoFeedbackLoopPathParams;
    security: PhoneCodeGeoFeedbackLoopSecurity;
}
export declare class PhoneCodeGeoFeedbackLoopResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;
    statusCode: number;
}
