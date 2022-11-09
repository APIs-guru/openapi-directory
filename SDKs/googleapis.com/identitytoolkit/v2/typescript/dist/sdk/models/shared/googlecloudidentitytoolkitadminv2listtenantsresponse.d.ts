import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2Tenant } from "./googlecloudidentitytoolkitadminv2tenant";
/**
 * Response message for ListTenants.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tenants?: GoogleCloudIdentitytoolkitAdminV2Tenant[];
}
