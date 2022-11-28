import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RequestPhoneVerificationRequestPhoneVerificationMethodEnum {
    PhoneVerificationMethodUnspecified = "PHONE_VERIFICATION_METHOD_UNSPECIFIED",
    Sms = "SMS",
    PhoneCall = "PHONE_CALL"
}


// RequestPhoneVerificationRequest
/** 
 * Request message for the RequestPhoneVerification method.
**/
export class RequestPhoneVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneRegionCode" })
  phoneRegionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneVerificationMethod" })
  phoneVerificationMethod?: RequestPhoneVerificationRequestPhoneVerificationMethodEnum;
}
