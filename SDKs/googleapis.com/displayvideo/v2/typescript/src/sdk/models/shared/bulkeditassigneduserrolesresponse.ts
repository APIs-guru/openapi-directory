import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedUserRole } from "./assigneduserrole";


export class BulkEditAssignedUserRolesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAssignedUserRoles", elemType: shared.AssignedUserRole })
  createdAssignedUserRoles?: AssignedUserRole[];
}
