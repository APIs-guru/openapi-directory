import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityServiceGoogleConfig } from "./identityservicegoogleconfig";
import { IdentityServiceOidcConfig } from "./identityserviceoidcconfig";
/**
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
export declare class IdentityServiceAuthMethod extends SpeakeasyBase {
    googleConfig?: IdentityServiceGoogleConfig;
    name?: string;
    oidcConfig?: IdentityServiceOidcConfig;
    proxy?: string;
}
