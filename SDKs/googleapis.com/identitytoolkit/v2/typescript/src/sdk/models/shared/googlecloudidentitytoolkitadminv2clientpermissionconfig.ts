import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2ClientPermissions } from "./googlecloudidentitytoolkitadminv2clientpermissions";



// GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig
/** 
 * Options related to how clients making requests on behalf of a tenant should be configured.
**/
export class GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: GoogleCloudIdentitytoolkitAdminV2ClientPermissions;
}
