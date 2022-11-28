import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse
/** 
 * Response message for the GeneratePlayIntegrityChallenge method.
**/
export class GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
