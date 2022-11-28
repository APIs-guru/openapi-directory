import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityServiceAzureAdConfigInput
/** 
 * Configuration for the AzureAD Auth flow.
**/
export class IdentityServiceAzureAdConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=kubectlRedirectUri" })
  kubectlRedirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: string;
}


// IdentityServiceAzureAdConfig
/** 
 * Configuration for the AzureAD Auth flow.
**/
export class IdentityServiceAzureAdConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptedClientSecret" })
  encryptedClientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=kubectlRedirectUri" })
  kubectlRedirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: string;
}
