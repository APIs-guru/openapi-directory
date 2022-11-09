import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse
/** 
 * Response message for the GenerateAppAttestChallenge method.
**/
export class GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=challenge" })
  challenge?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
