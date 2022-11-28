import { SpeakeasyBase } from "../../../internal/utils";
import { JwtLocation } from "./jwtlocation";
/**
 * Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
**/
export declare class AuthProvider extends SpeakeasyBase {
    audiences?: string;
    authorizationUrl?: string;
    id?: string;
    issuer?: string;
    jwksUri?: string;
    jwtLocations?: JwtLocation[];
}
