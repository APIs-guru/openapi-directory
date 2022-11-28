import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedUserRole } from "./assigneduserrole";



export class BulkEditAssignedUserRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAssignedUserRoles", elemType: AssignedUserRole })
  createdAssignedUserRoles?: AssignedUserRole[];
}
