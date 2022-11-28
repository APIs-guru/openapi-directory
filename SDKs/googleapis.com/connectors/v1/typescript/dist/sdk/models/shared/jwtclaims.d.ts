import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JWT claims used for the jwt-bearer authorization grant.
**/
export declare class JwtClaims extends SpeakeasyBase {
    audience?: string;
    issuer?: string;
    subject?: string;
}
