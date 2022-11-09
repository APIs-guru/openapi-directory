import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceBusinessContext } from "./servicebusinesscontext";
import { VerificationToken } from "./verificationtoken";

export enum VerifyLocationRequestMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED"
,    Address = "ADDRESS"
,    Email = "EMAIL"
,    PhoneCall = "PHONE_CALL"
,    Sms = "SMS"
,    Auto = "AUTO"
,    VettedPartner = "VETTED_PARTNER"
}


// VerifyLocationRequest
/** 
 * Request message for Verifications.VerifyLocation.
**/
export class VerifyLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: ServiceBusinessContext;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=mailerContact" })
  mailerContact?: string;

  @Metadata({ data: "json, name=method" })
  method?: VerifyLocationRequestMethodEnum;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=token" })
  token?: VerificationToken;
}
