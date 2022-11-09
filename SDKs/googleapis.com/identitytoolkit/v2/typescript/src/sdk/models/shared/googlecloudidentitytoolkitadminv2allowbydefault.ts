import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIdentitytoolkitAdminV2AllowByDefault
/** 
 * Defines a policy of allowing every region by default and adding disallowed regions to a disallow list.
**/
export class GoogleCloudIdentitytoolkitAdminV2AllowByDefault extends SpeakeasyBase {
  @Metadata({ data: "json, name=disallowedRegions" })
  disallowedRegions?: string[];
}
