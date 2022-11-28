import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyPhoneNumberResponse
/** 
 * Response message for the VerifyPhoneNumber method.
**/
export class VerifyPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verifiedPhoneNumber" })
  verifiedPhoneNumber?: string;
}
