import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse
/** 
 * Response message for the GenerateAppAttestChallenge method.
**/
export class GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=challenge" })
  challenge?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
