import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressVerificationData } from "./addressverificationdata";
import { EmailVerificationData } from "./emailverificationdata";
export declare enum VerificationOptionVerificationMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO",
    VettedPartner = "VETTED_PARTNER"
}
/**
 * The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
**/
export declare class VerificationOption extends SpeakeasyBase {
    addressData?: AddressVerificationData;
    emailData?: EmailVerificationData;
    phoneNumber?: string;
    verificationMethod?: VerificationOptionVerificationMethodEnum;
}
