import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyPhoneNumberResponse
/** 
 * Response message for the VerifyPhoneNumber method.
**/
export class VerifyPhoneNumberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=verifiedPhoneNumber" })
  verifiedPhoneNumber?: string;
}
