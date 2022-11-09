import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse
/** 
 * Response message for the GeneratePlayIntegrityChallenge method.
**/
export class GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=challenge" })
  challenge?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
