import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse
/** 
 * Response message for the GenerateAppAttestChallenge method.
**/
export class GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
