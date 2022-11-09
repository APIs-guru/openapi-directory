import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressInput } from "./addressinput";
import { ServiceBusinessContext } from "./servicebusinesscontext";
import { EmailInput } from "./emailinput";
import { PhoneInput } from "./phoneinput";

export enum VerifyLocationRequestMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED"
,    Address = "ADDRESS"
,    Email = "EMAIL"
,    PhoneCall = "PHONE_CALL"
,    Sms = "SMS"
,    Auto = "AUTO"
}


// VerifyLocationRequest
/** 
 * Request message for Verifications.VerifyLocation.
**/
export class VerifyLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressInput" })
  addressInput?: AddressInput;

  @Metadata({ data: "json, name=context" })
  context?: ServiceBusinessContext;

  @Metadata({ data: "json, name=emailInput" })
  emailInput?: EmailInput;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=method" })
  method?: VerifyLocationRequestMethodEnum;

  @Metadata({ data: "json, name=phoneInput" })
  phoneInput?: PhoneInput;
}
