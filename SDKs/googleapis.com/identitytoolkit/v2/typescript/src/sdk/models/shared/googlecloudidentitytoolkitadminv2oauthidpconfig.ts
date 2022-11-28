import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2OAuthResponseType } from "./googlecloudidentitytoolkitadminv2oauthresponsetype";



// GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
/** 
 * Configuration options for authenticating with an OAuth IDP.
**/
export class GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=responseType" })
  responseType?: GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
}
