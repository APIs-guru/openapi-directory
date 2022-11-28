import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitAdminV2AllowlistOnly
/** 
 * Defines a policy of only allowing regions by explicitly adding them to an allowlist.
**/
export class GoogleCloudIdentitytoolkitAdminV2AllowlistOnly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedRegions" })
  allowedRegions?: string[];
}
