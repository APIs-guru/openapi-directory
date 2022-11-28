import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationToken } from "./verificationtoken";



// GenerateVerificationTokenResponse
/** 
 * Response message for Verifications.GenerateVerificationToken.
**/
export class GenerateVerificationTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: VerificationToken;
}
