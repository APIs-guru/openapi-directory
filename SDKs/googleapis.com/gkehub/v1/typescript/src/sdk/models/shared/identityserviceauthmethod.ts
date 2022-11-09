import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityServiceGoogleConfig } from "./identityservicegoogleconfig";
import { IdentityServiceOidcConfig } from "./identityserviceoidcconfig";


// IdentityServiceAuthMethod
/** 
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
export class IdentityServiceAuthMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleConfig" })
  googleConfig?: IdentityServiceGoogleConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oidcConfig" })
  oidcConfig?: IdentityServiceOidcConfig;

  @Metadata({ data: "json, name=proxy" })
  proxy?: string;
}
