import { SpeakeasyBase } from "../../../internal/utils";
import { AddressInput } from "./addressinput";
import { ServiceBusinessContext } from "./servicebusinesscontext";
import { EmailInput } from "./emailinput";
import { PhoneInput } from "./phoneinput";
export declare enum VerifyLocationRequestMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO"
}
/**
 * Request message for Verifications.VerifyLocation.
**/
export declare class VerifyLocationRequest extends SpeakeasyBase {
    addressInput?: AddressInput;
    context?: ServiceBusinessContext;
    emailInput?: EmailInput;
    languageCode?: string;
    method?: VerifyLocationRequestMethodEnum;
    phoneInput?: PhoneInput;
}
