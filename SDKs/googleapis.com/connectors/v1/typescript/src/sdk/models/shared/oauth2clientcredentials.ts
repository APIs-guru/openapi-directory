import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Secret } from "./secret";


// Oauth2ClientCredentials
/** 
 * Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
**/
export class Oauth2ClientCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: Secret;
}
