import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityServiceOidcConfig
/** 
 * Configuration for OIDC Auth flow.
**/
export class IdentityServiceOidcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAuthorityData" })
  certificateAuthorityData?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=deployCloudConsoleProxy" })
  deployCloudConsoleProxy?: boolean;

  @Metadata({ data: "json, name=enableAccessToken" })
  enableAccessToken?: boolean;

  @Metadata({ data: "json, name=encryptedClientSecret" })
  encryptedClientSecret?: string;

  @Metadata({ data: "json, name=extraParams" })
  extraParams?: string;

  @Metadata({ data: "json, name=groupPrefix" })
  groupPrefix?: string;

  @Metadata({ data: "json, name=groupsClaim" })
  groupsClaim?: string;

  @Metadata({ data: "json, name=issuerUri" })
  issuerUri?: string;

  @Metadata({ data: "json, name=kubectlRedirectUri" })
  kubectlRedirectUri?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string;

  @Metadata({ data: "json, name=userClaim" })
  userClaim?: string;

  @Metadata({ data: "json, name=userPrefix" })
  userPrefix?: string;
}
