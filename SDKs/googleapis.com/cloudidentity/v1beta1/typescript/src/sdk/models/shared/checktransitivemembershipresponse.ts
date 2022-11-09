import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckTransitiveMembershipResponse
/** 
 * The response message for MembershipsService.CheckTransitiveMembership.
**/
export class CheckTransitiveMembershipResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasMembership" })
  hasMembership?: boolean;
}
