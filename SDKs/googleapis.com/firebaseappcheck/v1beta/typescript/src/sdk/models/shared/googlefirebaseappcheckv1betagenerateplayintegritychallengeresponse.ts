import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse
/** 
 * Response message for the GeneratePlayIntegrityChallenge method.
**/
export class GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
