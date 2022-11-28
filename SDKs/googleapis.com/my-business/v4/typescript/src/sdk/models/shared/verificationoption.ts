import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressVerificationData } from "./addressverificationdata";
import { EmailVerificationData } from "./emailverificationdata";
import { PhoneVerificationData } from "./phoneverificationdata";


export enum VerificationOptionVerificationMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO"
}


// VerificationOption
/** 
 * The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
**/
export class VerificationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressData" })
  addressData?: AddressVerificationData;

  @SpeakeasyMetadata({ data: "json, name=emailData" })
  emailData?: EmailVerificationData;

  @SpeakeasyMetadata({ data: "json, name=phoneData" })
  phoneData?: PhoneVerificationData;

  @SpeakeasyMetadata({ data: "json, name=verificationMethod" })
  verificationMethod?: VerificationOptionVerificationMethodEnum;
}
