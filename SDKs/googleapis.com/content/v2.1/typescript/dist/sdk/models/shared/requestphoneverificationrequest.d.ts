import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RequestPhoneVerificationRequestPhoneVerificationMethodEnum {
    PhoneVerificationMethodUnspecified = "PHONE_VERIFICATION_METHOD_UNSPECIFIED",
    Sms = "SMS",
    PhoneCall = "PHONE_CALL"
}
/**
 * Request message for the RequestPhoneVerification method.
**/
export declare class RequestPhoneVerificationRequest extends SpeakeasyBase {
    languageCode?: string;
    phoneNumber?: string;
    phoneRegionCode?: string;
    phoneVerificationMethod?: RequestPhoneVerificationRequestPhoneVerificationMethodEnum;
}
