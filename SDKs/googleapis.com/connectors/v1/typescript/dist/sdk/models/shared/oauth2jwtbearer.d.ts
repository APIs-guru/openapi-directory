import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
import { JwtClaims } from "./jwtclaims";
/**
 * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
**/
export declare class Oauth2JwtBearer extends SpeakeasyBase {
    clientKey?: Secret;
    jwtClaims?: JwtClaims;
}
