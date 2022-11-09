import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIdentitytoolkitAdminV2Tenant } from "./googlecloudidentitytoolkitadminv2tenant";


// GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse
/** 
 * Response message for ListTenants.
**/
export class GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tenants", elemType: shared.GoogleCloudIdentitytoolkitAdminV2Tenant })
  tenants?: GoogleCloudIdentitytoolkitAdminV2Tenant[];
}
