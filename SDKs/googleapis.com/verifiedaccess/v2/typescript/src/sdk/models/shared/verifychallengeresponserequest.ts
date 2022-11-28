import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyChallengeResponseRequest
/** 
 * Signed ChallengeResponse.
**/
export class VerifyChallengeResponseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=challengeResponse" })
  challengeResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=expectedIdentity" })
  expectedIdentity?: string;
}
