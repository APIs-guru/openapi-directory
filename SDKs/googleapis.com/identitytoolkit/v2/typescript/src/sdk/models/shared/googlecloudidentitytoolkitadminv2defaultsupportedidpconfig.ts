import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig } from "./googlecloudidentitytoolkitadminv2applesigninconfig";



// GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig
/** 
 * Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.
**/
export class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appleSignInConfig" })
  appleSignInConfig?: GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
