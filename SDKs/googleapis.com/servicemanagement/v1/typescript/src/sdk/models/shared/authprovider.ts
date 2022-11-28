import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JwtLocation } from "./jwtlocation";



// AuthProvider
/** 
 * Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
**/
export class AuthProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audiences" })
  audiences?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizationUrl" })
  authorizationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=jwksUri" })
  jwksUri?: string;

  @SpeakeasyMetadata({ data: "json, name=jwtLocations", elemType: JwtLocation })
  jwtLocations?: JwtLocation[];
}
