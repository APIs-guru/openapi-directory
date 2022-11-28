import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestPhoneVerificationResponse
/** 
 * Response message for the RequestPhoneVerification method.
**/
export class RequestPhoneVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verificationId" })
  verificationId?: string;
}
