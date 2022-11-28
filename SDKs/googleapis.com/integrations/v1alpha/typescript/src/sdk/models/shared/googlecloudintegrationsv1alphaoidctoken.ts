import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaOidcToken
/** 
 * OIDC Token
**/
export class GoogleCloudIntegrationsV1alphaOidcToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenExpireTime" })
  tokenExpireTime?: string;
}
