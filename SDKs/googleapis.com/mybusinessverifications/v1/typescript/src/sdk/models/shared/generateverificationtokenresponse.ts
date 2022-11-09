import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationToken } from "./verificationtoken";


// GenerateVerificationTokenResponse
/** 
 * Response message for Verifications.GenerateVerificationToken.
**/
export class GenerateVerificationTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: VerificationToken;
}
