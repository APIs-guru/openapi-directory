import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceAzureAdConfig } from "./identityserviceazureadconfig";
import { IdentityServiceGoogleConfig } from "./identityservicegoogleconfig";
import { IdentityServiceOidcConfig } from "./identityserviceoidcconfig";
import { IdentityServiceAzureAdConfigInput } from "./identityserviceazureadconfig";
import { IdentityServiceOidcConfigInput } from "./identityserviceoidcconfig";



// IdentityServiceAuthMethod
/** 
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
export class IdentityServiceAuthMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=azureadConfig" })
  azureadConfig?: IdentityServiceAzureAdConfig;

  @SpeakeasyMetadata({ data: "json, name=googleConfig" })
  googleConfig?: IdentityServiceGoogleConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oidcConfig" })
  oidcConfig?: IdentityServiceOidcConfig;

  @SpeakeasyMetadata({ data: "json, name=proxy" })
  proxy?: string;
}


// IdentityServiceAuthMethodInput
/** 
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
export class IdentityServiceAuthMethodInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=azureadConfig" })
  azureadConfig?: IdentityServiceAzureAdConfigInput;

  @SpeakeasyMetadata({ data: "json, name=googleConfig" })
  googleConfig?: IdentityServiceGoogleConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oidcConfig" })
  oidcConfig?: IdentityServiceOidcConfigInput;

  @SpeakeasyMetadata({ data: "json, name=proxy" })
  proxy?: string;
}
