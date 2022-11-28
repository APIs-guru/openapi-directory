import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipRole } from "./membershiprole";



// UpdateMembershipRolesParams
/** 
 * The details of an update to a `MembershipRole`.
**/
export class UpdateMembershipRolesParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldMask" })
  fieldMask?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipRole" })
  membershipRole?: MembershipRole;
}
