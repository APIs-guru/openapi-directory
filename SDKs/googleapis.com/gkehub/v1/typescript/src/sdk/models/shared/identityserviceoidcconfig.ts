import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityServiceOidcConfig
/** 
 * Configuration for OIDC Auth flow.
**/
export class IdentityServiceOidcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAuthorityData" })
  certificateAuthorityData?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=deployCloudConsoleProxy" })
  deployCloudConsoleProxy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableAccessToken" })
  enableAccessToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptedClientSecret" })
  encryptedClientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=extraParams" })
  extraParams?: string;

  @SpeakeasyMetadata({ data: "json, name=groupPrefix" })
  groupPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=groupsClaim" })
  groupsClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=issuerUri" })
  issuerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=kubectlRedirectUri" })
  kubectlRedirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string;

  @SpeakeasyMetadata({ data: "json, name=userClaim" })
  userClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=userPrefix" })
  userPrefix?: string;
}


// IdentityServiceOidcConfigInput
/** 
 * Configuration for OIDC Auth flow.
**/
export class IdentityServiceOidcConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAuthorityData" })
  certificateAuthorityData?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=deployCloudConsoleProxy" })
  deployCloudConsoleProxy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableAccessToken" })
  enableAccessToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extraParams" })
  extraParams?: string;

  @SpeakeasyMetadata({ data: "json, name=groupPrefix" })
  groupPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=groupsClaim" })
  groupsClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=issuerUri" })
  issuerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=kubectlRedirectUri" })
  kubectlRedirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string;

  @SpeakeasyMetadata({ data: "json, name=userClaim" })
  userClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=userPrefix" })
  userPrefix?: string;
}
