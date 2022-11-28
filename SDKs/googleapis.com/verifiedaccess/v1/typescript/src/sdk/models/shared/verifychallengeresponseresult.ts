import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyChallengeResponseResult
/** 
 * Result message for VerifiedAccess.VerifyChallengeResponse.
**/
export class VerifyChallengeResponseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceEnrollmentId" })
  deviceEnrollmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=devicePermanentId" })
  devicePermanentId?: string;

  @SpeakeasyMetadata({ data: "json, name=signedPublicKeyAndChallenge" })
  signedPublicKeyAndChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationOutput" })
  verificationOutput?: string;
}
