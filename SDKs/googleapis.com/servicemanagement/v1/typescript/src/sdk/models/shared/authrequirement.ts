import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthRequirement
/** 
 * User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
**/
export class AuthRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audiences" })
  audiences?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;
}
