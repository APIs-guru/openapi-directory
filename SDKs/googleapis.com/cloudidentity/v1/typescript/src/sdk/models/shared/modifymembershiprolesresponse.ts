import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";



// ModifyMembershipRolesResponse
/** 
 * The response message for MembershipsService.ModifyMembershipRoles.
**/
export class ModifyMembershipRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=membership" })
  membership?: Membership;
}
