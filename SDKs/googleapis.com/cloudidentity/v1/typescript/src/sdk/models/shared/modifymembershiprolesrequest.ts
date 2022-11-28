import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipRole1 } from "./membershiprole1";
import { UpdateMembershipRolesParams } from "./updatemembershiprolesparams";



// ModifyMembershipRolesRequest
/** 
 * The request message for MembershipsService.ModifyMembershipRoles.
**/
export class ModifyMembershipRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addRoles", elemType: MembershipRole1 })
  addRoles?: MembershipRole1[];

  @SpeakeasyMetadata({ data: "json, name=removeRoles" })
  removeRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=updateRolesParams", elemType: UpdateMembershipRolesParams })
  updateRolesParams?: UpdateMembershipRolesParams[];
}
