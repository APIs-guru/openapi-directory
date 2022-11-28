import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipRole } from "./membershiprole";
/**
 * The details of an update to a `MembershipRole`.
**/
export declare class UpdateMembershipRolesParams extends SpeakeasyBase {
    fieldMask?: string;
    membershipRole?: MembershipRole;
}
