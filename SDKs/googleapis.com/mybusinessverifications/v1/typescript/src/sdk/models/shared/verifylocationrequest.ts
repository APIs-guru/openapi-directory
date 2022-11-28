import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceBusinessContext } from "./servicebusinesscontext";
import { VerificationToken } from "./verificationtoken";


export enum VerifyLocationRequestMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO",
    VettedPartner = "VETTED_PARTNER"
}


// VerifyLocationRequest
/** 
 * Request message for Verifications.VerifyLocation.
**/
export class VerifyLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ServiceBusinessContext;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=mailerContact" })
  mailerContact?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: VerifyLocationRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: VerificationToken;
}
