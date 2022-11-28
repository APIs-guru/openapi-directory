import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaAttestationTokenResponse
/** 
 * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
**/
export class GoogleFirebaseAppcheckV1betaAttestationTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestationToken" })
  attestationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
