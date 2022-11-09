import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyChallengeResponseResult
/** 
 * Result message for VerifiedAccess.VerifyChallengeResponse.
**/
export class VerifyChallengeResponseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceEnrollmentId" })
  deviceEnrollmentId?: string;

  @Metadata({ data: "json, name=devicePermanentId" })
  devicePermanentId?: string;

  @Metadata({ data: "json, name=signedPublicKeyAndChallenge" })
  signedPublicKeyAndChallenge?: string;

  @Metadata({ data: "json, name=verificationOutput" })
  verificationOutput?: string;
}
