import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceBusinessContext } from "./servicebusinesscontext";
import { VerificationToken } from "./verificationtoken";
export declare enum VerifyLocationRequestMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO",
    VettedPartner = "VETTED_PARTNER"
}
/**
 * Request message for Verifications.VerifyLocation.
**/
export declare class VerifyLocationRequest extends SpeakeasyBase {
    context?: ServiceBusinessContext;
    emailAddress?: string;
    languageCode?: string;
    mailerContact?: string;
    method?: VerifyLocationRequestMethodEnum;
    phoneNumber?: string;
    token?: VerificationToken;
}
