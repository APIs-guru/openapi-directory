import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1betaAppCheckToken
/** 
 * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
**/
export class GoogleFirebaseAppcheckV1betaAppCheckToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestationToken" })
  attestationToken?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
