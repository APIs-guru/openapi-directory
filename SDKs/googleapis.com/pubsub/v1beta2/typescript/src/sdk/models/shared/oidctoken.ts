import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OidcToken
/** 
 * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect).
**/
export class OidcToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;
}
