import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipRole1 } from "./membershiprole1";
import { UpdateMembershipRolesParams } from "./updatemembershiprolesparams";
/**
 * The request message for MembershipsService.ModifyMembershipRoles.
**/
export declare class ModifyMembershipRolesRequest extends SpeakeasyBase {
    addRoles?: MembershipRole1[];
    removeRoles?: string[];
    updateRolesParams?: UpdateMembershipRolesParams[];
}
