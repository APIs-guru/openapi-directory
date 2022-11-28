import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizationCodeLink
/** 
 * This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.
**/
export class AuthorizationCodeLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=enablePkce" })
  enablePkce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
