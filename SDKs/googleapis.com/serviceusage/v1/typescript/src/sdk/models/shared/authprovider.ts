import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JwtLocation } from "./jwtlocation";


// AuthProvider
/** 
 * Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
**/
export class AuthProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=audiences" })
  audiences?: string;

  @Metadata({ data: "json, name=authorizationUrl" })
  authorizationUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=jwksUri" })
  jwksUri?: string;

  @Metadata({ data: "json, name=jwtLocations", elemType: shared.JwtLocation })
  jwtLocations?: JwtLocation[];
}
