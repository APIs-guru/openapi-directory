import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedUserRoleInput } from "./assigneduserrole";
/**
 * Request message for BulkEditAssignedUserRoles.
**/
export declare class BulkEditAssignedUserRolesRequestInput extends SpeakeasyBase {
    createdAssignedUserRoles?: AssignedUserRoleInput[];
    deletedAssignedUserRoles?: string[];
}
