import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MembershipRole } from "./membershiprole";
import { UpdateMembershipRolesParams } from "./updatemembershiprolesparams";


// ModifyMembershipRolesRequest
/** 
 * The request message for MembershipsService.ModifyMembershipRoles.
**/
export class ModifyMembershipRolesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addRoles", elemType: shared.MembershipRole })
  addRoles?: MembershipRole[];

  @Metadata({ data: "json, name=removeRoles" })
  removeRoles?: string[];

  @Metadata({ data: "json, name=updateRolesParams", elemType: shared.UpdateMembershipRolesParams })
  updateRolesParams?: UpdateMembershipRolesParams[];
}
