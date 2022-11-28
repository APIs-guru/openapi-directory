import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
import { JwtClaims } from "./jwtclaims";



// Oauth2JwtBearer
/** 
 * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
**/
export class Oauth2JwtBearer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: Secret;

  @SpeakeasyMetadata({ data: "json, name=jwtClaims" })
  jwtClaims?: JwtClaims;
}
