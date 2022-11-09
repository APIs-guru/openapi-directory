import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1AppCheckToken
/** 
 * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
**/
export class GoogleFirebaseAppcheckV1AppCheckToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
