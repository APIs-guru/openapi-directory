import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1betaAttestationTokenResponse
/** 
 * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
**/
export class GoogleFirebaseAppcheckV1betaAttestationTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestationToken" })
  attestationToken?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
