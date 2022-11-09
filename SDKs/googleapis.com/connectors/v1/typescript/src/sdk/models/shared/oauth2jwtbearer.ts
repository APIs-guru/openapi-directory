import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Secret } from "./secret";
import { JwtClaims } from "./jwtclaims";


// Oauth2JwtBearer
/** 
 * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
**/
export class Oauth2JwtBearer extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientKey" })
  clientKey?: Secret;

  @Metadata({ data: "json, name=jwtClaims" })
  jwtClaims?: JwtClaims;
}
