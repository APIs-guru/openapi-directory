import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SignedData } from "./signeddata";



// VerifyChallengeResponseRequest
/** 
 * signed ChallengeResponse
**/
export class VerifyChallengeResponseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=challengeResponse" })
  challengeResponse?: SignedData;

  @SpeakeasyMetadata({ data: "json, name=expectedIdentity" })
  expectedIdentity?: string;
}
