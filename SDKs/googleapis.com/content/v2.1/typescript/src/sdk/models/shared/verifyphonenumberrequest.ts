import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VerifyPhoneNumberRequestPhoneVerificationMethodEnum {
    PhoneVerificationMethodUnspecified = "PHONE_VERIFICATION_METHOD_UNSPECIFIED",
    Sms = "SMS",
    PhoneCall = "PHONE_CALL"
}


// VerifyPhoneNumberRequest
/** 
 * Request message for the VerifyPhoneNumber method.
**/
export class VerifyPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneVerificationMethod" })
  phoneVerificationMethod?: VerifyPhoneNumberRequestPhoneVerificationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=verificationCode" })
  verificationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationId" })
  verificationId?: string;
}
