import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2OAuthResponseType } from "./googlecloudidentitytoolkitadminv2oauthresponsetype";


// GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
/** 
 * Configuration options for authenticating with an OAuth IDP.
**/
export class GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=responseType" })
  responseType?: GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
}
