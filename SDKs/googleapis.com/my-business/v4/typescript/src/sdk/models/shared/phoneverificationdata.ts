import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PhoneVerificationData
/** 
 * Display Data for verifications through phone, e.g. phone call, sms.
**/
export class PhoneVerificationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
