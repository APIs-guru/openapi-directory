import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2Tenant } from "./googlecloudidentitytoolkitadminv2tenant";



// GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse
/** 
 * Response message for ListTenants.
**/
export class GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tenants", elemType: GoogleCloudIdentitytoolkitAdminV2Tenant })
  tenants?: GoogleCloudIdentitytoolkitAdminV2Tenant[];
}
