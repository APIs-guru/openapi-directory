import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SignedData } from "./signeddata";


// VerifyChallengeResponseRequest
/** 
 * signed ChallengeResponse
**/
export class VerifyChallengeResponseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=challengeResponse" })
  challengeResponse?: SignedData;

  @Metadata({ data: "json, name=expectedIdentity" })
  expectedIdentity?: string;
}
