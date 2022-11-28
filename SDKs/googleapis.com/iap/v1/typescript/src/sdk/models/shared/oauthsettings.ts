import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OAuthSettings
/** 
 * Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.
**/
export class OAuthSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loginHint" })
  loginHint?: string;
}
