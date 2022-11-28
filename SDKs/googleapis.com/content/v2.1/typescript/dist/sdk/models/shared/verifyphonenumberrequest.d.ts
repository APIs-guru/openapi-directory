import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VerifyPhoneNumberRequestPhoneVerificationMethodEnum {
    PhoneVerificationMethodUnspecified = "PHONE_VERIFICATION_METHOD_UNSPECIFIED",
    Sms = "SMS",
    PhoneCall = "PHONE_CALL"
}
/**
 * Request message for the VerifyPhoneNumber method.
**/
export declare class VerifyPhoneNumberRequest extends SpeakeasyBase {
    phoneVerificationMethod?: VerifyPhoneNumberRequestPhoneVerificationMethodEnum;
    verificationCode?: string;
    verificationId?: string;
}
