import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Membership } from "./membership";


// ModifyMembershipRolesResponse
/** 
 * The response message for MembershipsService.ModifyMembershipRoles.
**/
export class ModifyMembershipRolesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=membership" })
  membership?: Membership;
}
