import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizationCodeLink
/** 
 * This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.
**/
export class AuthorizationCodeLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=enablePkce" })
  enablePkce?: boolean;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
