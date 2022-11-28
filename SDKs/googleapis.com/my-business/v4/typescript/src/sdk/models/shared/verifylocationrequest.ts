import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressInput } from "./addressinput";
import { ServiceBusinessContext } from "./servicebusinesscontext";
import { EmailInput } from "./emailinput";
import { PhoneInput } from "./phoneinput";


export enum VerifyLocationRequestMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO"
}


// VerifyLocationRequest
/** 
 * Request message for Verifications.VerifyLocation.
**/
export class VerifyLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressInput" })
  addressInput?: AddressInput;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ServiceBusinessContext;

  @SpeakeasyMetadata({ data: "json, name=emailInput" })
  emailInput?: EmailInput;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: VerifyLocationRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=phoneInput" })
  phoneInput?: PhoneInput;
}
