import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PhoneVerificationData
/** 
 * Display Data for verifications through phone, e.g. phone call, sms.
**/
export class PhoneVerificationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
