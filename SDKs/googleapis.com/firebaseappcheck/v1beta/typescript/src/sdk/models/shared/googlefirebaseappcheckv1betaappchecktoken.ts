import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaAppCheckToken
/** 
 * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
**/
export class GoogleFirebaseAppcheckV1betaAppCheckToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestationToken" })
  attestationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
