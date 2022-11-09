import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MembershipRole } from "./membershiprole";


// UpdateMembershipRolesParams
/** 
 * The details of an update to a `MembershipRole`.
**/
export class UpdateMembershipRolesParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldMask" })
  fieldMask?: string;

  @Metadata({ data: "json, name=membershipRole" })
  membershipRole?: MembershipRole;
}
