import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect).
**/
export declare class OidcToken extends SpeakeasyBase {
    audience?: string;
    serviceAccountEmail?: string;
}
