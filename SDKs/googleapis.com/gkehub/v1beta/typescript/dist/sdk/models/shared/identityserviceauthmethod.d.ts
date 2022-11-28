import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceAzureAdConfig } from "./identityserviceazureadconfig";
import { IdentityServiceGoogleConfig } from "./identityservicegoogleconfig";
import { IdentityServiceOidcConfig } from "./identityserviceoidcconfig";
import { IdentityServiceAzureAdConfigInput } from "./identityserviceazureadconfig";
import { IdentityServiceOidcConfigInput } from "./identityserviceoidcconfig";
/**
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
export declare class IdentityServiceAuthMethod extends SpeakeasyBase {
    azureadConfig?: IdentityServiceAzureAdConfig;
    googleConfig?: IdentityServiceGoogleConfig;
    name?: string;
    oidcConfig?: IdentityServiceOidcConfig;
    proxy?: string;
}
/**
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
export declare class IdentityServiceAuthMethodInput extends SpeakeasyBase {
    azureadConfig?: IdentityServiceAzureAdConfigInput;
    googleConfig?: IdentityServiceGoogleConfig;
    name?: string;
    oidcConfig?: IdentityServiceOidcConfigInput;
    proxy?: string;
}
