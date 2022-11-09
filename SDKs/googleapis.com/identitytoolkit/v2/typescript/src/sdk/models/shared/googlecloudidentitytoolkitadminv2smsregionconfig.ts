import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2AllowByDefault } from "./googlecloudidentitytoolkitadminv2allowbydefault";
import { GoogleCloudIdentitytoolkitAdminV2AllowlistOnly } from "./googlecloudidentitytoolkitadminv2allowlistonly";


// GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig
/** 
 * Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
**/
export class GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowByDefault" })
  allowByDefault?: GoogleCloudIdentitytoolkitAdminV2AllowByDefault;

  @Metadata({ data: "json, name=allowlistOnly" })
  allowlistOnly?: GoogleCloudIdentitytoolkitAdminV2AllowlistOnly;
}
