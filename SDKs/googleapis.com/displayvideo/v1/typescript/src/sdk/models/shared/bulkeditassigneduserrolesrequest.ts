import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedUserRoleInput } from "./assigneduserrole";



// BulkEditAssignedUserRolesRequestInput
/** 
 * Request message for BulkEditAssignedUserRoles.
**/
export class BulkEditAssignedUserRolesRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAssignedUserRoles", elemType: AssignedUserRoleInput })
  createdAssignedUserRoles?: AssignedUserRoleInput[];

  @SpeakeasyMetadata({ data: "json, name=deletedAssignedUserRoles" })
  deletedAssignedUserRoles?: string[];
}
