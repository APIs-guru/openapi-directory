import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyChallengeResponseRequest
/** 
 * Signed ChallengeResponse.
**/
export class VerifyChallengeResponseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=challengeResponse" })
  challengeResponse?: string;

  @Metadata({ data: "json, name=expectedIdentity" })
  expectedIdentity?: string;
}
