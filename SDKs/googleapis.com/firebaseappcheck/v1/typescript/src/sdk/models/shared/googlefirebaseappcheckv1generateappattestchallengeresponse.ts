import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse
/** 
 * Response message for the GenerateAppAttestChallenge method.
**/
export class GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
