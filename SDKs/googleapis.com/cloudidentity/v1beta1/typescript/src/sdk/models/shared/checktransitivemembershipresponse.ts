import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckTransitiveMembershipResponse
/** 
 * The response message for MembershipsService.CheckTransitiveMembership.
**/
export class CheckTransitiveMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasMembership" })
  hasMembership?: boolean;
}
