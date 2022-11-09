import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIdentitytoolkitAdminV2AllowlistOnly
/** 
 * Defines a policy of only allowing regions by explicitly adding them to an allowlist.
**/
export class GoogleCloudIdentitytoolkitAdminV2AllowlistOnly extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedRegions" })
  allowedRegions?: string[];
}
