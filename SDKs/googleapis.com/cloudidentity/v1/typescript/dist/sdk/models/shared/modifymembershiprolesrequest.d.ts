import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MembershipRole } from "./membershiprole";
import { UpdateMembershipRolesParams } from "./updatemembershiprolesparams";
/**
 * The request message for MembershipsService.ModifyMembershipRoles.
**/
export declare class ModifyMembershipRolesRequest extends SpeakeasyBase {
    addRoles?: MembershipRole[];
    removeRoles?: string[];
    updateRolesParams?: UpdateMembershipRolesParams[];
}
