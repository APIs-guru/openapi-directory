import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2ClientPermissions } from "./googlecloudidentitytoolkitadminv2clientpermissions";


// GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig
/** 
 * Options related to how clients making requests on behalf of a tenant should be configured.
**/
export class GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: GoogleCloudIdentitytoolkitAdminV2ClientPermissions;
}
