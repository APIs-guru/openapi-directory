import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OAuthSettings
/** 
 * Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.
**/
export class OAuthSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=loginHint" })
  loginHint?: string;
}
