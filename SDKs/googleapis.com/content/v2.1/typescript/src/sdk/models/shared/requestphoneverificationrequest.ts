import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RequestPhoneVerificationRequestPhoneVerificationMethodEnum {
    PhoneVerificationMethodUnspecified = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
,    Sms = "SMS"
,    PhoneCall = "PHONE_CALL"
}


// RequestPhoneVerificationRequest
/** 
 * Request message for the RequestPhoneVerification method.
**/
export class RequestPhoneVerificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=phoneRegionCode" })
  phoneRegionCode?: string;

  @Metadata({ data: "json, name=phoneVerificationMethod" })
  phoneVerificationMethod?: RequestPhoneVerificationRequestPhoneVerificationMethodEnum;
}
