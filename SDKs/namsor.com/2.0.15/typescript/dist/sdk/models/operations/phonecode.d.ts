import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneCodePathParams extends SpeakeasyBase {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}
export declare class PhoneCodeSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PhoneCodeRequest extends SpeakeasyBase {
    pathParams: PhoneCodePathParams;
    security: PhoneCodeSecurity;
}
export declare class PhoneCodeResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;
    statusCode: number;
}
