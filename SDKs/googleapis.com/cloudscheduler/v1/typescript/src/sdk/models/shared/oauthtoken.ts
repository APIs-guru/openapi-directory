import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OAuthToken
/** 
 * Contains information needed for generating an [OAuth token](https://developers.google.com/identity/protocols/OAuth2). This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
**/
export class OAuthToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;
}
