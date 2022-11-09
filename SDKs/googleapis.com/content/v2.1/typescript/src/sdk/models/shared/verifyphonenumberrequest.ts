import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VerifyPhoneNumberRequestPhoneVerificationMethodEnum {
    PhoneVerificationMethodUnspecified = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
,    Sms = "SMS"
,    PhoneCall = "PHONE_CALL"
}


// VerifyPhoneNumberRequest
/** 
 * Request message for the VerifyPhoneNumber method.
**/
export class VerifyPhoneNumberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneVerificationMethod" })
  phoneVerificationMethod?: VerifyPhoneNumberRequestPhoneVerificationMethodEnum;

  @Metadata({ data: "json, name=verificationCode" })
  verificationCode?: string;

  @Metadata({ data: "json, name=verificationId" })
  verificationId?: string;
}
