import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestPhoneVerificationResponse
/** 
 * Response message for the RequestPhoneVerification method.
**/
export class RequestPhoneVerificationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=verificationId" })
  verificationId?: string;
}
