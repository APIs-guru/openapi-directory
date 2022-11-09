import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthRequirement
/** 
 * User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
**/
export class AuthRequirement extends SpeakeasyBase {
  @Metadata({ data: "json, name=audiences" })
  audiences?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;
}
