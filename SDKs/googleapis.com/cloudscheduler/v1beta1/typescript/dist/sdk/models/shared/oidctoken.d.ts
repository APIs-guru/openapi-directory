import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
**/
export declare class OidcToken extends SpeakeasyBase {
    audience?: string;
    serviceAccountEmail?: string;
}
