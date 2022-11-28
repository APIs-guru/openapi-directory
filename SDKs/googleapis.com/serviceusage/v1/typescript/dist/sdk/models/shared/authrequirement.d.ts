import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
**/
export declare class AuthRequirement extends SpeakeasyBase {
    audiences?: string;
    providerId?: string;
}
