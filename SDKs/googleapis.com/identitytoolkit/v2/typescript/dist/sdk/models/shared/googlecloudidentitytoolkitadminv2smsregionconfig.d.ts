import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2AllowByDefault } from "./googlecloudidentitytoolkitadminv2allowbydefault";
import { GoogleCloudIdentitytoolkitAdminV2AllowlistOnly } from "./googlecloudidentitytoolkitadminv2allowlistonly";
/**
 * Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig extends SpeakeasyBase {
    allowByDefault?: GoogleCloudIdentitytoolkitAdminV2AllowByDefault;
    allowlistOnly?: GoogleCloudIdentitytoolkitAdminV2AllowlistOnly;
}
