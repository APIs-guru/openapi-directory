import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedUserRole } from "./assigneduserrole";


// BulkEditAssignedUserRolesRequest
/** 
 * Request message for BulkEditAssignedUserRoles.
**/
export class BulkEditAssignedUserRolesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAssignedUserRoles", elemType: shared.AssignedUserRole })
  createdAssignedUserRoles?: AssignedUserRole[];

  @Metadata({ data: "json, name=deletedAssignedUserRoles" })
  deletedAssignedUserRoles?: string[];
}
