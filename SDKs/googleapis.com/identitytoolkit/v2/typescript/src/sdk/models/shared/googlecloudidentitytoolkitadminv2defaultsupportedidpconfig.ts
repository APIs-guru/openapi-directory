import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig } from "./googlecloudidentitytoolkitadminv2applesigninconfig";


// GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig
/** 
 * Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.
**/
export class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=appleSignInConfig" })
  appleSignInConfig?: GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
